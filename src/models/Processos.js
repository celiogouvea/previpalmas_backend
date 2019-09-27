const mongoose = require('mongoose');

const ProcessosSchema = new mongoose.Schema({

  /*
    Elementos e propriedades do usuario
  */
  
  numeroProtocolo: {
    type: String,
    require: true,
  },
  nomeBeneficiario: {
    type: String,
    require: true,
  },
  telefone: {
    type: String,
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
  despacho:{
    type:String,
    require:true,
  },
  setorAtual:{
    type:String,
    require:true,
  },
  listaDocumentacao:{
    type: Array,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});


mongoose.model('Processo', ProcessosSchema);