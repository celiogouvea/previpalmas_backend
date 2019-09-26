const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({

  nome: {
    type: String,
    require: true,
  },

  dataNascimento: {
    type: String,
    require: true,
  },

  telefone: {
    type: String,
    require: true,
  },

  endereco: {
    type: Array,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  cpf: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  passwordResetToken: {
    type: String,
    select: false,
  },
  passwordResetExpires: {
    type: Date,
    select: false,
  },

  id_setor:{
    type:String,
    require: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },


});


mongoose.model('User', UsersSchema);
