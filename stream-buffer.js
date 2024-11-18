const http = require('http');

const server = http.createServer();

server.on("request",(req,res)=>{
    console.log(req);
    res.end("Hello world")
})

server.listen(5000,()=>{
    console.log(`server listen port 5000`)
})
