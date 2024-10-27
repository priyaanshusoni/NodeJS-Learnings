
//Q. What will be order of execution of this code ? 

console.log("Hello World");


var a = 1078698;
var b = 20986;

//This callback will only be pushed to call stack in v8 once the call stack is empty

setTimeout(() => {
    console.log("Call me asap");
}, 0);

setTimeout(() => {
  console.log("call me after three seconds!");  
}, 3000);

function multiplyFn(x,y){
    const result = x*y;
    return result;

}

var c = multiplyFn(a,b);

console.log("Multiplication :",c);


//1. hello world will be printed 
//2. multiply function will get into call stacl
//3. libuv offloads settimeout zero function , but call stack is not empty thre is multiply function over there .
//4. so multiply func. will execute. it will print multiply result in console.log()

//5 After this settiemeout zero will get executed but at this point call stack gets empty and now it is pushed into the call stack.

//6. then finally settimeout 3 seconds will get executed at the end.



// setTimeout(() => {
    
// }, x );

// in setTimeout after X miliseconds when the call stack is empty then n only then this settimeout will be executed . becausefirst all of the things pushed in call stack is executed synchronously.