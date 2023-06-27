const mongoose = require('mongoose')


const UserSchema=  mongoose.Schema({
    name:String,
    lastname:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    },
   
    
    
    
})

module.exports = mongoose.model('UserSchema',UserSchema);