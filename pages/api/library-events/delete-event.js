const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  await db.query(escape`
        DELETE FROM events
        WHERE eventId = ${req.body.id}
  `)

  const events = await db.query(escape`
    SELECT eventId, name, date, guest, description,
    DATE_FORMAT(date, '%Y %m %d') AS date
    FROM events
  `)

  res.status(200).json(events)
}
