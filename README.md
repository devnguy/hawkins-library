# hawkins-library

Deployed with Now: <a href="https://hawkins-library.now.sh" target="_blank" rel="noopener noreferrer">https://hawkins-library.now.sh</a>

```
npm install
npm run dev
```

## Todo

###### Features

- [ ] Index search bar
- [ ] Index search results page

###### Responsiveness

- [ ] Navbar
- [ ] Footer
- [ ] Book on mobile

###### Other

- [ ] Proper date input when editing manage pages
- [ ] Change selected book icon color to theme.red
- [ ] manageCheckouts: Select customer email to display
- [ ] library: Display "Order is empty" in modal when user has not selected any books

###### Nice to haves

- [ ] Pagination for admin tables
- [ ] Magnifying glass icon on search bars
- library:
  - [ ] Pagination
  - [ ] Sticky checkout button so user doesn't have to scroll to the bottom of page to checkout
  - [ ] Animate selected book icon on change
  - [ ] Alt attribute: "Add/remove {book title} to your order"

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
