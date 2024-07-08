const {StatusCodes}=require('http-status-codes')
const NotImplementedError=require('../errors/not.implemented.error')
function pingController(request,response)
{
    return response.status(StatusCodes.ACCEPTED).json({message:'problem controller is up'})
}
function getProblem(request,response)
{
    return response.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'})
}
function getProblems(request,response)
{
    return response.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'})
}
function addProblem(request,response)
{
    try {
        throw new NotImplementedError('Add Problem')
    } catch (error) {
        console.log(error)
        next(error)
    }
    //return response.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'})
}
function deleteProblem(request,response)
{
    return response.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'})
}
function updateProblem(request,response)
{
    return response.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'})
}
module.exports={
    pingController,
    getProblem,
    getProblems,
    addProblem,
    deleteProblem,
    updateProblem
}