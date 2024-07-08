const express=require('express')
const problemRouter=express.Router()
const problemController = require('../../controllers/problem.controller')
problemRouter.get('/ping',problemController.pingController)
problemRouter.get('/:id',problemController.getProblem)
problemRouter.get('/',problemController.getProblems)
problemRouter.post('/',problemController.addProblem)
problemRouter.put('/:id',problemController.updateProblem)
problemRouter.delete('/:id',problemController.deleteProblem)
module.exports={
    problemRouter
}