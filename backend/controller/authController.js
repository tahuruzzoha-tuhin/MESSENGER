const formidable = require('formidable');
const validator = require('validator');
const bcrypt = require('bcrypt');
const fs = require('fs');
const registerModel = require('../models/authModel')
const jwt = require('jsonwebtoken');

module.exports.userRegister = (req, res) => {


    const form = formidable();
    form.parse(req, async (err, fields, files) => {
        const { userName, email, password, confirmPassword } = fields;
        // const { image } = files;

        // console.log(err);
        const error = [];
        if (!userName) {
            error.push('Please provide your user name');
        }
        if (!email) {
            error.push('Please provide your email');
        }
        if (!validator.isEmail(email)) {
            error.push('Please provide your valid email');
        }
        if (!password) {
            error.push('Please provide your password');
        }
        if (!confirmPassword) {
            error.push('Please provide your confirm password');
        }
        if (password && confirmPassword && password !== confirmPassword) {
            error.push('Your password is not same');
        }
        if (password && password.length < 6) {
            error.push('Please provide password must be 6')
        }
        // if (Object.keys(files).length === 0) {
        //     error.push('Please provide your Image')
        // }
        if (error.length > 0) {
            res.status(404).json({ error: { errorMessage: error } });

        } else {
            // const getImageName = files.image.originalFilename;
            // const randNumber = Math.floor(Math.random() * 99999);

            // const newImageName = randNumber + getImageName;
            // files.image.originalFilename = newImageName;

            // console.log(files.image.originalFilename);
            // console.log(`${files.image.filepath}/${files.image.originalFilename}`);
            // const a = `${files.image.filepath}/${files.image.originalFilename}`;
            // const newPath = __dirname + `/../../../frontend-chat/public/image/`;
            // // console.log(newPath);
            try {
                const checkUser = await registerModel.findOne({ email: email });
                if (checkUser) {
                    res.status(404).json({ error: { errorMessage: ['Your email already exist'] } })
                } else {
                    // fs.copyFile(a, newPath, async (error) => {
                    //     console.log('achi');
                    //     if (!error) {
                    const userCreate = await registerModel.create({
                        userName,
                        email,
                        password: await bcrypt.hash(password, 10),
                        // image: files.image.originalFilename
                    })
                    const token = jwt.sign({
                        id: userCreate._id,
                        email: userCreate.email,
                        userName: userCreate.userName,
                        registerTime: userCreate.createAt
                    }, process.env.SECRET, { expiresIn: process.env.TOKEN_EXP });

                    const options = {
                        expires: new Date(Date.now + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000)
                    }

                    res.status(201).cookie('authToken', token, options).json({
                        successMessage: 'Your register successfull',
                        token
                    })
                    // console.log(token);
                    // console.log("success");
                    // // } else {
                    //     console.log(error);
                }

            } catch (error) {
                res.status(500).json({ error: { errorMessage: ['Internal Server Error'] } });

            }


        }
    })
}

module.exports.userLogin = async (req, res) => {

    const error = [];
    const { email, password } = req.body;
    if (!email) {
        error.push('Please provide your email')
    }
    if (!password) {
        error.push('Please provide your password')
    }
    if (email && !validator.isEmail(email)) {
        error.push('Please provide your valid email')
    }
    if (error.length > 0) {
        res.status(400).json({ error: { errorMessage: error } })
    } else {
        try {
            const checkUser = await registerModel.findOne({ email: email }).select('+password')
            // console.log(checkUser);

            if (checkUser) {
                const matchPassword = await bcrypt.compare(password, checkUser.password);
                if (matchPassword) {

                    const token = jwt.sign({
                        id: checkUser._id,
                        email: checkUser.email,
                        userName: checkUser.userName,
                        registerTime: checkUser.createAt
                    }, process.env.SECRET, { expiresIn: process.env.TOKEN_EXP });

                    const options = {
                        expires: new Date(Date.now + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000)
                    }

                    res.status(200).cookie('authToken', token, options).json({
                        successMessage: 'Your login successfull',
                        token
                    })
                } else {
                    res.status(400).json({ error: { errorMessage: ['Your password not valid'] } })
                }
            } else {
                res.status(400).json({ error: { errorMessage: ['Your email not found'] } })
            }


        } catch (error) {
            res.status(404).json({ error: { errorMessage: ['Internal server error'] } })
        }
    }
    console.log(req.body);
}