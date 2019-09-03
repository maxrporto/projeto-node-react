const axios = require('axios');
const Dev = require("../models/Dev");

module.exports ={
    async index(req, res){
        //pega o id do usuario logado
        const {user} = req.headers;
        
        //pega a instancia do usuario no banco de dados
        const loggedDev = await Dev.findById(user);
        //buscar dentro da base de dados todos os usuarios que não os usuarios que estão logados
        //não são usuarios que deram like ou dislikes
        const users = await Dev.find({
            //$ne = not equals
            //$nin = not in
            //1º condição: Me traz todos os usuários('users') que o ID('_id') que não seja igual ao usuario que estou
            //passando  ({ $ne: user}),
            $and:[
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } }, //não retorna os usuarios logados que estão do array
                { _id: { $nin: loggedDev.dislikes } }, //não retorna os usuarios logados que estão do array
            ], //aplica os tres filtro de uma vez só
        })
        return res.json(users);
    },
    async store(req, res){
        //cdconsole.log(req.body.username);
        const { username } = req.body;
        
        const userExists = await Dev.findOne({user: username});

        if(userExists){
            return res.json(userExists);
        }
        
        //toda ves que usar o await dentro de uma função precisa ser assincrona
        //await: espera o processo do get  terminar para depois executar o resto do código
        const response = await axios.get(`https://api.github.com/users/${username}`);
        
        // const{} se chama desestruturação
        const{ name, bio, avatar_url:avatar} = response.data;
        
        const dev = await Dev.create({ 
            name,
            user: username,
            bio,
            avatar: avatar })
        //axios retorna os dados da requisição dentro do "data"
        //console.log(response.data);
        return res.json(dev);
    }
};