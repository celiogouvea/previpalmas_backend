const mongoose = require('mongoose');

const EstadoSchema = new mongoose.Schema({
    state:{type:String},
    stateName:{type:String},
    cities:{type:Array}
});


mongoose.model('Estado',EstadoSchema);
