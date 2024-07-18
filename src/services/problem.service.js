const sanitizeMarkedContent =require('../utils/markdownSanitizer')
const NotFoundError=require('../errors/not.found.error')
const BaseError = require('../errors/BaseError')
const { StatusCodes } = require('http-status-codes')

class ProblemService
{
    constructor(problemRepository)
    {
        this.problemRepository=problemRepository
    }
    async saveProblem(problemData)
    { 
        try{
            problemData.description=sanitizeMarkedContent(problemData.description)
            const problem = await this.problemRepository.createProblem(problemData)
            console.log(problem)
            return problem
        }
        catch(error)
        {
            console.log(error)
            throw error
        }
    }
    async retreiveAllProblems()
    {
        try {
            const problems=await this.problemRepository.getAllProblems()
            return problems
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
    async retreiveProblem(problemId)
    {
       
        try {
            if(problemId.length>24){
                //throw new BaseError('Not Found',StatusCodes.NOT_FOUND,`problem with ${problemId} does not exists`,`please enter a valid id`)
                 // throw {error:"some error"}//->else block of errorHandler->custom error obj
                throw new NotFoundError(problemId,`please enter a valid id`)
                
            }
            const problem=await this.problemRepository.getProblem(problemId)
            return problem
        } catch (error) {
           console.log(error)
            throw error;
        }
    }
    async modifyProblem(problemId,modifiedProblem)
    {
        try {
            if(problemId.length>24){
                throw new NotFoundError(problemId,`please enter a valid  id`)
            }
            const problem=await this.problemRepository.updateProblem(problemId,modifiedProblem)
            return problem
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async removeProblem(problemId)
    {
        try {
            if(problemId.length>24)
            {
                throw new NotFoundError(problemId,`please enter a valid  id`)
            }
           const problem=await this.problemRepository.deleteAProblem(problemId)
           return problem
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}
module.exports=ProblemService