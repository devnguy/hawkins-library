-- Authors: Huy Nguyen, Rebekah Koon
-- Description: Data Definition Queries for Hawkins Library. 
--    Creates tables that will be used in our library
--   database as well as queries for inserting data into
--   the tables.

-- Creating the customers table, which will list the information of customers who are library members.
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
    PRIMARY KEY (`customerId`),
    `customerId` int(11) NOT NULL AUTO_INCREMENT,
    `firstName` varchar(255) NOT NULL,
    `lastName` varchar(255) NOT NULL,
    `email` varchar(255) UNIQUE NOT NULL,
    `phone` varchar(10) NOT NULL,
    `dateJoined` datetime NOT NULL
        DEFAULT CURRENT_TIMESTAMP
);

-- Creating the events table, which will list upcoming library events.
DROP TABLE IF EXISTS `events`;
CREATE TABLE `events` (
    PRIMARY KEY (`eventId`),
    `eventId` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `date` date NOT NULL,
    `guest` varchar(255),
    `description` varchar(255),
    `imgUrl` varchar(255)
);

-- Creating the eventRegistrations table, which will list
-- the customer IDs of customers who have signed up for library events.
DROP TABLE IF EXISTS `eventRegistrations`;
CREATE TABLE `eventRegistrations` (
    PRIMARY KEY (`registrationId`),
    `registrationId` int(11) NOT NULL AUTO_INCREMENT,
    `cid` int(11) NOT NULL,
        FOREIGN KEY(`cid`) REFERENCES `customers` (`customerId`)
        ON DELETE CASCADE,
    `eid` int(11) NOT NULL,
        FOREIGN KEY(`eid`) REFERENCES `events` (`eventId`)
        ON DELETE CASCADE,
        CONSTRAINT `uniqueRegistration` 
        UNIQUE (`cid`, `eid`)
);

-- Creating the checkoutOrders table, which will list
-- library orders that customers have made.
DROP TABLE IF EXISTS `checkoutOrders`;
CREATE TABLE `checkoutOrders` (
    PRIMARY KEY (`orderId`),
    `orderId` INT(11) NOT NULL AUTO_INCREMENT,
    `cid` INT(11),
        FOREIGN KEY (`cid`) REFERENCES `customers` (`customerId`)
        ON DELETE CASCADE,
    `checkoutDate` DATE NOT NULL
        DEFAULT CURRENT_TIMESTAMP,
    `dueDate` DATE NOT NULL
        DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER test_trigger BEFORE INSERT ON `checkoutOrders` 
FOR EACH ROW SET
    NEW.checkoutDate = IFNULL(NEW.checkoutDate, NOW()),
    NEW.dueDate = TIMESTAMPADD(DAY, 30, NEW.checkoutDate);

-- Creating the books table, which will list information of
-- books held at the library.
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
    PRIMARY KEY (`bookId`),
    `bookId` INT(11) NOT NULL AUTO_INCREMENT,
    `oid` INT(11),
        FOREIGN KEY (`oid`) REFERENCES `checkoutOrders` (`orderId`)
        ON DELETE SET NULL,
    `title` VARCHAR(255) NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `publisher` VARCHAR(255) NOT NULL,
    `genre` VARCHAR(255) NOT NULL,
    `imgUrl` VARCHAR(255)
);

-- Inserting customer data into customers table.
INSERT INTO `customers` (`firstName`, `lastName`, `email`, `phone`) 
VALUES ('Sara', 'Smith', 'smithsara@hello.com', '19700102'), 
       ('Miguel', 'Cabrera', 'cm@hello.com', '19880202'), 
       ('Bo', 'Chang', 'bochang@hello.com', '19850302');
        
-- Inserting event data into events table.
INSERT INTO `events` (`name`, `date`, `guest`, `description`, `imgUrl`) 
VALUES  ('Children''s Reading Club', 20200315, 'Ananya Jaiswal', 'At our monthly reading clubs, pairs of volunteers read aloud to small groups of children, while their parents receive training on how to encourage their children to read at home.', '/features/feature01.jpeg'), 
        ('Book Talk & Signing with George R.R. Martin', 20200317, 'George R.R. Martin', 'George R.R. Martin is an American novelist and short story writer. He wrote the series of epic fantasy novels, A Song of Ice and Fire, which was adapted into the HBO series Game of Thrones', '/features/feature02.jpeg'), 
        ('Lecture and Book Signing with J.K. Rowling', 20200320, 'J.K. Rowling', 'J.K. Rowling is a British author and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history.', '/features/feature03.jpeg'), 
        ('Tuesday and Thursday Night Tutoring at Hawkins', 20200320, 'H.P. Lovecraft', 'Led by the most talented and experienced educators in the key academic disciplines. All educators are highly qualified classroom teachers who share our philosophy of learning.', '/features/feature04.jpeg');
    
-- Inserting event registrations data into eventRegistrations table, which
-- will show library customers who have signed up for each event.
INSERT INTO `eventRegistrations` (`cid`, `eid`) 
VALUES 
        ((SELECT customerId FROM customers WHERE email = 'smithsara@hello.com'), 
        (SELECT eventId FROM events WHERE eventId = 1)),
        ((SELECT customerId FROM customers WHERE email = 'smithsara@hello.com'), 
        (SELECT eventId FROM events WHERE eventId = 2)),
        ((SELECT customerId FROM customers WHERE email = 'cm@hello.com'), 
        (SELECT eventId FROM events WHERE eventId = 1)),
        ((SELECT customerId FROM customers WHERE email = 'cm@hello.com'), 
        (SELECT eventId FROM events WHERE eventId = 3)),
        ((SELECT customerId FROM customers WHERE email = 'bochang@hello.com'), 
        (SELECT eventId FROM events WHERE eventId = 2)),
        ((SELECT customerId FROM customers WHERE email = 'bochang@hello.com'), 
        (SELECT eventId FROM events WHERE eventId = 1));
        
