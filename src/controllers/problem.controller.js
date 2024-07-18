const {ProblemService} = require('../services')
const {ProblemRepository} =require('../repositories')
const {StatusCodes} = require('http-status-codes')
const problemService = new ProblemService(new ProblemRepository())

function pingController(request,response)
{
    return response.status(StatusCodes.ACCEPTED).json({message:'problem controller is up'})
}
async function getProblem(request,response,next)
{
   try {
      const problem = await problemService.retreiveProblem(request.params.id)
      return response.status(StatusCodes.ACCEPTED).json({
         success:true,
         message:`succesfully retreived problem with id ${request.params.id}`,
         error:{},
         data:problem
      })
   } catch (error) {
      console.log('problemid?',error)
      next(error)
   }
}
async function getProblems(request,response,next)
{
   // return response.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'})
   try {
      const problems = await problemService.retreiveAllProblems()
      return response.status(StatusCodes.OK).json({
         success:true,
        message:'succesfully retreives all problems',
        error:{},
        data:problems
      })
   } catch (error) {
      console.log(error)
      next(error)
   }
}
async function addProblem(request,response,next)
{
    
    try {
      
       const problem = await problemService.saveProblem(request.body)
      
       return response.status(StatusCodes.CREATED).json({
        success:true,
        message:'succesfully created a new problem',
        error:{},
        data:problem
       })

    } catch (error) {
        console.log("controller-",error)
        next(error)
    }
    //return response.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'})
}
async function deleteProblem(request,response,next)
{
   try {
      const problem=await problemService.removeProblem(request.params.id)
      return response.status(StatusCodes.ACCEPTED).json({
         success:true,
         message:'succesfully deleted an existing problem',
         error:{},
         data:problem
      })
   } catch (error) {
      console.log(error)
      next(error)
   }
   // return response.status(StatusCodes.NOT_IMPLEMENTED).json({message:'not implemented'})
}
async function updateProblem(request,response,next)
{
   try {
      let problem=await problemService.modifyProblem(request.params.id,request.body)
      problem=await problemService.retreiveProblem(request.params.id)
      return response.status(StatusCodes.ACCEPTED).json({
         success:true,
         message:'succesfully updated an existing problem',
         error:{},
         data:problem
      })
   } catch (error) {
      console.log(error)
        next(error)
   }
}
module.exports={
    pingController,
    getProblem,
    getProblems,
    addProblem,
    deleteProblem,
    updateProblem
}