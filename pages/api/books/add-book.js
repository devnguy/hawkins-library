const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {    
    await db.query(escape`
      INSERT INTO books (title, author, publisher, genre, imgUrl)
      VALUES (${req.body.title}, ${req.body.author}, ${req.body.publisher}, 
        ${req.body.genre}, ${req.body.imgUrl})
    `)

    const books = await db.query(escape`
      SELECT bookId, oid, title, author, publisher, genre
      FROM books
    `)
    res.status(200).json(books)
}