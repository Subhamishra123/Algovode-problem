const mongoose =require('mongoose')
const {ATLAS_DB_URL,NODE_ENV}=require('../config/server.config')
async function connectToDb()
{
    try {
        if(NODE_ENV=='development'){
            await mongoose.connect(ATLAS_DB_URL)
        }
    } catch (error) {
        console.log('unable to connect to db')
        console.log(error)
    }
}
module.exports=connectToDb