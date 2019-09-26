const mongoose = require('mongoose');

const SetorsSchema = new mongoose.Schema({

   nome:{
     type: String,
     require: true,
   },

   descricao:{
     type: String,
   },

    email: {
      type: String,
      unique: true,
    },

   telefone:{
     type: String,
     require: true,
   },

   createAt:{
     type: Date,
     default: Date.now,
   },


});


mongoose.model('Setor',SetorsSchema);
