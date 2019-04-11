Design a React App that uses Express and PostgreSQL
===========
Backend (3003) and Front-End (3000) will run on separate ports!


React Set Up (in client dir - run npm start to run)
=========
Begin react app
````npx create-react-app my-app````
````cd my-app````
````npm start````

Create component files and make sure they are imported (to files that are using them) and exported (in their own component) file appropiately.

Example of importing to App.js from components

````
import React, { Component } from 'react';
import './App.css';
import GetAll from './components/GetAll.js/index.js';
import GetById from './components/GetById.js';
````

Example of exporting from components to App.js


````
//end of page after component class declaration
export default GetById;
//or
export default GetAll;
````


For extra built in style, you can use react-bootstrap npm: `npm install react-
bootstrap bootstrap --save`

React Package.json
````
//Front-End Port
 "scripts": {
    "start": "PORT=3000 react-scripts start",
````

````
//Backend Port
"proxy": "http://localhost:3003"
````


Express Set Up (in server dir - run node index.js to run)
============

NODE
`nvm install node`
`nvm use node` 

Express Generator (server)similar to create react app: `npm install express-generator --save`


PostgreSQL (database): `npm install pg --save`


Package.json: `Npm init`



````
//index.js file
const express = require('express')
const bodyParser = require('body-parser') //dont need to install, just require
const app = express()
const port = 3000 . //pick a port!
const db = require('./name_of_file_with_queries') //optional, if you choose to separate your routes in different file

//index.js file
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }));

````

Pool Manages PostgreSQL Clients 
````    
//index.js file
const { Pool } = require('pg')

//local psql connection

const pool = new Pool({
    user: 'codetl',
    host: 'localhost',
    database: 'database_name',
    password: 'password',
    port: 5432,
  })

//production psql connection
//const pool = new Pool({
   // 'postgres://localhost:5432/database_name'
   //connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/eventonicaroutes',
   // Use SSL but only in production
   //ssl: process.env.NODE_ENV === 'production'
// });
````

Build up routes that both are able to test connection and build a client inside of the pool 
````
//index.js file or separate queries file
//test route
app.get('/', (request, response) => { 
    response.json({ info: "Test Message Testing" })
    })

//testing ability to connect to db using async/await querying
app.get('/events', async (req, res) =>{
    const client = await pool.connect(); //make request with client inside the pool
    const contactsTable = await client.query('SELECT * FROM events'); //query that runs to pull pg data
    res.json(contactsTable.rows); //the queried data as response in json form
    console.log('hello') //testing for true connection
    client.release(); //release client back to pool
})
````

Check the package.json to make sure start location path matches the server location

````
"scripts": {
     "start": "node folder/file.ext",
````

This message will print when you run node
````
>>> node index.js

//listening message
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
````


In this app you will be able to: 
-add DB tables to Postgres;
-add routes to Express that interact with the DB;
-add components to React that calls the Express APIs

Final Product
![Screen Shot 2019-04-11 at 4 29 48 PM](https://user-images.githubusercontent.com/41805952/56002786-8fce3e80-5c78-11e9-8121-35666a22a1ff.png)

