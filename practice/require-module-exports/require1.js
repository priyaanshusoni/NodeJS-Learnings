// console.log("Hello From Other FIle");


function max(a,b){
    if(a>b){
        return a
    }
    else{
        return b;
    }

}

function min(a,b){
    if(a<b){
        return a;
    } else{
        return b;
    }
}


module.exports = {
    max,
     min
};

