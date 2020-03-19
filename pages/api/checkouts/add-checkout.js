/* Creating a checkout for the checkoutOrders table. This also
 * updates the oid of any checked out books to null.
 *
 * Queries use sql-template-strings library, which handles
 * implementation of parameterized queries.
 *
 * See https://www.npmjs.com/package/sql-template-strings.*/

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  // Determining whether email is associated with a customer
  const queryForEmail = await db.query(escape`
    SELECT email
    FROM customers
    WHERE email = ${req.body.email}
  `)

  // Counting the number of books a customer has checked out
  const countCustomerBooks = await db.query(escape`
    SELECT COUNT(title)
    FROM books
    INNER JOIN checkoutOrders ON books.oid = checkoutOrders.orderId
    INNER JOIN customers ON checkoutOrders.cid = customers.customerId
    WHERE cid = (SELECT customerId FROM customers WHERE email = ${req.body.email})
  `)

  let statusMessage, statusNumber

  if (queryForEmail.length === 0) {
    statusMessage = 'Email not found.'
    statusNumber = 3
  } else if (req.body.bookIds.length === 0) {
    statusMessage = 'Please select at least one book to checkout.'
    statusNumber = 2
  } else if (countCustomerBooks[0]['COUNT(title)'] == 5) {
    // Customer already has 5 books checked out
    statusMessage =
      'You have already reached the maximum amount of books that can be checked out. Your order could not be processed.'
    statusNumber = 1
  } else if (countCustomerBooks[0]['COUNT(title)'] + req.body.bookIds.length > 5) {
    // More than 5 titles selected for a customer
    const removedBooksNum = countCustomerBooks[0]['COUNT(title)'] + req.body.bookIds.length - 5
    statusMessage =
      'Your order puts you over the maximum amount of books to be checked out. Please remove ' +
      removedBooksNum +
      (removedBooksNum === 1 ? ' book.' : ' books.')
    statusNumber = 1
  } else {
    // Order can be made
    const addOrder = await db.query(escape`
      INSERT INTO checkoutOrders (cid) 
      VALUES ((SELECT customerId FROM customers WHERE email = ${req.body.email}))
    `)

    for (let i = 0; i < req.body.bookIds.length; i++) {
      updateBook = await db.query(escape`
      UPDATE books
      SET oid = (${addOrder.insertId})
      WHERE (bookId = ${req.body.bookIds[i]})
    `)
    }

    statusMessage = 'Checkout successful!'
    statusNumber = 0
  }

  const books = await db.query(escape`
    SELECT * FROM books WHERE oid is NULL;
  `)

  res.status(200).json({ message: statusMessage, statusNo: statusNumber, bookData: books })
}
