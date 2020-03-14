/* Query for reading data from the customers table.
 *
 * Queries use sql-template-strings library, which handles
 * implementation of parameterized queries.
 *
 * See https://www.npmjs.com/package/sql-template-strings. */

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const books = await db.query(escape`
    SELECT *
    FROM customers
  `)

  res.status(200).json(books)
}
