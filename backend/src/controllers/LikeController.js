const dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        
//        console.log(req.params.devId);
//        console.log(req.headers.user);

        //precisa do desenvolvedor que esta dando like em alguém
        //desestruturar/pegar as duas informações 
        const { user } = req.headers;
        const { devId } = req.params;
        
        //buscar as duas instancias/entidades salvas no banco de dados
        //usuário logado
        const loggedDev = await dev.findById(user);

        //usuário que esta recebendo os likes
       const targetDev = await dev.findById(devId);

        //verifica se o targetDev não existir retorna httpcodes com status 400(usuário informou algo errado)
        if(!targetDev){
            return res.status(400).json({ error: 'Dev not exists'}); //badrequest
        } 

        if(targetDev.likes.includes(loggedDev._id)){
            console.log('DEU MATCH');
        }

        loggedDev.likes.push(targetDev._id);
        await loggedDev.save();

        return res.json(loggedDev);
        //return res.json({ok : true});
    }
};