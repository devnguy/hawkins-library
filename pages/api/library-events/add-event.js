/* Query for creating a new event within the events table.
 *
 * Queries use sql-template-strings library, which handles
 * implementation of parameterized queries.
 *
 * See https://www.npmjs.com/package/sql-template-strings. */

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  // Creating the new event
  await db.query(escape`
    INSERT INTO events (name, date, guest, description, imgUrl)
    VALUES (${req.body.name}, ${req.body.date}, ${req.body.guest}, 
      ${req.body.description}, ${req.body.imgUrl})
  `)

  // Reading the newly updated events table
  const events = await db.query(escape`
    SELECT eventId, name, date, guest, description
    FROM events
  `)

  res.status(200).json(events)
}
