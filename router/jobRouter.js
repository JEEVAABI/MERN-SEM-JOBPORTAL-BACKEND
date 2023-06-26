const express = require('express')
const router = express.Router()
const {addNewJob, getAllJobs, updateJob} = require('../controllers/jobControllers')

router.route('/').post(addNewJob).get(getAllJobs).patch(updateJob)

module.exports = router