const express = require('express')
const next = require('next')
var mysql = require('./dbcon.js')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => {
    console.log('hello hello testing server');
    
    return app.render(req, res, '/', req.query)
  })
  
  server.get('/library', (req, res) => {
    console.log('library pageeeee');
    return app.render(req, res, '/library', req.query);
  })

  server.get('/get-books', (req,res,next) => {
    mysql.pool.query(`SELECT * FROM books`, (err, rows, fields) => {
      if (err) {
        next(err)
        return
      }
      res.send(rows)
    })
  })

  server.get('/get-events', (req,res,next) => {
    mysql.pool.query(`SELECT * FROM events`, (err, rows, fields) => {
      if (err) {
        next(err)
        return
      }
      res.send(rows)
    })
  })

  server.get('/get-customers', (req,res,next) => {
    mysql.pool.query(`SELECT * FROM customers`, (err, rows, fields) => {
      if(err) {
        next(err)
        return
      }
      res.send(rows)
    })
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})