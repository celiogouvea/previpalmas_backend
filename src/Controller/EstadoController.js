const mongoose = require('mongoose');

const Estado = mongoose.model('Estado');

module.exports = {
   async index(req, res){
    const estados = await User.find();
    return res.json(estados);
   },
};
