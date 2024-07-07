const express=require('express')
const apiRouter=express.Router()
const v1router=require('../routes/v1')
apiRouter.use('/v1',v1router)
module.exports=apiRouter