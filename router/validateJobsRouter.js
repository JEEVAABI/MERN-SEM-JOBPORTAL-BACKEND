const express = require('express')
const router = express.Router()
const {getJobID} = require('../controllers/validateJobsController')

router.route('/').post(getJobID)

module.exports = router