-- Inserting checkout orders that customers have made into checkoutOrders table.
INSERT INTO `checkoutOrders` (`cid`) 
VALUES 
        ((SELECT `customerId` FROM `customers` WHERE email = "smithsara@hello.com")),
        ((SELECT `customerId` FROM `customers` WHERE email = "bochang@hello.com"));
        ((SELECT `customerId` FROM `customers` WHERE email = "bochang@hello.com"));


<<<<<<< HEAD
=======
INSERT INTO `checkoutOrders` (`cid`, `checkoutDate`) 
VALUES 
        ((SELECT `customerId` FROM `customers` WHERE email = "bochang@hello.com"), '2020-02-20');
>>>>>>> 60c9c2b842f15f4d440879f8bc7abcdc54640728
        
-- Inserting books into the Books table.
INSERT INTO `books` (`title`, `author`, `publisher`, `genre`, `oid`, `imgUrl`) 
VALUES
        ("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "Bloomsbury Publishing", "Fantasy", 1, 'https://res.cloudinary.com/hawkins/image/upload/v1567801421/hawkins/books/efazzzqzpzdotkvzpcvy.jpg'),
        ("The Fault in Our Stars", "John Green", "Dutton Books", "Young Adult", 2, 'https://res.cloudinary.com/hawkins/image/upload/v1582573189/hawkins/books/81yAo5ElQlL_jiz8xh.jpg'),
        ("Pride and Prejudice", "Jane Austen", "T. Egerton", "Classic", 2, 'https://res.cloudinary.com/hawkins/image/upload/v1582573290/hawkins/books/9781847493699_zsq8kc.jpg'),
        ("The Hunger Games", "Suzanne Collins", "Scholastic", "Dystopian", 3, 'https://res.cloudinary.com/hawkins/image/upload/v1582573519/hawkins/books/41V56ye3PrL._SX328_BO1_204_203_200__ckqt45.jpg'),
        ("The Hobbit", "JRR Tolkein", "George Allen & Unwin", "Fantasy", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1567801705/hawkins/books/ofugewrumzxbilgw76m5.jpg'),
        ("The Very Hungry Caterpillar", "Eric Carle", "World Publishing Company", "Children's Literature", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1567906037/hawkins/books/a8c2d31b7afcuymocdg9.jpg'),
        ("The Little Prince", "Antoine de Saint-Exupéry", "Reynal & Hitchcock", "Children's Literature", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1567801168/hawkins/books/uv09q7h64qc4ewcgitcf.jpg'),
        ("Alice In Wonderland", "C.S. Lewis", "Macmillan Publishers", "Fantasy", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1567801301/hawkins/books/qytuj6ff1wde3lqwcdha.jpg'),
        ("Don Quixote", "Miguel De Cervantes", "Francisco de Robles", "Novel", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1567801328/hawkins/books/mcob3sp015a9y8afgyba.jpg'),
        ("Lord of the Rings", "JRR Tolkein", "Allen & Unwin", "Fantasy", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1567808054/hawkins/books/g8zjobqel3mazmvviz1c.jpg'),
        ("A Tale of Two Cities", "Charles Dickens", "Chapman & Hall", "Historical Fiction", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1567801110/hawkins/books/mzmcocyaur8p7ltrulo2.jpg'),
        ("The Great Gatsby", "F. Scott Fitzgerald", "Charlels Scribner's Sons", "Historical Fiction", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1582940407/hawkins/books/greatgatsby_wqw32r.jpg'),
        ("The Girl with the Dragon Tattoo", "Stieg Larsson", "Norstedts forlag", "Thriller", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1582940408/hawkins/books/dragontattoo_z5cocj.jpg'),
        ("The Catcher in the Rye", "J.D. Salinger", "LB & Company", "Fiction", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1582940408/hawkins/books/catcherrye_silfbg.jpg'),
        ("The Girl on the Train", "Paula Hawkins", "Penguin", "Thriller", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1582940408/hawkins/books/girltrain_omtzg9.jpg'),
        ("The Kite Runner", "Khaled Hosseini", "Riverhead Books", "Historical Fiction", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1582940408/hawkins/books/kiterunner_bu1jbg.jpg'),
        ("Lord of the Flies", "William Golding", "Faber and Faber", "Novel", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1582940408/hawkins/books/lordflies_cyrswv.jpg'),
        ("Brave New World", "Aldous Huxley", "Penguin", "Science Fiction", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1582939580/hawkins/books/bravenewworld_xyg29p.jpg'),
        ("The Perks of Being a Wallflower", "Stephen Chbosky", "Pocket Books", "Novel", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1582940408/hawkins/books/perkswallflower_xyhupn.jpg'),
        ("1000 Years of Solitude", "Gabriel Garcia Marquez", "Pocket Books", "Novel", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1582940408/hawkins/books/yearssolitude_lwcfr1.jpg'),
        ("The Alchemist", "Paulo Coelho", "HarperCollins", "Novel", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1582939580/hawkins/books/alchemist_k2ucf8.jpg'),
        ("The Handmaid's Tale", "Margaret Atwood", "McClelland & Stewart", "Dystopian", 
            NULL, 'https://res.cloudinary.com/hawkins/image/upload/v1582940407/hawkins/books/handmaid_by2hrc.jpg');