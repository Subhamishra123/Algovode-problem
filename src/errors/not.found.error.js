const BaseError=require('./BaseError')
const {StatusCodes} =require('http-status-codes')
class NotFoundError extends BaseError
{
    constructor(problemId,details)
    {
        super('Not Found',StatusCodes.NOT_FOUND,`problem with ${problemId} does not exists`,details)
    }
}
module.exports=NotFoundError


/**
 * {
 * 
 *      errormessage:error.name,
 *      statuscode:error.statuscode,
 *      errordesc:error.description,
 *      
 *      details:error.details
 * }
 */