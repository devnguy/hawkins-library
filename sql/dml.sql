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
DELETE FROM `customers` 
WHERE customerId = :customerIdInput

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

-- Select all event information except imgUrl
SELECT eventId, name, date, guest, description,
DATE_FORMAT(date, '%Y %m %d') AS date
FROM events

-- Add event (admin).
INSERT INTO events (name, date, guest) 
VALUES  (:nameInput, :dateInput, :guestInput)

-- Delete event (admin).
DELETE FROM `events` 
WHERE eventId = :eventIdInput

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
WHERE oid IS NULL;

-- Get all book information to display on library page.
SELECT * 
FROM books;

-- Get all book information except imgUrl
SELECT bookId, oid, title, author, publisher, genre
FROM books

-- Add a new book to the library.
INSERT INTO `books` (`title`, `author`, `publisher`, `genre`) 
VALUES (:titleInput, :authorInput, :publisherInput, :genreInput)

-- Delete a book from the library.
DELETE FROM `books`
WHERE bookId = :bookIdInput

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

-- Select books checked out by customers.
SELECT oid, 
CONCAT(firstName, ' ', lastName) AS fullName, email, title, 
DATE_FORMAT(checkoutDate, '%m/%d/%Y') AS checkoutDate
FROM books
INNER JOIN checkoutOrders ON books.oid = checkoutOrders.orderId
INNER JOIN customers ON checkoutOrders.cid = customers.customerId
ORDER BY oid, email

-- Query to add a new checkout order.
INSERT INTO `checkoutOrders` (`cid`, `checkoutDate`, `dueDate`) VALUES 
    ((SELECT `customerId` FROM `customers` WHERE email = :emailInput), 
        :checkoutDateAsCurrentDate, :dueDateOneMonth);