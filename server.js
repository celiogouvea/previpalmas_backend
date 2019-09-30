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



//adicionando a rota da rais da api
app.use('/api', require('./src/routes'));
//colocar api para ficar ouvidno sempre na porta 5000
app.listen(5000);
