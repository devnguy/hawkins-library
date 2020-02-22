# hawkins-library

Deployed with Now: <a href="https://hawkins-library.now.sh" target="_blank" rel="noopener noreferrer">https://hawkins-library.now.sh</a>

```
npm install
npm run dev
```

## Migration to MongoDB
- [x] Set up MongoDB (db credentials in next.config.js)
- [x] Connect to app (middleware/database.js)
- Files to remove:
 - [ ] server.js
 - [ ] dbcon.js
 - [ ] config.js
 - [ ] nodemon.json
-Node modules to uninstall:
 - [ ] body-parser
 - [ ] cross-env
 - [ ] express
 - [ ] mysql
 - [ ] utils?

- [x] create books collection
- [ ] manage-books.js
 - [x] Create: User can add books via input forms
 - [x] Read: Render db books to page
 - [ ] Update
 - [ ] Delete

- [x] create customers collection
- [ ] manage-customers.js
 - [ ] Create
 - [ ] Read
 - [ ] Update
 - [ ] Delete

- [ ] create events collection
- [ ] manage-events.js
 - [ ] Create
 - [ ] Read
 - [ ] Update
 - [ ] Delete

- [ ] create checkouts collection
- [ ] manage-checkouts.js
 - [ ] Create
 - [ ] Read

- [ ] create registrations collection
- [ ] manage-registrations.js
 - [ ] Create
 - [ ] Read

## Deployment
- [ ] Setup environmental variables and app secrets