const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
const path = require('path');

let storage = multer.diskStorage({
  destination: (req, file, cb) => { 
    cb(null,path.join(__dirname, '../../client/src/ProfilePictures'));
  },
  filename: (req, file, cb) => {
    console.log(file); // add this line
    cb(null, file.originalname);
  },
});

let uploadImage = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("logo");

let uploadFileMiddleware = util.promisify(uploadImage);
module.exports = uploadFileMiddleware;