//npm install pdf-parse
const fs = require('fs');
const pdf = require('pdf-parse');


let dataBuffer = fs.readFileSync('./Mariem.pdf');  //read pdf files
 
pdf(dataBuffer).then(function(data) {  
 
    let text = data.text.split(" ");
    let s=0
    for(let i = 0; i < text.length; i++){
        if(text[i].toUpperCase().includes("react".toUpperCase())){
            s++
            break
        }
    }

    console.log(data.text); //afficher tous les textes de pdf
    console.log(text); //afficher les textes séparées par une espace 
    console.log(" React existe: "+s+" fois"); 
    

});