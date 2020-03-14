/* Query for updating a customer within the customers table.
 * The customer's first name, last name, email, and phone.
 *
 * Queries use sql-template-strings library, which handles
 * implementation of parameterized queries.
 *
 * See https://www.npmjs.com/package/sql-template-strings. */

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  // Updating a customer
  const updateCustomer = await db.query(escape`
    UPDATE customers
    SET firstName = ${req.body.firstName},
        lastName = ${req.body.lastName},
        email = ${req.body.email},
        phone = ${req.body.phone}
    WHERE customerId = ${req.body.id}
  `)

  // Reading the newly updated customers table
  const customers = await db.query(escape`
    SELECT *
    FROM customers
  `)

  res.status(200).json(customers)
}
