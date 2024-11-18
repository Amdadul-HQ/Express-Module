const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on("request",(req,res)=>{
    console.log(req.url,req.method);
    res.end("Hello world")
    if(req.url === '/read' && req.method === "GET"){
        const readAbleStram = fs.createReadStream('./texts/read.txt')
        readAbleStram.on("data",(buffer)=>{
            res.write(buffer)
        })
        readAbleStram.on("end",()=>{
            res.end("This data end here")
        })
    }
})

server.listen(5000,()=>{
    console.log(`server listen port 5000`)
})
