/* Query for adding a book into the books table. */

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  // Creating new book
  await db.query(escape`
    INSERT INTO books (title, author, publisher, genre, imgUrl)
    VALUES (${req.body.title}, ${req.body.author}, ${req.body.publisher}, 
      ${req.body.genre}, ${req.body.imgUrl})
  `)

  // Reading the data from books with the newly added book
  const books = await db.query(escape`
    SELECT bookId, oid, title, author, publisher, genre
    FROM books
  `)
  res.status(200).json(books)
}
