const mongoose = require('mongoose');


const Setor = mongoose.model('Setor');


module.exports = {
   async index(req, res){
    const setores = await Setor.find();
    return res.json(setores);
   },

   async show(req, res){ 
     const setor = await Setor.findById(req.params.id);
     return res.json(setor);
   },

   async store(req, res){
     //criação
     const setor = await Setor.create(req.body);
     return res.json(setor);
   },

   async update(req, res){ 
     const setor = await Setor.findByIdAndUpdate(req.params.id, req.body, {new: true});
     return res.json(setor);
   },

   async destroy(req, res){ 
     await Setor.findByIdAndRemove(req.params.id);
     return res.send();
   },

};
