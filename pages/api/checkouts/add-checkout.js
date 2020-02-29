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
    res.status(200).json({ message: 'Checkout successful!', statusNo: 0 })
  }
}
