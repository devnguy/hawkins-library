/* Query to delete a customer from the customers table.
 *
 * Queries use sql-template-strings library, which handles
 * implementation of parameterized queries.
 *
 * See https://www.npmjs.com/package/sql-template-strings.*/

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  // Deleting a customer based on email
  await db.query(escape`
    DELETE FROM customers
    WHERE customerId = ${req.body.id}
  `)

  // Reading the newly updated customers table
  const customers = await db.query(escape`
    SELECT *
    FROM customers
  `)

  res.status(200).json(customers)
}
