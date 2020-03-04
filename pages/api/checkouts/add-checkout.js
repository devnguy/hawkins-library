const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const addOrder = await db.query(escape`
    INSERT INTO checkoutOrders (cid) 
    VALUES ((SELECT customerId FROM customers WHERE email = ${req.body.email}))
  `)
  if (addOrder.error) {
    console.log(addOrder.error)
    // if (addOrder.error.sqlMessage.includes("'cid' cannot be null")) {
    //   res.json({ message: 'Email not found.', statusNo: 1 })
    // }
  } else {
    // console.log(req.body.bookTitles)
    // console.log(req.body.bookTitles.length)
    // nullVals = 5 - req.body.bookTitles.length
    // for (let i = 0; i < nullVals; i++) {
    //   req.body.bookTitles.push(null)
    // }

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
