/* Query for deleting an event from the events table.
 *
 * Queries use sql-template-strings library, which handles
 * implementation of parameterized queries.
 *
 * See https://www.npmjs.com/package/sql-template-strings. */

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  // Deleting the event
  await db.query(escape`
        DELETE FROM events
        WHERE eventId = ${req.body.id}
  `)

  // Reading the newly updated events table
  const events = await db.query(escape`
    SELECT eventId, name, date, guest, description,
    DATE_FORMAT(date, '%Y %m %d') AS date
    FROM events
  `)

  res.status(200).json(events)
}
