# 0x00 es6 basics directory

### block scoping

    anything inside block wth let/const is only valid inside that block
    with var it's valid outside

    if (true) {
        let x = 10;      // Block scope
        const z = 30;    // Block scope
        var y = 20;      // Function scope
    }

    console.log(y);  // 20 (accessible)
    console.log(x);  // ReferenceError: x is not defined
    console.log(z);  // ReferenceError: z is not defined

### destructiong

Destructuring in JavaScript allows you to unpack values from arrays or properties from objects into distinct variables.
const [a, b] = [1, 2]; // Array destructuring
const {name, age} = {name: 'John', age: 30}; // Object destructuring

### spread operator
