const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const books = await db.query(escape`
    SELECT * FROM books WHERE genre = ${req.body.genre};
  `)

  res.status(200).json(books)
}
