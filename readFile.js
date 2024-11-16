const fs = require('fs');

fs.readFile("./texts/read.txt","utf-8",(error,data)=>{
    if(error){
        throw Error("Error Reading file")

    }
    fs.writeFile('./texts/read2.txt',data,"utf-8",(err)=>{
        if(err){
            throw Error("Writing error")
        }

    })
})

console.log("Testing ");