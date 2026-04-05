// require("./require1")


// console.log("Hello From Main File");


/* 2nd Part */ 


// const {max} = require("./require1")
// const {min} = require("./require1")

// console.log(max(6,7));
// console.log(min(6,7));


/* 3rd Part*/

const {max} = require("./exports/export")
const {min} = require("./exports/export");

console.log(max(6,7));
console.log(min(6,7));

