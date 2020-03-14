/* Query to create a new customer for the customers table.
 *
 * Queries use sql-template-strings library, which handles
 * implementation of parameterized queries.
 *
 * See https://www.npmjs.com/package/sql-template-strings.*/

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const addCustomer = await db.query(escape`
    INSERT INTO customers (firstName, lastName, email, phone)
    VALUES (${req.body.firstName}, ${req.body.lastName},
      ${req.body.email}, ${req.body.phone})
  `)
  // Email address has been taken
  if (addCustomer.error) {
    if (addCustomer.error.sqlMessage.includes('Duplicate entry')) {
      res.json({ message: 'That email is unavailable.', statusNo: 1 })
    } else {
      res.json(addCustomer.error)
    }
  } else {
    res.status(200).json({ message: 'Registered Successfully!', statusNo: 0 })
  }
}
