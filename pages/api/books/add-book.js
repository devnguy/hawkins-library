const db = require('../../../lib/db')
const escape = require('sql-template-strings')

// module.exports = async (req, res) => {
//     const addBook = await db.query(escape`
//       INSERT INTO books (title, author, publisher, genre)
//       VALUES ("The Hobbit", "JRR Tolkein", "George Allen & Unwin", "Fantasy")
//     `)
// }

module.exports = async (req, res) => {
    const addBook =       
      [
        req.body.title, 
        req.body.author, 
        req.body.publisher, 
        req.body.genre
      ]
    
    await db.query(escape`
      INSERT INTO books (title, author, publisher, genre)
      VALUES (${addBook[0]}, ${addBook[1]}, ${addBook[2]}, ${addBook[3]})`
    )

    const books = await db.query(escape`
      SELECT *
      FROM books
    `)
    res.status(200).json(books)
}