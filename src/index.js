const express=require('express')
// const dotEnv=require('dotenv')
// dotEnv.config()
const errorHandler=require('./utils/errorHandler')
const connectToDb=require('./config/db.config')
const app= express()
const {PORT}=require('../src/config/server.config')
const apiRouter = require('../src/routes/index')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())
app.use('/api',apiRouter)
app.get('/ping',(request,response)=>{
    return response.json({message:"ping ok"})
})
app.use(errorHandler)
app.listen(PORT,async()=>{
    console.log(`server listening at ${PORT}`)
   
    await connectToDb()
    console.log(`succesfully connected to db`)
    
})