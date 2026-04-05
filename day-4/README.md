1. module.exports is used to export the functions and variables to a file to another file by default modules does not export it to prevent from MEMORY LEAKS .

2. if we need to export more than two values lets say function and varibale in module.exports we can use this syntax -> 

# module.exports = {
     var1 : var1 , 
     var 2 : var 2,
}

or 
# module.exports = {
     var1 , var 2
}
