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
