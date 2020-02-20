const express = require('express')
const next = require('next')

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
    return app.render(req, res, '/library', req.query)
  })


  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})