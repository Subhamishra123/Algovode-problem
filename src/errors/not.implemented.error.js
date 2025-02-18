const BaseError = require('./BaseError')
const {StatusCodes} =require('http-status-codes')
class NotImplementedError extends BaseError
{
    constructor(methodName)
    {
        super('Not Implemented',StatusCodes.NOT_IMPLEMENTED,`${methodName} not implemented`,{})
    }
}
module.exports=NotImplementedError