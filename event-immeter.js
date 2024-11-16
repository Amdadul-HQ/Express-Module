const EventEmiter = require('events');

const myEvent = new EventEmiter()

myEvent.on("birthday",(name,)=>{
    console.log(`Happy BirthDay To you ${name}`);
})

myEvent.on("birthday",(gift)=>{
    console.log(`I will send a gift ${gift}`);
})

myEvent.emit("birthday","amdadul","gori")