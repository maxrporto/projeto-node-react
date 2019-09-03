//importar o express 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
//express é uma função onde quando chamada ela cria um novo servidor
//uma nova porta de entrada onde podemos receber requisições e retornar respostas
const server = express();

mongoose.connect('mongodb+srv://projetonode:jv20090207@cluster0-azrmp.mongodb.net/bdreact?retryWrites=true&w=majority',{
    useNewUrlParser:true
});

/*
server.use(cors()): permite que a aplicação seja acessada por qq endereço ex: o react vai poder acessar a aplicação
    se o cors não for instalado no momento em q o REACT for fazer uma requisição no backend ele vai ser bloqueado
    
*/
server.use(cors()); 
server.use(express.json());

//usado para colocar algum tipo configuração que esta em algum outro arquivo 
server.use(routes);
// a partir desse momento adiciono qual porta o meu servidor pode ouvir
//3333 geralmente utilizado para o back end
server.listen(3333); 
