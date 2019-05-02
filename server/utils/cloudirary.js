// const dotenv = require('dotenv'); //IF WANT TO USE ENV VARIABLE IN DEV
// dotenv.load();

const fs = require('fs');
const cloudinary = require('cloudinary').v2;

const keys = require('../../config/keys')

cloudinary.config({ 
    cloud_name: keys.CLOUDINARY_CLOUD_NAME, 
    api_key: keys.CLOUDINARY_API_KEY, 
    api_secret: keys.CLOUDINARY_API_SECRET
  });

  saveToCloudinary = function(imgPath){
    return cloudinary.uploader.upload(imgPath, function(error, result) {
        //console.log(result.url, error)
        return result
    });
}

module.exports =  saveToCloudinary
//



