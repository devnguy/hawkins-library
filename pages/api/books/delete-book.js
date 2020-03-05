const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  await db.query(escape`
    DELETE FROM books
    WHERE bookId = ${req.body.id}
  `)

  const books = await db.query(escape`
    SELECT bookId, oid, title, author, publisher, genre
    FROM books
  `)

  res.status(200).json(books)
}
