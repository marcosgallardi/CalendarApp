const {Schema, model} = require('mongoose');

const UsuariosSchema = Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }

})