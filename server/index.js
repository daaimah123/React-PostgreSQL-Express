/* =============================================  Requirements  ==============================================
================================================================================================================= */
// const path = require('path');//production related
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001; //back end port assigned to 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



/* =============================================  Pool  =================================================
================================================================================================================= */
// pool manages postgreSQL clients;
const { Pool } = require('pg') 
const pool = new Pool({
    user: 'codetl',
    host: 'localhost',
    database: 'eventonicaroutes', //database_name
    password: 'password',
    port: 5432,
  })

// const pool = new Pool({
//     // 'postgres://localhost:5432/database_name'
//     connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/eventonicaroutes',
//     // Use SSL but only in production
//     ssl: process.env.NODE_ENV === 'production'
//   });



/* =============================================  Routes  =======================================================
================================================================================================================= */

//test route
app.get('/', (request, response) => { 
    response.json({ info: "Test Message Testing" })
    })

//testing ability to connect to db
app.get('/anythingiwant', async (req, res) =>{
    const client = await pool.connect();
    const contactsTable = await client.query('SELECT * FROM events');
    res.json(contactsTable.rows);
    client.release();
    console.log('hello') ///testing for true connection
})




/* =============================================  Deploying Code  =======================================================
================================================================================================================= */


// if (process.env.NODE_ENV === "production") {  //production means live instead of local
//     // Serve any static files
//     app.use(express.static(path.join(__dirname, "../client/build"))); //build dir will be populated
//     // Handle React routing, return all requests to React app
//     app.get("*", function(req, res) {
//       res.sendFile(path.join(__dirname, "../client/build", "index.html"));
//     });
//   }
  
  /* =============================================  Listening Message  =======================================================
================================================================================================================= */

  app.listen(port, () => console.log(`Back-End Express Server "Eventonica-Routes" is Listening on Port ${port}!`))