const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const queryForEmail = await db.query(escape`
    SELECT email
    FROM customers
    WHERE email = ${req.body.email}
  `)

  if (queryForEmail.length === 0) {
    const books = await db.query(escape`
      SELECT * FROM books WHERE oid is NULL;
    `)

    res.status(200).json({
      message: 'Email not found.',
      statusNo: 3,
      bookData: books
    })
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

    const books = await db.query(escape`
    SELECT * FROM books WHERE oid is NULL;
  `)

    res.status(200).json({ message: 'Checkout successful!', statusNo: 0, bookData: books })
  }
}
