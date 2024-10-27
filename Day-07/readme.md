# Libuv Contribution in Sync & async Operations #


1. If i use fs.readfileSync() instead of fs.readFile , this will block the main thread and we generally don't want it to happen in large codebase , that's why always use fs.readFile ()✅

2.

# setTimeout(() => {

#          }, x ); 

 in setTimeout after X miliseconds when the call stack is empty then n only then this settimeout will be executed . because first all of the things pushed in call stack is executed synchronously.

 so if setTimeout(() => {
    console.log("Call me asap");
}, 0);
 this type of example is given still after zero seconds if there;s a thing left to be executed in call stack that thing will be executed first and after that this will be pushed into call stack & executed.