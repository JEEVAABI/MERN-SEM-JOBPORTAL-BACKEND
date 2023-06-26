const jobModels = require('../models/jobModels')
const initialData = require('../data/initialData')


const addNewJob = async(request, response) => {
    const newJob = request.body
    try{
        const existingJob = await jobModels.findOne({jobID:request.body.jobID})
        if (existingJob)
        {
            return response.status(409).json({message:'Job ID already exsists.'})
        }
        const job = await jobModels.create(newJob)
        response.status(201).json(job)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}



const getAllJobs = async(request, response) => {
    try{
    const jobs = await jobModels.find()
    if (jobs.length === 0)
    {
       const jobs = await jobModels.insertMany(initialData)
    }
    response.status(200).json(jobs)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}



const updateJob = async(request, response) => {
    const jobToBeUpdated = request.body
    try{
        
        const job = await jobModels.findOneAndUpdate({jobID:jobToBeUpdated.jobID}, jobToBeUpdated)
        response.status(201).json(job)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {addNewJob,getAllJobs,updateJob}