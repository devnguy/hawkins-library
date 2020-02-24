const db = require('../../../lib/db')
const escape = require('sql-template-strings')

// module.exports = async (req, res) => {
//     const addBook = await db.query(escape`
//       INSERT INTO books (title, author, publisher, genre)
//       VALUES ("The Hobbit", "JRR Tolkein", "George Allen & Unwin", "Fantasy")
//     `)
// }

module.exports = async (req, res) => {
    const addBook = await db.query(escape`
      INSERT INTO books (title, author, publisher, genre)
      VALUES (?, ?, ?, ?)`, 
      [
        req.body.title, 
        req.body.author, 
        req.body.publisher, 
        req.body.genre
      ]
    )
}