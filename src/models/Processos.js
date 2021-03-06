const mongoose = require('mongoose');

const ProcessosSchema = new mongoose.Schema({

  /*
    Elementos e propriedades do usuario
  */
  numeroProtocolo: {
    type: String,
    require: true,
    unique: true,
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
    required: true,
  },
  cpf: {
    type: String,
    required: true,
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
  },
  listaLinkDocumentacao:{
    type: Array,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model('Processo', ProcessosSchema);
