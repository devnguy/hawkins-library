const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  await db.query(escape`
    INSERT INTO checkoutOrders (cid)
    VALUES (${req.body.cid})
  `)
}
