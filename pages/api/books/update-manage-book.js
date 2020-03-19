/* Query for updating a book within the books table on the manage books page.
 * This query can update the title, author, publisher, and genre of a book.
 *
 * Queries use sql-template-strings library, which handles
 * implementation of parameterized queries.
 *
 * See https://www.npmjs.com/package/sql-template-strings.*/

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  // Updating a book
  const updateBooks = await db.query(escape`
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

  // Duplicate book title
  if (updateBooks.error && updateBooks.error.code === 'ER_DUP_ENTRY') {
    res
      .status(200)
      .json({ statusNo: 1, statusMessage: 'Error: A book with that title already exists', books })
  } else {
    res.status(200).json({ statusNo: 0, statusMessage: 'Update successful', books })
  }
}
