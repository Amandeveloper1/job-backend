const express = require('express');
const router = express.Router();
const Job = require('../model/job');
const { body, validationResult } = require('express-validator');

// Creating user There.........
router.post('/createjob',async (req, res) => {

    const { jobTitle, jobDescription, comName,skills,requirement,jobfor,salary, jobType, jobPlace } = req.body;

    const job = await Job.create({
        jobTitle: jobTitle,
        jobDescription: jobDescription,
        comName: comName,
        skills: skills,
        requirement: requirement,
        salary: salary,
        jobType: jobType,
        jobfor: jobfor,
        jobPlace: jobPlace
    })

    const data = {
        job: {
            id: job.id
        }
    }

    res.json(data)

})


router.get('/getjob', async (req, res) => {
    try {
        const job = await Job.find({})
        res.send(job)
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('Interenal Server Error are occuring.');
    }
})

router.get('/getonejob', async (req, res) => {
    try {
        const jobid = req.header('jobid');
        const job = await Job.findOne({_id:jobid})
        res.send(job)
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('Interenal Server Error are occuring.');
    }
})


module.exports = router