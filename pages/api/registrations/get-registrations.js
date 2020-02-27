const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const registrations = await db.query(escape`
    SELECT eid, cid, 
    name AS eventName, CONCAT(firstName, ' ', lastName) AS fullName 
    FROM customers
    INNER JOIN eventRegistrations ON customers.customerId = eventRegistrations.cid
    INNER JOIN events ON events.eventId = eventRegistrations.eid
    ORDER BY eid, fullName
  `)
  if (registrations.error) {
    res.status(500).json(registrations.error)
  }
  res.status(200).json(registrations)
}
