const db = require('../../../lib/db')
const escape = require('sql-template-strings')


module.exports = async (req, res) => {
  const addEvent = await db.query(escape`
    INSERT INTO events (name, date, guest)
    VALUES (${req.body.name}, ${req.body.date}, ${req.body.guest})
  `)
  if (addEvent.error) {
    res.status(500).json(addEvent.error)
  }
  const events = await db.query(escape`
    SELECT * 
    FROM events
  `)
  res.status(200).json(events)  
}