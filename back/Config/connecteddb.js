const mongoose= require('mongoose')
const connectdb=async()=>{
    try{
       await  mongoose.connect('mongodb+srv://ranimgabsi:CS1iK9wYSRqFNsAf@cluster0.uahoqn8.mongodb.net/')
       
       console.log('you are connected to ur db ' );
    }catch(err){
        console.log(err);
    }
}



module.exports=connectdb