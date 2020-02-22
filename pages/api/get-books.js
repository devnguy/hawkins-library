const mysql = require('../../dbcon')

export default function getBooks(req, res) {
  mysql.pool.query(`SELECT * FROM books`, (err, rows, fields) => {
    if (err) {
      next(err);
      return;
    }
    res.send(rows);
  })
}