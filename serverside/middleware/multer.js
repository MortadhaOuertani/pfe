const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
const path = require('path');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {  //distination: The folder to which the file has been saved
    cb(null,path.join(__dirname, '../../client/src/components/cvs  '));
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("cv");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;