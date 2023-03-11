const fs = require('fs');
const pdf = require('pdf-parse');

  const CountReactInPDF =(req,res)=> {
  let dataBuffer = fs.readFileSync(req.file.destination+filename);
 
  return pdf(dataBuffer).then(function(data) {  
    let text = data.text.split(" ");
    let count = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i].toUpperCase().includes("REACT".toUpperCase())){
            count++;
        }
    }
res.status(200).json(count)
  });
}


module.exports = {
  CountReactInPDF
}