const express = require('express');
const routes  = express.Router();

const UserController = require('./Controller/UserController');
const EstadoController = require('./Controller/EstadoController');


/*
Rotas para usuarios
*/
routes.get   ('/users', UserController.index);
routes.post  ('/users', UserController.store);
routes.get   ('/users/:id', UserController.show);
routes.put   ('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);
/*
Rota para Estados e cidades
*/
routes.get('/estados', EstadoController.index);

/*
Rotas para para os setores do previpalmas
*/
routes.get   ('/setors', SetorController.index);
routes.post  ('/setors', SetorController.store);
routes.get   ('/setors/:id', SetorController.show);
routes.put   ('/setors/:id', SetorController.update);
routes.delete('/setors/:id', SetorController.destroy);


module.exports = routes;
