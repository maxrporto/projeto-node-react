const { Schema, model } = require('mongoose');

//construir a estrutura da tabela no meu banco de dados
const DevSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    user:{
        type: String,
        required: true,
    },
    bio: String,
    avatar:{
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true,
});

module.exports = model('Dev', DevSchema);
//timestamps: true > cria uma coluna de forma automatica chamada createAt em cada registro que for salva na tabela
//desenvolvedor e uma outra updateAt