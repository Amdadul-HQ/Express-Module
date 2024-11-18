const fs = require('fs');

// Read text
const readText= fs.readFileSync("./texts/read.txt","utf-8")

console.log(readText);

// Write Text
const writtenText = fs.writeFileSync("./texts/write.txt",readText + "This is my written text")

console.log(writtenText);