const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session')
const passport = require('passport')
const cors = require('cors')

const fileUpload = require('express-fileupload') //test for upload image

let keys = {}
//custom imports
if(process.env.NODE_ENV === 'production'){
    
  }else{
    keys = require('./../config/keys') //my secret keys
  }

require('./db/models/Song') //user schema and mongoose model
require('./db/models/User') //user schema and mongoose model

//configurations
mongoose.connect(keys.MONGO_DB_URI || process.env.MONGO_DB_URI,{useNewUrlParser: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//const publicPath = path.join(__dirname,'..','build')


const app = express()
//app.use(express.static(publicPath))
app.use(express.static(path.join(__dirname,'..','build')));

app.use(fileUpload()) //test for uploading file

require('./passport') //adding passport for authentication 

const corsOptions = { //temporal for development purposes
    origin: "*",
    optionsSuccessStatus: 200
}

//midlewares
app.use(bodyParser.json());
app.use(cors(corsOptions))
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_KEY || process.env.COOKIE_KEY]
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())

//routes import
const categoryRoutes = require('./routes/getMusic')
const userRoutes = require('./routes/userRoutes')

 
//ROUTES TO SERVER
categoryRoutes(app)
userRoutes(app)


//ALL OTHER ROUTES WILL GO TO THE REACT APP. LOADED WITH INDEX.HTML
// app.get('*', (req, res )=>{
//     res.sendFile(path.join(publicPath,'index.html'))
// })

// app.get('/home*', function (req, res) {
//     res.sendFile(path.join(__dirname, '..','build', 'index.html'));
//   });

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,'..','build', 'index.html'));
    //res.sendFile(path.join(__dirname,'..','build', 'index.html'));
  });

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})



