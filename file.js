const fs = require('fs');

const readText = fs.readFileSync("./texts/read.txt","utf-8")

console.log(readText);