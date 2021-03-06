/**
 * Query that implements INSERTing into the eventRegistrations table.
 * Requires request body to contain customer's email and eventId.
 *
 * Queries use sql-template-strings library, which handles
 * implementation of parameterized queries.
 *
 * See https://www.npmjs.com/package/sql-template-strings.
 */

const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const addRegistration = await db.query(escape`
    INSERT INTO eventRegistrations (cid, eid)
    VALUES 
            ((SELECT customerId FROM customers WHERE email = ${req.body.email}), 
            (SELECT eventId FROM events WHERE eventId = ${req.body.eventId}))
  `)
  // Handles errors that may be encountered
  if (addRegistration.error) {
    if (addRegistration.error.sqlMessage.includes('Duplicate entry')) {
      res.json({
        message: 'You are already registered for this event.',
        statusNo: 1
      })
    } else if (addRegistration.error.sqlMessage.includes("'eid' cannot be null")) {
      res.json({ message: 'Event not found.', statusNo: 2 })
    } else if (addRegistration.error.sqlMessage.includes("'cid' cannot be null")) {
      res.json({ message: 'Email not found.', statusNo: 3 })
    } else {
      res.json(addRegistration.error)
    }
  } else {
    // Restration is successful
    res.status(200).json({ message: 'Registered Successfully!', statusNo: 0 })
  }
}
