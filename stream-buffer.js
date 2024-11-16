const http = require('http');
const fs = require('fs');
const server = http.createServer()

server.on("request",(req,res)=>{
    console.log(req);
    if(req.url === "/read-file" && req.method === 'GET'){
        const reabAbleStreamData = fs.createReadStream(__dirname+'/texts/read.txt',)

        reabAbleStreamData.on('data',(buffer)=>{
            res.write(buffer)
        })
        reabAbleStreamData.on("end",()=>{
            res.end("Hello From Node.js")
        })
        reabAbleStreamData.on("error",(error)=>{
            res.statusCode(500)
            res.end("something want wrong")
        })
    }
})

server.listen(5000,()=>{
    console.log("Port Running on 5000");
})
