const fs = require('fs');
const pdf = require('pdf-parse');
const VerifypdfFolder = async () => {
    try {
        console.log("éz")
        const folderPath = "./cv"; // path to the folder containing the files
        let totalCount = 0; // count of all matches across all files
        const search = ["angular", "html","react"]; // add quotes around search terms
        const found = new Set();

        // get a list of all files in the folder
        const fileNames = fs.readdirSync(folderPath);

        // iterate through each file in the folder
        for (let i = 0; i < fileNames.length; i++) {
            const filePath = folderPath + '/' + fileNames[i];
            const dataBuffer = fs.readFileSync(filePath);
            let count = 0;

            const data = await pdf(dataBuffer);
            const text = data.text.split(/[^\w]+/); // split by non-alphanumeric characters and space

            // iterate through each word in the file and check if it matches any of the search terms
            for (let j = 0; j < text.length; j++) {
                const word = text[j].toLowerCase(); // remove normalization since we're using includes
                for (let k = 0; k < search.length; k++) {
                    if (word.includes(search[k].toLowerCase())) { // use includes instead of exact match
                        if (!found.has(search[k].toLowerCase())) {
                            count++;
                            found.add(search[k].toLowerCase());
                        }
                    }
                }
            }

            totalCount += count; // add the count from this file to the total count

            // log the total count and the file name after processing each file

            console.log(`'${fileNames[i]}': score =>${count} :${[...found]}`);

            // clear the found set for the next file
            found.clear();

        }

        console.log(`Score of Folder: ${totalCount}`);
    }
    catch (err) {
        console.log(err)
    }
};

VerifypdfFolder();
