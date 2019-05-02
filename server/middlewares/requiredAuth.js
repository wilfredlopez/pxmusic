const mongoose = require('mongoose')

const User = mongoose.model('User')



module.exports = async (req, res, next) => {
   // const user = await User.findOne({email:req.body.email, password:req.body.password})

    // if(!user){
    //     res.redirect('/')
    // }

    
    next()
}