/* Reading data from the events table to be displayed on the events page.
 *
 * Queries use sql-template-strings library, which handles
 * implementation of parameterized queries.
 *
 * See https://www.npmjs.com/package/sql-template-strings. */

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const events = await db.query(escape`
    SELECT *, DATE_FORMAT(date, '%m/%d/%Y') AS date
    FROM events
  `)

  res.status(200).json(events)
}
