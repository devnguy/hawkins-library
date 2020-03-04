const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  await db.query(escape`
    DELETE FROM customers
    WHERE customerId = ${req.body.customerId}
  `)

  const customers = await db.query(escape`
    SELECT *
    FROM customers
  `)

  res.status(200).json(customers)
}
