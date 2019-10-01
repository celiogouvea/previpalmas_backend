const mongoose = require('mongoose');
const criarPasta = require('../Controller/PastaController');


const Processo = mongoose.model('Processo');


module.exports = {
   async index(req, res){
    const processos = await Processo.find();
    return res.json(processos);
   },

   async show(req, res){ 
     const processo = await Processo.findById(req.params.id);
     return res.json(processo);
   },

   async store(req, res){
     //criação
     const processo= await Processo.create(req.body);
     //test criar pasta de processo
     await criarPasta.Diretorio(req.params.numeroProtocolo);
     return res.json(processo);
   },

   async update(req, res){ 
     const processo = await Processo.findByIdAndUpdate(req.params.id, req.body, {new: true});
     return res.json(processo);
   },

   async destroy(req, res){ 
     await Processo.findByIdAndRemove(req.params.id);
     return res.send();
   },

};
