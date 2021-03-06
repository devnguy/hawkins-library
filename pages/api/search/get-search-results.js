/**
 * Query used for searching. Selects from books and events tables and
 * returns rows matching the searchTerm.
 *
 * Queries use sql-template-strings library, which handles
 * implementation of parameterized queries.
 *
 * See https://www.npmjs.com/package/sql-template-strings.
 */

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const searchTerm = `%${req.body.searchTerm}%`
  const books = await db.query(escape`
    SELECT * FROM books 
    WHERE title LIKE ${searchTerm} 
    OR author LIKE ${searchTerm} 
    OR genre LIKE ${searchTerm}
  `)

  const events = await db.query(escape`
    SELECT * FROM events 
    WHERE name LIKE ${searchTerm} 
    OR guest LIKE ${searchTerm} 
    OR description LIKE ${searchTerm}
  `)

  res.status(200).json({ books, events })
}
