/**
 * UPDATE query to update a row in the events table. Request body
 * requires id, name, date, guest, and description. Returns the
 * updated event rows to reflect the changes.
 *
 * Queries use sql-template-strings library, which handles
 * implementation of parameterized queries.
 *
 * See https://www.npmjs.com/package/sql-template-strings.
 */

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const updateEvent = await db.query(escape`
    UPDATE events
    SET name = ${req.body.name},
        date = ${req.body.date},
        guest = ${req.body.guest},
        description = ${req.body.description}
    WHERE eventId = ${req.body.id}
  `)

  const events = await db.query(escape`
    SELECT eventId, name, date, guest, description,
    DATE_FORMAT(date, '%Y %m %d') AS date
    FROM events
  `)

  res.status(200).json(events)
}
