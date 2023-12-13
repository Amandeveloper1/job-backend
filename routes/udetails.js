const express = require('express');
const router = express.Router();
const Udetails = require('../model/udetails');
const { body, validationResult } = require('express-validator');

// Creating user There.........
router.post('/udetails',async (req, res) => {

    const { userId,ustatus,username,uDesc,skills } = req.body;

    const job = await Udetails.create({
        userId: userId,
        username: username,
        userDescription: uDesc,
        skills: skills,
        ustatus: ustatus,
        details: []
    })

    res.json(job)

})


router.get('/getudetails', async (req, res) => {
    try {
        const userid = req.header('userId');
        const user = await Udetails.findOne({userId:userid})
        if(user){

            res.send(user)
        }else{
            return res.status(400).json({ errors: 'First you have to create account' });
        }
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('Interenal Server Error are occuring.');
    }
})


module.exports = router