# hawkins-library

Deployed with Now: <a href="https://hawkins-library.now.sh" target="_blank" rel="noopener noreferrer">https://hawkins-library.now.sh</a>

```
npm install
npm run dev
```

## Migration to MongoDB
- [x] Set up MongoDB (db credentials in next.config.js)
- [x] Connect to app (middleware/database.js)
###### Files to remove:
 - [ ] server.js
 - [ ] dbcon.js
 - [ ] config.js
 - [ ] nodemon.json
###### Node modules to uninstall:
 - [ ] body-parser
 - [ ] cross-env
 - [ ] express
 - [ ] mysql
 - [ ] utils?

###### manage-books.js
 - [x] create books collection
 - [x] Create: User can add books via input forms
 - [x] Read: Render db books to page
 - [ ] Update
 - [ ] Delete

###### manage-customers.js
 - [x] create customers collection
 - [ ] Create
 - [ ] Read
 - [ ] Update
 - [ ] Delete

###### manage-events.js
 - [ ] create events collection
 - [ ] Create
 - [ ] Read
 - [ ] Update
 - [ ] Delete

###### manage-checkouts.js
 - [ ] create checkouts collection
 - [ ] Create
 - [ ] Read

###### manage-registrations.js
 - [ ] create registrations collection
 - [ ] Create
 - [ ] Read

###### Deployment
- [ ] Setup environmental variables and app secrets