# hawkins-library

Deployed with Now: <a href="https://hawkins-library.now.sh" target="_blank" rel="noopener noreferrer">https://hawkins-library.now.sh</a>

```
npm install
npm run dev
```

## Todo

###### Features

- [x] Index search bar
- [x] Index search results page

###### Responsiveness

- [x] Navbar
- [x] Footer
- [ ] Book on mobile

###### Other

- [x] Proper date input when editing manage pages
- [x] Change selected book icon color to theme.red
- [x] Also for selected books on library/return pages: Possibly make the red underline stay at the bottom of the book's div when book is checked
- [x] manageCheckouts: Select customer email to display
- [x] library: Display "Order is empty" in modal when user has not selected any books
- [x] return: User cannot return books if none are selected
- [x] On admin pages that allow rows to be deleted: "Are you sure you want to delete?" modal so that rows will not be deleted by accident (I deleted Sara Smith by accident last night, whoops. I decided to just import our ddl into the database again)
- [ ] Noticed this requirement on step 7: "You should allow the user to select things to relate to each other via drop-down menus or some other UI element where the user picks from existing items to add them to a relationship. When picking items you should display the name that makes the most sense to the user." It sounds like we need to have some sort of option to join different tables? I was thinking we could have the option to join customers and books or customers and events.
- [x] Manage customers: Maybe we shouldn't allow join date to be edited
- [ ] Limit to how many books can be checked out (5 books per customer? Or perhaps 5 books per checkout order?)

###### Nice to haves

- [ ] Pagination for admin tables
- [ ] Magnifying glass icon on search bars
- [ ] library:
  - [ ] Pagination
  - [ ] Sticky checkout button so user doesn't have to scroll to the bottom of page to checkout
  - [ ] Animate selected book icon on change
  - [ ] Remove books from order within modal
  - [ ] Alt attribute: "Add/remove {book title} to your order"
- [ ] Search for books by genre/author. Either on manage books page or library page (or both). It may be nice to do something with genre since we don't really use it. Maybe a drop-down menu or something where the user can select a genre and then books of that genre will be displayed.
- [ ] Manage events: Search by date/event?
- [ ] Adding a password attribute to customers. The customer can then choose a password when signing up and also type in their password along with their email when checking out/returning
- [ ] On admin page: Perhaps have an admin account, where this account is the only account that can access this page. One of the websites I reviewed had this and I thought it was a good idea.

###### Deployment

- [ ] Setup environmental variables and app secrets

## Migration to Serverless Functions and Google MySql

- [x] Set up DB (lib/db.js)
- [x] Connect to DB (lib/db.js)

###### Files to remove:

- [x] server.js
- [x] dbcon.js
- [x] config.js
- [x] nodemon.json
- [x] middleware/database.js

###### Node modules to uninstall:

- [x] body-parser
- [x] cross-env
- [x] express
- [x] mongodb
- [x] mysql
- [x] next-connect
- [x] utils?

###### manage-books.js

- [x] create books table
- [x] Create: User can add books via input forms
- [x] Read: Render db books to table
- [x] Update
- [x] Delete

###### manage-customers.js

- [x] create customers table
- [x] Create
- [x] Read
- [x] Update
- [x] Delete

###### manage-events.js

- [x] create events table
- [x] Create: User can add events via input forms
- [x] Read: Render db events to table
- [x] Update
- [x] Delete

###### manage-checkouts.js

- [x] create checkouts table
- [x] Create
- [x] Read

###### manage-registrations.js

- [x] create registrations table
- [x] Create
- [x] Read
