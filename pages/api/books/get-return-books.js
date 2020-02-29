const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const checkedOutBooks = await db.query(escape`
    SELECT bookId, title, author, oid, imgUrl, email
    FROM books
    INNER JOIN checkoutOrders ON checkoutOrders.orderId = books.oid
    INNER JOIN customers ON customers.customerId = checkoutOrders.cid
    WHERE email = ${req.body.email}
  `)
  //   console.log('hello from the server')
  //   if (checkedOutBooks.error) {
  //     console.log('hello from the server')
  //     res.status(500).json(checkedOutBooks.error)
  //   } else {
  //     res.status(200).json(checkedOutBooks)
  //   }
  const numberOfBooks = checkedOutBooks.length
  res.status(200).json({
    message: `${numberOfBooks} books found under ${req.body.email}`,
    statusNo: 0,
    checkedOutBooks,
    numberOfBooks,
    userEmail: req.body.email
  })
}
