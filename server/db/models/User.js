const mongoose = require('mongoose')
var timestamps = require('mongoose-timestamp');
const {Schema} = mongoose

const userSchema = new Schema({
    fullname:String,
    firstname: String,
    lastname: String,
    admin:{
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required:true
    }
})

userSchema.plugin(timestamps);
mongoose.model('users',userSchema)




// const Cat = mongoose.model('Category')

// Cat.findOne({category: 'reggae'}).then((cat)=>{
//     if(!cat){
//         new User({category: 'reggae'}).save().then((newCat)=>{
//             console.log(cat)
//         })
//     }else{
//         console.log('user already threre')
      
//     }
// })

