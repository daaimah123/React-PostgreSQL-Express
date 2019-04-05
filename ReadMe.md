Design a React App that uses Express and PostgreSQL

React Set Up
===========

NODE
`nvm install node`
`nvm use node`


REACT (subfolder - client)
`npx create-react-app my-app`
`cd my-app`
`npm start`




Express Set Up
============

Express Generator (server)similar to create react app
`npm install express-generator --save`


PostgreSQL (database)
`npm install pg --save`


Package.json 
`Npm init`

<code>
Pool Manages PostgreSQL Clients
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
const pool = new Pool({



   // 'postgres://localhost:5432/database_name'
   connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/eventonicaroutes',
   
   
   
   // Use SSL but only in production
   ssl: process.env.NODE_ENV === 'production'
 });
<code>


Check the package.json to make sure start location path matches the server location


<code>
"scripts": {
     "start": "node folder/file.ext",
<code>



In this app you will be able to: 
-add DB tables to Postgres;
-add routes to Express that interact with the DB;
-add components to React that calls the Express APIs
