const util = require("util"); //util : un module de Node pour gérer la promesse 
const multer = require("multer"); 
const maxSize = 2 * 1024 * 1024; //la taille max d'un fichier uploadés  = 2MB
const path = require('path'); //path : module de gestion de chemin de fichiers

let storage = multer.diskStorage({  
  destination: (req, file, cb) => { 
    cb(null,path.join(__dirname, '../../client/src/ProfilePictures')); //les fichiers uplodés seront stock+és dans cette repertoire
  },
  filename: (req, file, cb) => { 
    console.log(file); 
    cb(null, file.originalname);
  },
});

let uploadImage = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("logo");
 
let uploadFileMiddleware = util.promisify(uploadImage); //pour transformer la fonction uploadImage en une fonction de promesse
module.exports = uploadFileMiddleware;