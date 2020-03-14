/* Query for updating a book within the books table on the manage books page.
 * This query can update the title, author, publisher, and genre of a book. */

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  // Updating a book
  await db.query(escape`
    UPDATE books
    SET title = ${req.body.title},
        author = ${req.body.author},
        publisher = ${req.body.publisher},
        genre = ${req.body.genre}
    WHERE (bookId = ${req.body.id})
  `)

  // Reading the updated books table data
  const books = await db.query(escape`
    SELECT bookId, oid, title, author, publisher, genre
    FROM books
  `)

  res.status(200).json(books)
}
