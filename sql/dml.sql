/** 
  * Authors: Huy Nguyen, Rebekah Koon
  * Description: Data Manipulation Queries for Hawkins Library. 
  *     Variables with a colon character (:) are used by the back-end 
  *     code to pass data to the SQL server.
  */

--
-- CUSTOMERS
--
-- Get all customer information to display on the customers (admin) page.
SELECT *
FROM customers

-- Add customer (admin)
INSERT INTO customers (firstName, lastName, email, phone) 
VALUES  (:firstNameInput, :lastNameInput, :emailInput, phoneInput)

-- Delete customer (admin)
DELETE FROM customers
WHERE customerId = :customerIdSelectedFromCustomersPage

-- Update customers (admin)
UPDATE customers
SET firstName = :firstNameInput,
    lastName = :lastNameInput,
    email = :emailInput,
    phone = :phoneInput,
WHERE customerId = :customerIdSelectedFromCustomersPage

--
-- EVENTS
--
-- Get all event information to display on the events page.
SELECT *
FROM events

-- Add event (admin).
INSERT INTO events (name, date, guest) 
VALUES  (:nameInput, :dateInput, :guestInput)

-- Delete event (admin).
DELETE FROM events
WHERE eventId = :eventIdSelectedFromEventsPage

-- Update event (admin).
UPDATE events
SET name = :nameInput,
    date = :dateInput,
    guest = :guestInput,
WHERE eventId = :eventIdSelectedFromEventsPage

--
-- EVENT_REGISTRATIONS
--
-- Get all event information to display on the eventRegistrations 
--      (admin) page.
SELECT eid, cid, 
name AS eventName, CONCAT(firstName, ' ', lastName) AS fullName 
FROM customers
INNER JOIN eventRegistrations ON customers.customerId = eventRegistrations.cid
INNER JOIN events ON events.eventId = eventRegistrations.eid
ORDER BY eid, fullName

-- Add eventRegistration (Executed when customer registers for an event).
INSERT INTO eventRegistrations (cid, eid) 
VALUES  ((SELECT customerId FROM customers WHERE email = :emailInput), 
          :eventIdSelectedFromEventsPage)

--
-- BOOKS
--
-- Get book information to display on library page. By default, select 
--      books that have not been checked out.
SELECT * 
FROM books 
WHERE oid = NULL;

-- Get all book information to display on library page.
SELECT * 
FROM books;

-- Add a new book to the library.
INSERT INTO `books` (`title`, `author`, `publisher`, `genre`) 
VALUES (:titleInput, :authorInput, :publisherInput, :genreInput)

-- Delete a book from the library.
DELETE FROM `books`
WHERE bookId = :findIdFromTitleInput

-- Update a book's order number in the library when it gets checked 
--      out/returned
UPDATE `books`
SET oid = 
    (SELECT `orderId` FROM `checkoutOrders` WHERE cid = :customerIdFromOrder)
WHERE (bookId = :bookIdFromTitleInput)

-- Update a book's title, author, publisher, and genre in the library.
UPDATE `books`
SET title = :titleInput, 
    author = :authorInput, 
    publisher = :publisherInput, 
    genre = :genreInput
WHERE (bookId = :bookIdFromTitleInput)

--
-- CHECKOUT_ORDERS
--
-- Get checkoutOrders information to display on checkoutOrders (admin) 
--      page.
SELECT cid, checkoutDate, dueDate FROM checkoutOrders;

-- Query to add a new checkout order.
INSERT INTO `checkoutOrders` (`cid`, `checkoutDate`, `dueDate`) VALUES 
    ((SELECT `customerId` FROM `customers` WHERE email = :emailInput), 
        :checkoutDateAsCurrentDate, :dueDateOneMonth);