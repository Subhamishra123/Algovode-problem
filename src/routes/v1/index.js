const express=require('express')
const {problemRouter} =require('../v1/problem.routes')
const v1router=express.Router()
v1router.use('/problem',problemRouter)
module.exports=v1router
