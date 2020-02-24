const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const checkouts = await db.query(escape`
    SELECT *
    FROM checkoutOrders
  `)
  if (checkouts.error) {
    res.status(500).json(checkouts.error)
  }
  res.status(200).json(checkouts)
}