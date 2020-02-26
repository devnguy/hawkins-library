const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {    
    await db.query(escape`
      INSERT INTO customers (firstName, lastName, email, phone)
      VALUES (${req.body.firstName}, ${req.body.lastName},
        ${req.body.email}, ${req.body.phone})
    `)
}