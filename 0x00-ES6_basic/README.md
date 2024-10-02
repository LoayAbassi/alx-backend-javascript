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

const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Copying arr1
arr2.push(4); // Only modifies arr2

console.log(arr1); // [1, 2, 3] (unchanged)
console.log(arr2); // [1, 2, 3, 4]

### for / of loop

looping through object's element not index
for (element of object) {
...
}

### map

like dict in py

    const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
    ]);
    console.log(fruits.get("apples")); // 500

### set

set is like a list but values are unique

    const numbers = new Set([1, 2, 3, 3, 4]);
    console.log(numbers); // Output: Set { 1, 2, 3, 4 }

### classes

a template for an object

    class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    }
    const myCar1 = new Car("Ford", 2014); // object