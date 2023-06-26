const jobsModel = require('../models/jobModels')

const getJobID = async(request, response) => {
    const {jobID} = request.body
    try{
        const jobToBeEdited = await jobsModel.findOne({jobID:jobID})
        response.status(200).json(jobToBeEdited)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getJobID}