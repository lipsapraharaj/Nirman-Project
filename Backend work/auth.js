const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const authenticate = require('../middleware/authenticate');

app.use(express.json());

//=============To get User Schema=================
const User = require('../model/userSchema');
require('../db/connection');

//=============Router Connection=================
// ==============Home Page==============
router.get('/', (req, res) => {
    res.send('hello from the router Home ');
})

// ==============Map Page==============
app.get('/map',authenticate,(req,res)=>{
    res.send("Hello from MAP page");
});

// ==============Register Page==============
router.post('/register', async (req, res) => {
    const { name, email, phone, password, Cpassword } = req.body;
    if (!name || !email || !phone || !password || !Cpassword) {
        return res.status(422).json({ error: 'invalid inputs...' });
    }
    if (phone.toString().length != 10) {
        return res.status(422).json({ error: 'Invalid Mobile no ...' });
    }
    if (!email.match(validRegex)) {
        return res.status(422).json({ error: 'Invalid Email ...' });
    }
    if (password != Cpassword) {
        return res.status(422).json({ error: 'Password not matched ...' });
    }
    try {
        const userexist = await User.findOne({ email: email });
        if (userexist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        const user = new User({ name, email, phone, password, Cpassword });
        await user.save();
        res.status(201).json({ message: "user registered sucessfully" });
    } catch (err) {
        res.status(422).json({ error: "failed to register" });
    }
});

// ==============Login Page==============
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'invalid Credentials...' });
        }
        
        if (!email.match(validRegex)) {
            return res.status(400).json({ error: 'invalid Credentials...' });
        }
        const userlogin = await User.findOne({ email: email });
        // console.log(email);
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            const token=await userlogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtToken",token,{
                expires:new Date(Date.now()+258920000),
                httpOnly:true
            });
            if (!isMatch) {
                res.status(400).json({ message: "invalid Credentials..." });
            }
            else {
                res.status(201).json({ message: "user Login sucessfully" });
            }
        }
        else {
            res.status(400).json({ message: "invalid Credentials..." });
        }
    } catch (err) {
        res.status(400).json({ message: "invalid Credentials..." });
    }
});


module.exports = router;