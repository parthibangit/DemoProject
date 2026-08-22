

// Numbers are primitive values, so assigning x to y copies the value, not a reference.
let x: number = 100;
let y: number = x;
y = 150; // Changes only y; x still stores 100.
console.log(x); // 100

let name: string = 'parthiban';
let user: string = 'parthiban';
name = 'subburam'

console.log(name === user);                // false

// ==================================================================================================================


// Difference between '==' and '==='
// ================================

// == (loose equality)

var a: number = 10;
var b: number = 5;
var c: string = "5";

console.log(a == b);                      // false
// @ts-ignore
console.log(b == c);                      // true = convert the type before comparing the values

// === (Strict equality)

const firstName: string = 'parthiban';
const lastName: string = 'parthiban';
const userName: string = 'Parthiban';
console.log(firstName === lastName);       // true - both type and value matched strictly
console.log(userName === lastName);        // false - types are matching but values does not match.


// Objects stored by reference in heap memory - obj1 and obj2 point to different memory addresses
let obj1 = {name: 'Parthiban', age: 30};  // obj1 reference -> heap memory address #1
let obj2 = {name: 'Parthiban', age: 30};  // obj2 reference -> heap memory address #2

console.log(obj1 === obj2);                // false - values and types are matching but objects stored by reference(diff instance)

let obj3 = obj2;
console.log(obj3 === obj2);                // true -  values and types are matching and sharing same object in the memory

// =================================================================================================================================
