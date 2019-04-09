/* =============================================  Requirements  ==============================================
================================================================================================================= */
// const path = require('path');//production related
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3003; //back end port assigned to 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//TODO: hook up react part; currently only express and postgress are connected && add set up notes to MD


/* =============================================  Pool  =================================================
================================================================================================================= */
// pool manages postgreSQL clients;
const { Pool } = require('pg')
const pool = new Pool({
    user: 'codetl',
    host: 'localhost',
    database: 'test_data', //database_name
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
app.get('/test', async (req, res) =>{
    const client = await pool.connect();
    const contactsTable = await client.query('SELECT * FROM test_tale');
    res.json(contactsTable.rows);
    client.release();
    console.log('GET QUERY IS WORKING ON BACKEND') ///testing for true connection
})

//monday 4/8/19 - 5, 6, 7 id's
//**********SUCCESSFUL********
//return single arr item
// app.get('/test/:id', async (req, res) =>{
//   const client = await pool.connect();
//   const eventsTable = await client.query('SELECT * FROM test_tale WHERE id = $1', [req.params.id]); 
//   res.json(eventsTable.rows[0]); 
//   client.release();
//   console.log('GET BY ID QUERY IS WORKING ON BACKEND') ///testing for true connection
// })

// //update an array item //TODO: posting all at oncee, only works with 5 given params
// app.put('/test/:id', async (req, res) =>{ 
//   const client = await pool.connect();
//   const eventsTable = await client.query("UPDATE test_tale SET name=$1, city=$2, date=$3, topic=$4 WHERE id=$5 RETURNING *", [req.body.name,req.body.city,req.body.date,req.body.topic, req.params.id]);
//   client.release();
//   res.json(eventsTable.rows[0]) 
//   console.log('PUT QUERY IS WORKING ON BACKEND') ///testing for true connection
// })

// //add a new item //TODO: posting all at once, only works with 5 given params
// app.post('/test', async(req, res) => {
//   const client = await pool.connect();
//   const eventsTable = await client.query("INSERT INTO test_tale (id, name, city, date, topic) VALUES ($1, $2, $3, $4, $5) RETURNING *", [req.body.id, req.body.name, req.body.city, req.body.date, req.body.topic]);
//   res.json(eventsTable.rows[0]);
//   client.release();
//   console.log('POST QUERY IS WORKING ON BACKEND') ///testing for true connection
// })

// //delete an item //TODO: posting all at once
// app.delete('/test/:id', async(req, res) =>{
//   const client = await pool.connect();
//   const eventsTable = await client.query('DELETE FROM test_tale WHERE id=$1 RETURNING * ', [req.params.id]);
//   res.json(eventsTable.rows[0]);
//   client.release();
//   console.log('DELETE QUERY IS WORKING ON BACKEND') ///testing for true connection
// });




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

  app.listen(port, () => console.log(`Back-End Express Server "Final_Assessment" is Listening on Port ${port}!`))