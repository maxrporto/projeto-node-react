const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikesController = require('./controllers/DislikesController');
const routes = express.Router();

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikesController.store);

module.exports = routes;
//acesso a rota raiz  - localhost/3333
//utilizando ( () = {}) :arrow fucntion
/*
    req=requisição : traz todas as informações que são referentes a requisição do usuário
    ex: localhost:3333/?nome=max

routes.get("/" , (req, res) => {
    //return res.send(`1º back end em react ${req.query.name}`);

    //enviando uma messagem json para brosewr
    return res.json({message: `Dae back end em react ${req.query.name}`});
});

routes.post('/devs', (req, res) => {
    console.log(req.body);
    return res.json(req.body); 
});
*/
//para expor alguma informação de dentro do arquivo
