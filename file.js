const fs = require('fs');
// Read File
const readText = fs.readFileSync("./texts/read.txt","utf-8")
console.log(readText);

// write File
const writetext = fs.writeFileSync("./texts/writeText.txt",readText)

console.log(writetext);
