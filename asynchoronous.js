const fs = require('fs');

// Reading file asynchoronously

fs.readFile("./texts/read.txt","utf-8",(error,data)=>{
    if(error){
        throw Error("Error by reading data")
    }
    console.log(data);
    fs.writeFile("./texts/write2.txt",data,"utf-8",(err)=>{
            throw Error("Error by writeing")
    })
    
})