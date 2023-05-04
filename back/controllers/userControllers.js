const UserSchema = require ('../model/user')
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')
exports.register=async(req,res)=>{
    try{
        //envoi data
        const {UserName, email,password}= req.body
        const found =await  UserSchema.findOne ({email})
        if (found){
            return res.json({msg:'A user with this email already exists.'})}

        const newuser =await new  UserSchema(req.body)

        //utilisation de bcrypt
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password,salt);

        newuser.password = hash

     newuser.save()
     res.status(200).json ({msg:' u did it welcome to the club.',newuser})   

    }catch (err) {
        console.log(err)
    }
}

exports.login=async(req,res)=>{
    try{
        const {password,email} =req.body
const found = await UserSchema.findOne({email})
if (!found){return res.json('User with this email address is not registered. Please try again')}

const match= bcrypt.compare(password, found.password)
if (!match) {return res.json ({msg:'Incorrect email or password. Please try again.'})}
const payload = {id : found._id }
//// Génération d'un token avec JWT

var token =jwt.sign(payload, process.env.privateKey)
res.json({msg:'You are welcome.',found, token})
    }catch(err){
        console.log(err)
    }
}