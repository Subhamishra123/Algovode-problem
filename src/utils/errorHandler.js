const BaseError=require('../errors/BaseError')
const {StatusCodes} =require('http-status-codes')

function errorHandler(error,request,response,next)
{
    if(error instanceof BaseError)
    {
        
        return response.status(error.statusCode).json({
            "status":false,
            "message":error.message,
            "error":error.name,
            "details":error.details,
            "data":{
                statuscode:error.statusCode,
            }
        })
    }
    else{
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            "status":false,
            "message":"Something went Wrong !",
            "error":error,
            "data":{}
        })
    }
}
module.exports=errorHandler