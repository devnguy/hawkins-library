const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const updateCustomer = await db.query(escape`
    UPDATE customers
    SET firstName = ${req.body.firstName},
        lastName = ${req.body.lastName},
        email = ${req.body.email},
        phone = ${req.body.phone},
        dateJoined = ${req.body.dateJoined}
    WHERE customerId = ${req.body.id}
  `)

  const customers = await db.query(escape`
    SELECT *
    FROM customers
  `)

  res.status(200).json(customers)
}
