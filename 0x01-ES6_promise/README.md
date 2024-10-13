# 0x01 es6 promises 
![visulal](./promises.png)

# notes
- Promises are used to handle asynchronous operations in JavaScript.
- it's a way for replacing some event listeners because sometimes the events might just happen before we start to listen

1. promise
operation that will complete in the future(success/failure)

    const promise = new Promise((resolve, reject) => {
    if (success) resolve("Done!");
    else reject("Error!");
    });

    promise.then(result => console.log(result))
        .catch(error => console.log(error));

