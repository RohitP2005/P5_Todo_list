const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000
const { Pool } = require('pg');
require('dotenv').config();
// -----------------Database Connection-----------------------
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,
  },
});
const allowedOrigin = "https://p5-todo-list.vercel.app/";
// ------------------------------------------------------------------
app.use(bodyParser.json());
app.use(cors({
  origin: allowedOrigin,
}));
// ---------------------------------Routes-------------------------
app.get('/', (req, res) => {
  res.send('home page')
})

//-------------------------------Todo Routes------------------------
app.get('/td-:regid', async (req, res) => {
  const regid = req.params.regid;
  try {
    const result = await pool.query(`SELECT * FROM tlist WHERE regid='${regid}'`);
    res.json(result.rows); 
  } catch (error) {
    console.error('Error executing SQL:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/td-:regid', async (req, res) => {
  try {
    const regid = req.params.regid;
    console.log(req.body)
    const { title, content } = req.body;
    const query = 'INSERT INTO tlist (regid, title, content) VALUES ($1, $2, $3)';
    const values = [regid, title, content];

    const result = await pool.query(query, values);
    res.json(result.rows); 
  } catch (error) {
    console.error('Error executing SQL:', error);
    res.status(500).send('Internal Server Error');
  }
});
 
app.delete('/td-:regid-:recid', async (req, res) => {
  try {
    const recid = req.params.recid;
    const regid = req.params.regid;
    const result = await pool.query('DELETE FROM tlist WHERE regid = $1 AND recid = $2', [regid, recid]);

    // Check if rows were affected or not
    if (result.rowCount > 0) {
      res.status(200).json({ message: `Deleted record with regid ${regid} and recid ${recid}` });
    } else {
      res.status(404).json({ message: `No record found with regid ${regid} and recid ${recid}` });
    }
  } catch (error) {
    console.error('Error executing SQL:', error);
    res.status(500).send('Internal Server Error');
  }
});



// --------------------------------------------------------------------
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  