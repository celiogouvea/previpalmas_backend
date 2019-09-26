const mongoose = require('mongoose');

const EstadosSchema = new mongoose.Schema({

  estado:{

    state:{type:String},
    stateName:{type:String},
    cities:[]
  },
});


mongoose.model('Estado',UsersSchema);
