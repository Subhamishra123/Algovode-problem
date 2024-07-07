const express=require('express')
const app= express()
const {PORT}=require('../src/config/server.config')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())
app.get('/ping',(request,response)=>{
    return response.json({message:"ping ok"})
})
app.listen(PORT,()=>{
    console.log(`server listening at ${PORT}`)
})