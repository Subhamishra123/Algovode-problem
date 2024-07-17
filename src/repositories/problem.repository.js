const {Problem }=require('../models/index')
class ProblemRepository
{
    async createProblem(problemData)
    {
        try {
           const savedProblem = await Problem.create(problemData)
           console.log(savedProblem)
           return savedProblem
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

module.exports=ProblemRepository