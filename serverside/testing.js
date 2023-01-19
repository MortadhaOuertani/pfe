//npm install pdf-parse
const fs = require('fs');
const pdf = require('pdf-parse');


let dataBuffer = fs.readFileSync('./Mariem.pdf');
 
pdf(dataBuffer).then(function(data) {
 
    let text = data.text.split(" ");
    let s=0
    for(let i = 0; i < text.length; i++){
        if(text[i].toUpperCase().includes("react".toUpperCase())){
            s++
            break
        }
    }

    console.log(data.text);
    console.log(text);
    console.log(" React existe: "+s+" fois");
    console.log("\t ")
    console.log("\t ")
    console.log("\t ")
    console.log("\t ")
    console.log("\t ")

});