const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const events = await db.query(escape`
    SELECT * 
    FROM events
  `)
  if (events.error) {
    res.status(500).json(events.error)
  }
  res.status(200).json(events)
}