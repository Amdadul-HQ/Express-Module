const eventsEmitter = require('events');

// lister

const myEmitter = new eventsEmitter();

myEmitter.on("birthday",()=>{
    console.log("happly birthday to you");
})

myEmitter.on("birthday",(gift)=>{
    console.log(`i will send a ${gift}`);
})

myEmitter.emit("birthday","watch")