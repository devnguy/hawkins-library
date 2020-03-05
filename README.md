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

###### Deployment

- [ ] Setup environmental variables and app secrets

###### Other

- [ ] Proper date input when editing manage pages

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
