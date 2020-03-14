/**
 * SELECT query to select rows from events table for
 * pages/admin/manage-events.
 *
 * Queries use sql-template-strings library, which handles
 * implementation of parameterized queries.
 *
 * See https://www.npmjs.com/package/sql-template-strings.
 */

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const events = await db.query(escape`
    SELECT eventId, name, date, guest, description,
    DATE_FORMAT(date, '%Y-%m-%d') AS date
    FROM events
  `)

  res.status(200).json(events)
}
