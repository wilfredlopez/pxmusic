const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

const keys = require('../../config/keys')
const Users = mongoose.model('users')

module.exports = (app) => {
//***** CREATE  ******//
    app.post('/users/create', async (req, res) => {
        const hash = await bcrypt.hashSync(req.body.password, 10);
        const {firstname, lastname} = req.body
        let fullname = ""
        if(firstname && lastname){
            fullname = `${req.body.firstname} ${req.body.lastname}`
        }
        const newUser = {...req.body, password: hash, fullname}

        try{
            const user = await Users.create(newUser)
            res.status(201).send(user)
        }catch(err){
            res.status(409).send(err)
        }
    })

//***** LOGIN *****//
    app.post('/users/login', async (req, res) => {


        const {email, password} = req.body
        try{
            const user = await Users.find({email: email})

            if(!user){
                throw new Error('Authentication Failed')
            }
            const isMatch = await bcrypt.compareSync(password, user[0].password); // true
    
            if(isMatch){
                const token = await jwt.sign({
                    userId: user[0].id
                  }, keys.JWT_SECRET, { expiresIn: '7 days' });

                await user.push({token:token})

                return res.send(user)
            }
            res.status(401).send({error:'Authentication Failed'})
        }catch(err){
            res.status(401).send({error:'Authentication Failed'})
        }
    })


    //AUTHENTICATION MIDDLEWARE : jwt.verify(token, secretOrPublicKey, [options, callback]) || 
    // invalid token - synchronous
// try {
//     var decoded = jwt.verify(token, 'wrong-secret');
//   } catch(err) {
//     // err
//   }

}