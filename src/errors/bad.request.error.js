const BaseError=require('./BaseError')
const { StatusCodes } = require('http-status-codes')
class BadRequestError extends BaseError
{
    constructor(propertyName,details)
    {
        super('Bad Request',StatusCodes.BAD_REQUEST,`Invalid structure for ${propertyName}`,details)
    }
}
module.exports=BadRequestError