const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  for (let i = 0; i < req.body.checkedBookIds.length; i++) {
    updateBook = await db.query(escape`
        UPDATE books
        SET oid = (NULL)
        WHERE (bookId = ${req.body.checkedBookIds[i]})
      `)
  }

  const checkedOutBooks = await db.query(escape`
    SELECT bookId, title, author, oid, imgUrl, email
    FROM books
    INNER JOIN checkoutOrders ON checkoutOrders.orderId = books.oid
    INNER JOIN customers ON customers.customerId = checkoutOrders.cid
    WHERE email = ${req.body.email}
  `)

  const numberOfBooks = checkedOutBooks.length
  res.status(200).json({
    message: `${numberOfBooks} book${numberOfBooks != 1 ? 's' : ''} found under ${req.body.email}`,
    returnMessage: `Return successful!`,
    statusNo: 0,
    checkedOutBooks,
    numberOfBooks,
    userEmail: req.body.email
  })
}
