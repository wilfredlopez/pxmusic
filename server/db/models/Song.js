const mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate-v2');
var timestamps = require('mongoose-timestamp');
const {Schema} = mongoose

const songSchema = new Schema({
    name: String,
    title: String,
    artist: String,
    album: String,
    url: String,
    img:String,
    category:String,
    downloads: {
        type: Number,
        default:0
    }
})

songSchema.plugin(timestamps);
songSchema.plugin(mongoosePaginate);
mongoose.model('Song',songSchema)

