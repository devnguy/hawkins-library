const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  await db.query(escape`
    UPDATE events
    SET name = ${req.body.name},
        date = ${req.body.date},
        guest = ${req.body.guest}
    WHERE eventId = ${req.body.eventId}
  `)

  const events = await db.query(escape`
    SELECT eventId, name, date, guest, description,
    DATE_FORMAT(date, '%Y %m %d') AS date
    FROM events
  `)

  res.status(200).json(events)
}