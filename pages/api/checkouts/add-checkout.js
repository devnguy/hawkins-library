const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const queryForEmail = await db.query(escape`
    SELECT email
    FROM customers
    WHERE email = ${req.body.email}
  `)

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
  } else if (
    countCustomerBooks[0]['COUNT(title)'] == 5 ||
    countCustomerBooks[0]['COUNT(title)'] + req.body.bookIds.length > 5
  ) {
    statusMessage = 'You have already checked out the maximum number of books.'
    statusNumber = 1
  } else {
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
