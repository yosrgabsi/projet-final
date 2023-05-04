const express = require ('express')
const app = express()
const cors = require('cors')
const port =4000
const connectdb= require('./Config/connecteddb')
const UserRoute = require('./routes/userRoute')
require('dotenv').config()
app.use(cors())
app.use(express.json())

//partie appel a la connection db 
connectdb()

//path principal de l'auth
app.use('/auth',UserRoute)


app.listen(port,err=>[
    err?console.log(err):console.log(`go port ${port}` )
])