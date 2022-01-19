
const fs = require('fs');



exports.writeToOutputFile = (expectedArray) => {
    try {
        //write to file here
        fs.writeFile("./people.json", JSON.stringify(expectedArray))
        return true
    } catch (err) {
        return false
    }

}

exports.checkOrWriteToFile =() => {
    try {
        //read the file here 
        const data = fs.readFileSync("./people.json");
        return data
    } catch (err) {
        // create empty file here 

    }
}

   
    


