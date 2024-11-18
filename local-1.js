
// local module
const add = (param1,param2) =>  param1 + param2;

const a = 10

module.exports = {add,a};

// built in module

const path = require('path');

console.log(path.join("/media/amdadul/personal/Learning/Basic_JavaScript/Express/","index.js"));