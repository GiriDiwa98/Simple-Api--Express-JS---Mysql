const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_film'
  });

//connect to database
conn.connect((err) => {
    if(err) throw err;
    console.log('Mysql Connected ..');
});

app.get('/film/films',(req, res) => {
    let sql = "SELECT * FROM films";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

//tampilkan data product berdasarkan id
app.get('/film/films/:id',(req, res) => {
  let sql = "SELECT * FROM product WHERE films_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Tambahkan data product baru
app.post('/film/films',(req, res) => {
  let data = {films_name: req.body.films_name, films_image: req.body.films_image};
  let sql = "INSERT INTO product SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Edit data product berdasarkan id
app.put('/film/films/:id',(req, res) => {
  let sql = "UPDATE films SET films_name='"+req.body.films_name+"', films_slug='"+req.body.films_image+"' WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete data product berdasarkan id
app.delete('/film/films/:id',(req, res) => {
  let sql = "DELETE FROM product WHERE films_id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});
