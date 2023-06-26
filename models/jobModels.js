const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema(
    {
        jobTitle : {
            type:String,
            required:true
        },
        jobID :{
            type:String,
            required:true,
            unique:true,
            index: true
        },
        jobCompany : {
            type:String,
            required:true
        },
        jobLocation: {
            type: String,
            required: true
          },
        jobPreference: {
            type: String,
            enum: ['Fresher', 'Experienced'],
            required: true
          },
        jobSkills: {
            type: String,
            required: true
          }
    },
    {
        collection : 'jobs'
    }
)

module.exports = mongoose.model('jobs', jobSchema)