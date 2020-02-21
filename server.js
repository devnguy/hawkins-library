const express = require('express')
const next = require('next')
const mysql = require('./dbcon.js')

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

  server.get('/events', (req, res) => {
    console.log('Events!');

    return app.render(req, res, '/events', req.query);
  })

  server.get('/return', (req, res) => {
    console.log('Return books');

    return app.render(req, res, '/return', req.query);
  })

  server.get('/signup', (req, res) => {
    console.log('Member signup!');

    return app.render(req, res, '/signup', req.query);
  })

  server.get('/manage-books', (req, res) => {
    console.log('Manage books!!');

    return app.render(req, res, '/manage-books', req.query);
  })

  server.get('/manage-checkouts', (req, res) => {
    console.log('Manage checkouts!!!');

    return app.render(req, res, '/manage-checkouts', req.query);
  })

  server.get('/manage-customers', (req, res) => {
    console.log('Manage customers!!!!');

    return app.render(req, res, '/manage-customers', req.query);
  })

  server.get('/manage-events', (req, res) => {
    console.log('Manage events!!!!!');

    return app.render(req, res, '/manage-events', req.query);
  })

  server.get('/manage-registrations', (req, res) => {
    console.log('Manage registrations!!!!!!');

    return app.render(req, res, '/manage-registrations', req.query);
  })

  server.get('/get-books', (req,res,next) => {
    mysql.pool.query(`SELECT * FROM books`, (err, rows, fields) => {
      if (err) {
        next(err);
        return;
      }
      res.send(rows);
    })
  })

  server.get('/get-events', (req,res,next) => {
    mysql.pool.query(`SELECT * FROM events`, (err, rows, fields) => {
      if (err) {
        next(err);
        return;
      }
      res.send(rows);
    })
  })

  server.get('/get-customers', (req,res,next) => {
    mysql.pool.query(`SELECT * FROM customers`, (err, rows, fields) => {
      if(err) {
        next(err);
        return;
      }
      res.send(rows);
    })
  })

  server.get('/get-checkout-orders', (req,res,next) => {
    mysql.pool.query(`SELECT * FROM checkoutOrders`, (err, rows, fields) => {
      if(err) {
        next(err);
        return;
      }
      res.send(rows);
    })
  })

  server.get('/get-event-registrations', (req,res,next) => {
    mysql.pool.query(`SELECT * FROM eventRegistrations`, (err, rows, fields) => {
      if(err) {
        next(err);
        return;
      }
      res.send(rows);
    })
  })

  server.post('/add-book', (req,res,next) => {
    mysql.pool.query(`INSERT INTO books (title, author, publisher, genre) VALUES (?, ?, ?, ?)`,
      [
        req.body.title, 
        req.body.author, 
        req.body.publisher, 
        req.body.genre
      ],
      (err, rows, fields) => {
        if(err) {
          next(err);
          return;
        }
        mysql.pool.query(`SELECT * FROM books`, (err, rows, fields) => {
          if(err) {
            next(err);
            return;
          }
          res.send(rows);
        })
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