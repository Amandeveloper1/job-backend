require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../model/user');



// Creating user There.........
router.post('/createuser', async (req, res) => {

    const { username, password, email, usertype } = req.body;

    let finduser = await User.findOne({ email: email });
        
    if (finduser) {
        return res.status(400).json({ errors: 'Email already exit..' });
    }
    const user = await User.create({
        username: username,
        password: password,
        email: email,
        usertype: usertype,
        details: []
    })

    const data = {
        user: {
            id: user.id
        }
    }
    res.json(data)
})



router.post('/loginuser', async (req, res) => {

    try {
        const { email, password } = req.body

        let finduser = await User.findOne({ email: email });

        if (!finduser) {
            return res.status(400).json({ errors: 'Invalid craditails....' });
        }

        if (finduser.password !== password) {
            return res.status(400).json({ errors: 'Invalid craditails..,...' });
        }

        const data = {
            user: {
                id: finduser.id
            }
        }

        res.json({ data })

    } catch (error) {
        console.log(error.massage);
        res.status(500).send("some Error Occured");
    }

})

router.post('/googlelogin', async (req, res) => {

    try {
        const { email} = req.body

        let finduser = await User.findOne({ email: email });

        if (!finduser) {
            return res.status(400).json({ errors: 'First you have to create account' });
        }

        const data = {
            user: {
                id: finduser.id
            }
        }

        res.json({ data })

    } catch (error) {
        console.log(error.massage);
        res.status(500).send("some Error Occured");
    }

})










router.get('/getuser', async (req, res) => {
    try {
        const userid = req.header('userid');
        const user = await User.findById(userid);
        res.send(user)
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('interenal some Error are occuring.');
    }
})




module.exports = router