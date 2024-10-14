# 0x01 es6 promises 
![visulal](./promises.png)

# notes
- Promises are used to handle asynchronous operations in JavaScript.
- it's a way for replacing some event listeners because sometimes the events might just happen before we start to listen

1. promise
operation that will complete in the future(success/failure)
return new Promise((resolve,reject)=>{
    ...
    resolve("success")
    reject("failure") // wrong
    reject(new Error("failure"))
    ...
})

it's possible to return one element of a promise, 
return Promise.reject(...)
0 - 1 // examples

