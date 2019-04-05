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

Create component files and make sure they are imported (to files that are using them) and exported (in their own component) file appropiately.

````
import React, { Component } from 'react';
import '../App.css';



class Read extends Component {
    constructor(props) { //set up telling component what we need to start
      super(props);
      this.state = { //beginning state
        error: null, 
        isLoaded: false, 
        items: [] //info is stored here
      };
    }
  
    componentDidMount() { //system in react, auto generates the function inside to go first; will not work when you need to manipulate info or provide info; auto-gets
      fetch("https://swapi.co/api/people/") //test with external api
        .then(res => res.json()) //turn response into json
        .then( 
          (result) => { //use results in setState
            this.setState({
              isLoaded: true, //the result state is changed to true
              items: result.items //the result state is changed to the info thats been fetched and turned into json
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error // the error that's received 
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state; //allows this.state to be assumed
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul id="results">
            {items/* {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))} */}
          </ul>
        );
      }
    }
  }

export default Read;
````

Express Set Up
============

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

//testing ability to connect to db
app.get('/anythingiwant', async (req, res) =>{
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
