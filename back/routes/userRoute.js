const express = require('express');

const UserRoute = express.Router();

const { register, login } = require('../controllers/userControllers');

const {isAuth} = require ('../middlewares/isAuth')

const {registerValidation,loginValidation,validation} = require('../middlewares/RegisterValidation')
UserRoute.post('/register', registerValidation,validation,register);

UserRoute.post('/login',loginValidation,validation,login);

UserRoute.get('/moncompte',isAuth,(req,res)=>{
    res.send(req.user)
    console.log(req.user)
})

module.exports = UserRoute;
