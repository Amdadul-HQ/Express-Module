const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on("request",(req,res)=>{

    const readAbleStram = fs.createReadStream(process.cwd()+'/texts/readbhul.txt')
    if(req.url === '/read' && req.method === "GET"){
        readAbleStram.on("data",(buffer)=>{
            res.write(buffer)
        })
        readAbleStram.on("end",()=>{
            res.end("This data end here")
        })
        readAbleStram.on("error",(err)=>{
            res.statusCode = 500
            console.log(err);
            res.end("something is wrong")
        })
    }
})

server.listen(5000,()=>{
    console.log(`server listen port 5000`)
})
