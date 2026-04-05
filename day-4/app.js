// require("./filetoImport");


// const {f,calculatesum} = require("./calculate");  //destructuring 

console.log("app.js");

// import { calculatemul } from "./mjsModule.js";

// const calculatemultiply = require("./calculate/multiply.js")

// node if i run my app.js it will also execute code of required fil !

// modules protects their variables and functions from leaking 

// calculatesum(10,20); // now it works fine 

// calculatemul(3,4);


const {calculatemultiply , dividenum} = require("./calculate/index");






calculatemultiply(5,4);

dividenum(10,5);


