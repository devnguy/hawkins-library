/* Joins the books, checkoutOrders, and customers tables in order to
 * display the books contained within each order as well as the
 * customers who checked out each book.
 *
 * Queries use sql-template-strings library, which handles
 * implementation of parameterized queries.
 *
 * See https://www.npmjs.com/package/sql-template-strings.*/

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const checkouts = await db.query(escape`
    SELECT oid, 
    CONCAT(firstName, ' ', lastName) AS fullName, email, title, 
    DATE_FORMAT(checkoutDate, '%m/%d/%Y') AS checkoutDate
    FROM books
    INNER JOIN checkoutOrders ON books.oid = checkoutOrders.orderId
    INNER JOIN customers ON checkoutOrders.cid = customers.customerId
    ORDER BY oid, email
  `)
  if (checkouts.error) {
    res.status(500).json(checkouts.error)
  }
  res.status(200).json(checkouts)
}
