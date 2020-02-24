const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
    await db.query(escape`
      INSERT INTO events (name, date, guest, description)
      VALUES (${req.body.name}, ${req.body.date}, ${req.body.guest}, ${req.body.description}})`
    )

    const events = await db.query(escape`
      SELECT eventId, name, date, guest, description
      FROM events
    `)
    res.status(200).json(events)
}