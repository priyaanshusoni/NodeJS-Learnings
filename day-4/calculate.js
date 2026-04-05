console.log("Calculate sum is Executed");
var f  = 45;
function calculatesum( a ,b ){
     console.log(a+b);
}

// in order to use this function from a different file I have to explicitly export it to the world or other files 
// that's why i have to export it explicitly  because , 
// modules protects their variables and functions from leaking


module.exports = {
    f,calculatesum
};
