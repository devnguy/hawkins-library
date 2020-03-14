/* Query for reading any books that have not been checked out.
 * These books will be displayed on the library page. */

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const books = await db.query(escape`
    SELECT * FROM books WHERE oid is NULL;
  `)

  res.status(200).json(books)
}
