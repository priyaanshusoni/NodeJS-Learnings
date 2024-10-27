const fs = require("fs");
const https= require("https");

console.log("Hello World!");

var a = 1078698;

var b = 20986;

https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("Fethched Data Succesfully");
});

setTimeout(() => {
    console.log("setTimeout Called After 5 Seconds");
}, 5000);


//async function 
fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("File Data :", data);
})


function multiplyFn(x,y){
    const result = a*b;
    return result;
}

var c = multiplyFn(a,b);


console.log("Multiplication :",c);

// First JS engine will execute all the synchronous code 
//then fs.readfile will executed first by libuv because it will take less time amount settmeut & fetvhing an external http server
//then https data will be logged 
//at the end settimeout result will be logged 

