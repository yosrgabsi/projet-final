const express = require('express');

const UserRoute = express.Router();

const { register, login } = require('../controllers/userControllers');

const {isAuth} = require ('../middlewares/isAuth')

const {registerValidation,loginValidation,validation} = require('../middlewares/RegisterValidation')
//http://localhost:4000/auth/register/
UserRoute.post('/register', registerValidation,validation,register);
//http://localhost:4000/auth/login/
UserRoute.post('/login',loginValidation,validation,login);
//http://localhost:4000/auth/moncompte/

UserRoute.get('/moncompte',isAuth,(req,res)=>{
    res.send(req.user)
    console.log(req.user)
})

module.exports = UserRoute;
