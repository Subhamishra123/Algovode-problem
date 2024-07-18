const {Problem }=require('../models/index')
const NotFoundError=require('../errors/not.found.error')
const { deleteProblem } = require('../controllers/problem.controller')
class ProblemRepository
{
    async createProblem(problemData)
    {
      
        try {
           const savedProblem = await Problem.create({
            title: problemData.title,
            description: problemData.description,
            testcases: (problemData.testcases) ? problemData.testcases : []
        })
          
           return savedProblem
        } catch (error) {
            console.log("repository",error)
            throw error
        }
    }

    async getAllProblems()
    {
        try {
            const allProblems=await Problem.find({})
            console.log(allProblems)
            return allProblems
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    async getProblem(problemId)
    {
        try {
            const problem=await Problem.findById(problemId)
            if(!problem){
                throw new NotFoundError(problemId,'problem not found')
            }
            
            return problem
        } catch (error) {
            console.log(error)
            throw error
        }
        
    }
    async updateProblem(problemId,updatedProblem)
    {
        try {
            let problem = await Problem.findById(problemId)
            if(!problem){
                throw new NotFoundError(problemId,'problem not found')
            }
            problem=await Problem.findByIdAndUpdate(problemId,updatedProblem)
            return problem
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    async deleteAProblem(problemId)
    {
        try {
            let problem=await Problem.findById(problemId)
            if(!problem)
            {
                throw new NotFoundError(problemId,'problem not found')
            }
            problem = await Problem.findByIdAndDelete(problemId)
            return problem
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

module.exports=ProblemRepository