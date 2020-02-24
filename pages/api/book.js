const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const books = await db.query(escape`
      SELECT *
      FROM books
    `)
  res.status(200).json(books)
}