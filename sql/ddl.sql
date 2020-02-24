/** 
  * Authors: Huy Nguyen, Rebekah Koon
  * Description: Data Definition Queries for Hawkins Library. 
  *     Creates tables that will be used in our library
  *     database as well as queries for inserting data into
  *     the tables.
  */
​
-- Creating the customers table, which will list the
-- information of customers who are library members.
CREATE TABLE `customers` (
    PRIMARY KEY (`customerId`),
    `customerId` int(11) NOT NULL AUTO_INCREMENT,
    `firstName` varchar(255) NOT NULL,
    `lastName` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `phone` varchar(10) NOT NULL,
    `dateJoined` datetime NOT NULL
        DEFAULT CURRENT_TIMESTAMP,
    `lateFee` int(11) NOT NULL
        DEFAULT 0
);
​
-- Creating the events table, which will list upcoming
-- library events.
CREATE TABLE `events` (
    PRIMARY KEY (`eventId`),
    `eventId` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `date` date NOT NULL,
    `guest` varchar(255) NOT NULL,
    `description` varchar(255) NOT NULL,
    `imgUrl` varchar(255) NOT NULL
);
​
-- Creating the eventRegistrations table, which will list
-- the customer IDs of customers who have signed up for
-- library events.
CREATE TABLE `eventRegistrations` (
    PRIMARY KEY (`registrationId`),
    `registrationId` int(11) NOT NULL AUTO_INCREMENT,
    `cid` int(11) NOT NULL,
        FOREIGN KEY(`cid`) REFERENCES `customers` (`customerId`),
    `eid` int(11) NOT NULL,
        FOREIGN KEY(`eid`) REFERENCES `events` (`eventId`),
        CONSTRAINT `uniqueRegistration` 
            UNIQUE (`cid`, `eid`)
);
​
-- Creating the checkoutOrders table, which will list
-- library orders that customers have made.
CREATE TABLE `checkoutOrders` (
    PRIMARY KEY (`orderId`),
    `orderId` INT(11) NOT NULL AUTO_INCREMENT,
    `cid` INT(11),
        FOREIGN KEY (`cid`) REFERENCES `customers` (`customerId`),
    `checkoutDate` DATE NOT NULL,
    `dueDate` DATE NOT NULL
);
​
-- Creating the books table, which will list information of
-- books held at the library.
CREATE TABLE `books` (
    PRIMARY KEY (`bookId`),
    `bookId` INT(11) NOT NULL AUTO_INCREMENT,
    `oid` INT(11),
        FOREIGN KEY (`oid`) REFERENCES `checkoutOrders` (`orderId`),
    `title` VARCHAR(255) NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `publisher` VARCHAR(255) NOT NULL,
    `genre` VARCHAR(255) NOT NULL,
    `imgUrl` VARCHAR(255) NOT NULL
);
​
​
-- Inserting customer data into customers table.
INSERT INTO `customers` (`firstName`, `lastName`, `email`, `phone`,) 
VALUES  ('Sara', 'Smith', 'smithsara@hello.com', '19700102'), 
        ('Miguel', 'Cabrera', 'cm@hello.com', '19880202'), 
        ('Bo', 'Chang', 'bochang@hello.com', '19850302');
​
-- Inserting event data into events table.
INSERT INTO `events` (`name`, `date`, `guest`, `description`, `imgUrl`) 
VALUES  ('Children''s Reading Club', 20200315, 'Ananya Jaiswal', 'At our monthly reading clubs, pairs of volunteers read aloud to small groups of children, while their parents receive training on how to encourage their children to read at home.', '/features/feature01.jpeg'), 
        ('Book Talk & Signing with George R.R. Martin', 20200317, 'George R.R. Martin', 'George R.R. Martin is an American novelist and short story writer. He wrote the series of epic fantasy novels, A Song of Ice and Fire, which was adapted into the HBO series Game of Thrones', '/features/feature02.jpeg'), 
        ('Lecture and Book Signing with J.K. Rowling', 20200320, 'J.K. Rowling', 'J.K. Rowling is a British author and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history.', '/features/feature03.jpeg'), 
        ('Tuesday and Thursday Night Tutoring at Hawkins', 20200320, 'H.P. Lovecraft', 'Led by the most talented and experienced educators in the key academic disciplines. All educators are highly qualified classroom teachers who share our philosophy of learning.', '/features/feature04.jpeg');
​
-- Inserting event registrations data into eventRegistrations table, which
-- will show library customers who have signed up for each event.
INSERT INTO `eventRegistrations` (`cid`, `eid`) 
VALUES 
        ((SELECT customerId FROM customers WHERE firstName = 'Sara' AND lastName = 'Smith'), 
        (SELECT eventId FROM events WHERE eventId = 11)),
        ((SELECT customerId FROM customers WHERE firstName = 'Sara' AND lastName = 'Smith'), 
        (SELECT eventId FROM events WHERE eventId = 12)),
        ((SELECT customerId FROM customers WHERE firstName = 'Miguel' AND lastName = 'Cabrera'), 
        (SELECT eventId FROM events WHERE eventId = 11)),
        ((SELECT customerId FROM customers WHERE firstName = 'Miguel' AND lastName = 'Cabrera'), 
        (SELECT eventId FROM events WHERE eventId = 13)),
        ((SELECT customerId FROM customers WHERE firstName = 'Bo' AND lastName = 'Chang'), 
        (SELECT eventId FROM events WHERE eventId = 12)),
        ((SELECT customerId FROM customers WHERE firstName = 'Bo' AND lastName = 'Chang'), 
        (SELECT eventId FROM events WHERE eventId = 11));
​
-- Inserting checkout orders that customers have made into checkoutOrders table.
INSERT INTO `checkoutOrders` (`cid`, `checkoutDate`, `dueDate`) 
VALUES 
        ((SELECT `customerId` FROM `customers` WHERE firstName = "Sara" and lastName = "Smith"), 
        "2020-02-15", "2020-03-15"),
        ((SELECT `customerId` FROM `customers` WHERE firstName = "Bo" and lastName = "Chang"), 
        "2020-02-17", "2020-03-17");
​
-- Inserting books into the Books table.
INSERT INTO `books` (`title`, `author`, `publisher`, `genre`, `oid`) 
VALUES
        ("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "Bloomsbury Publishing", "Fantasy", 
            (SELECT `orderId` FROM `checkoutOrders` WHERE cid = 1)),
        ("The Fault in Our Stars", "John Green", "Dutton Books", "Young Adult", 
            (SELECT `orderId` FROM `checkoutOrders` WHERE cid = 1)),
        ("Pride and Prejudice", "Jane Austen", "T. Egerton", "Classic", 
            NULL),
        ("The Hunger Games", "Suzanne Collins", "Scholastic", "Dystopian", 
            (SELECT `orderId` FROM `checkoutOrders` WHERE cid = 2));