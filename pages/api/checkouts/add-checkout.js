const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {    
    await db.query(escape`
      INSERT INTO checkoutOrders (cid)
      VALUES (SELECT customerId FROM customers WHERE email = ${req.body.email})
    `)
}