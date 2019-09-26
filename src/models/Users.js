const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({

   nome:{
     type: String,
     require: true,
   },

   cpf:{
     type: String,
     require: true,
   },

   dataNascimento:{
     type: String,
     require: true,
   },

   telefone:{
     type: String,
     require: true,
   },

   setor:{
     type: String,
     require: true,
   },

   endereco:{
     type: String,
     require: true,
   },

   createAt:{
     type: Date,
     default: Date.now,
   },


});


mongoose.model('User',UsersSchema);
