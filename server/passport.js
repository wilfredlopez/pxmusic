const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

if(process.env.NODE_ENV !== 'production'){
    const keys = require('./../config/keys') 
}

const GOOGLE_CLIENT_ID = keys.GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = keys.GOOGLE_CLIENT_SECRET || process.env.GOOGLE_CLIENT_SECRET
const User = require('mongoose').model('users')

passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user) => {done(null,user)})
})

let URL = 'http://localhost:3000'

if(process.env.PORT === 'production'){
    let URL ="https://<MYAPPNAME>.herokuapp.com"
}else{
    let URL = 'http://localhost:3000'
}
//https://console.developers.google.com
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL: `${URL}/api/auth/google/callback`,
    proxy: true
}, (accessToken, refreshToken, profile, done) => {
    //callback route handler function
    // console.log('access token',accessToken)
    // console.log('refresh token',refreshToken)
    // console.log('profile',profile)

    User.findOne({googleId: profile.id}).then((user)=>{
        if(!user){
            new User({googleId: profile.id}).save().then((newUser)=>{
                done(null, newUser)
            })
        }else{
            console.log('user already threre')
            done(null,user)
        }
    })

}))