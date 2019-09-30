const express = require('express');
const mongoose = require("mongoose");
const requireDir = require('require-dir');
var pg = require('pg');


//inicializando o servidor de api
const app = express();
app.use(express.json());

//inicializando o servidor de banco na api
mongoose.connect('mongodb://localhost:27017/previpalmas',{
   useUnifiedTopology: true,
   useNewUrlParser: true
});
requireDir('./src/models');


var conString = "postgres://postgres:siprev123@192.168.42.10/siprev_gestao";
pg.connect(conString, function(err, client, done) {

   if (err) {
     return console.error('error fetching client from pool', err);
   }
   client.query('SELECT $1::int AS number', ['1'], function(err, result) {
     done();
     if (err) {
       return console.error('error running query', err);
     }
     console.log(result.rows[0].number);
   });
 
 });
 





//adicionando a rota da rais da api
app.use('/api', require('./src/routes'));
//colocar api para ficar ouvidno sempre na porta 5000
app.listen(5000);
