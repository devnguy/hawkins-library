const mysql = require('../../dbcon')

export default function getBooks(req, res) {
  console.log(req.body);
  console.log(req.query);
  console.log(req.cookies);
  
  // mysql.pool.query(`SELECT * FROM books`, (err, rows, fields) => {
  //   res.send(rows);
  // })
  res.send('hello world')
}