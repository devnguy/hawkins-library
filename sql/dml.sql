/** 
  * Authors: Huy Nguyen, Rebekah Koon
  * Description: Data Manipulation Queries for Hawkins Library. 
  *     Variables with a colon character (:) are used by the back-end 
  *     code to pass data to the SQL server.
  */

--
-- customers
--
-- Get all customer information to display on the customers (admin) page.
SELECT *
FROM customers

-- Select a customer's email. This will be used to determine if there is
--      a customer present in the database with the associated email.
SELECT email
FROM customers
WHERE email = :emailInput

-- Add customer (admin)
INSERT INTO customers (firstName, lastName, email, phone) 
VALUES  (:firstNameInput, :lastNameInput, :emailInput, phoneInput)

-- Delete customer (admin)
DELETE FROM `customers` 
WHERE customerId = :customerIdFromTableRow

-- Update customers (admin)
UPDATE customers
SET firstName = :firstNameInput,
    lastName = :lastNameInput,
    email = :emailInput,
    phone = :phoneInput
WHERE customerId = :customerIdFromTableRow

--
-- events
--
-- Get all event information to display on the events page.
SELECT *, DATE_FORMAT(date, '%m/%d/%Y') AS date
FROM events

-- Select all event information except imgUrl
SELECT eventId, name, date, guest, description,
DATE_FORMAT(date, '%Y-%m-%d') AS date
FROM events

-- Get all events with name, guest, or description that match search term
SELECT * FROM events 
WHERE name LIKE :searchTermInput
OR guest LIKE :searchTermInput
OR description LIKE :searchTermInput

-- Add event (admin).
INSERT INTO events (name, date, guest, description, imgUrl)
VALUES (:nameInput, :dateInput, :guestInput, 
        :descriptionInput, :imgUrlInput)

-- Delete event (admin).
DELETE FROM `events` 
WHERE eventId = :eventIdFromTableRow

-- Update event (admin).
UPDATE events
SET name = :nameInput,
    date = :dateInput,
    guest = :guestInput,
    description = :descriptionInput
WHERE eventId = :eventIdFromTableRow

--
-- eventRegistrations
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
         (SELECT eventId FROM events WHERE eventId = :eventIdSelectedFromEventsPage))

--
-- books
--
-- Get book information to display on library page. By default, select 
--      books that have not been checked out.
SELECT * 
FROM `books`
WHERE oid IS NULL;

-- Get all book information except imgUrl (admin).
SELECT bookId, oid, title, author, publisher, genre
FROM books

-- Get books with title, author, or genre that match search term
SELECT * FROM books 
WHERE title LIKE :searchTermInput
OR author LIKE :searchTermInput
OR genre LIKE :searchTermInput

-- Counts the number of books checked out by a customer.
--      Customers can check out at most 5 books.
SELECT COUNT(title)
FROM books
INNER JOIN checkoutOrders ON books.oid = checkoutOrders.orderId
INNER JOIN customers ON checkoutOrders.cid = customers.customerId
WHERE cid = (SELECT customerId FROM customers WHERE email = :emailInput)

-- Finding the books that a user with the associated email has checked out.
SELECT bookId, title, author, oid, imgUrl, email
FROM books
INNER JOIN checkoutOrders ON checkoutOrders.orderId = books.oid
INNER JOIN customers ON customers.customerId = checkoutOrders.cid
WHERE email = :emailInput

-- Add a new book to the library.
INSERT INTO `books` (`title`, `author`, `publisher`, `genre`, `imgUrl`) 
VALUES (:titleInput, :authorInput, :publisherInput, :genreInput, :imgUrlInput)

-- Delete a book from the library.
DELETE FROM `books`
WHERE bookId = :bookIdFromTableRow

-- Update a book's order number in the library when it gets returned.
--      A loop is used to update all selected books using IDs from a list.
UPDATE `books`
SET oid = (NULL)
WHERE (bookId = :bookIdFromIdList)

-- Update a book's order number when it is checked out.
--      A loop is used to update all selected books using IDs from a list.
UPDATE books
SET oid = (:orderNumberOfNewOrder)
WHERE (bookId = :bookIdFromIdList}

-- Update a book's title, author, publisher, and genre in the library.
UPDATE `books`
SET title = :titleInput, 
    author = :authorInput, 
    publisher = :publisherInput, 
    genre = :genreInput
WHERE (bookId = :bookIdFromTableRow)

--
-- checkoutOrders
--
-- Displaying books and customers associated with checkout orders (admin).
SELECT oid, 
CONCAT(firstName, ' ', lastName) AS fullName, email, title, 
DATE_FORMAT(checkoutDate, '%m/%d/%Y') AS checkoutDate
FROM books
INNER JOIN checkoutOrders ON books.oid = checkoutOrders.orderId
INNER JOIN customers ON checkoutOrders.cid = customers.customerId
ORDER BY oid, email

-- Query to add a new checkout order.
INSERT INTO checkoutOrders (cid) 
VALUES ((SELECT customerId FROM customers WHERE email = :emailInput))