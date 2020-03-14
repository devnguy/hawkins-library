/* Query for deleting a book from the books table. */

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  // Deleting the book from the database
  await db.query(escape`
    DELETE FROM books
    WHERE bookId = ${req.body.id}
  `)

  // Reading the updated books table
  const books = await db.query(escape`
    SELECT bookId, oid, title, author, publisher, genre
    FROM books
  `)

  res.status(200).json(books)
}
