import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

/**
 * GET: Finds all books
 * POST: Insert a book
 * PATCH: Update book
 * DELETE: Delete book
 * 
 * Each function should return books so react can update state
 */
handler
  .use(middleware)
  
  .get(async (req, res) => {
    try {
      const books = await req.db.collection('books').find().toArray()
      res.json(books)
    } catch (err) {
      console.log(err)
    }
  })

  .post(async (req, res) => {
    const book = {
      "oid": null,
      "title": req.body.title,
      "author": req.body.author,
      "publisher": req.body.publisher,
      "genre": req.body.genre
    }
    req.db.collection('books').insertOne(book, async (err) => {
      if (err) {
        console.log(err)
      }
      const books = await req.db.collection('books').find().toArray()
      res.send(books)
    })
  })

  .patch(async (req, res) => {
    res.send('update book')
  })

  .delete(async (req, res) => {
    res.send('delete book')
  })


export default handler
