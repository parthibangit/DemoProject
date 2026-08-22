
/* basic array operation */
// =====================

let cities: string[] = ['Chennai', 'Coimbatore', 'Bangalore', 'Mumbai', 'Coimbatore'];
var secondCity = cities[1];                                       // fetch element based on index
cities.push('Kolkata');                                           // add new values at the end of existing array
cities[3] = 'Madurai';                                            // Modify the value based on index
let size = cities.length;
const isAvailable = cities.includes('Mumbai');                    // check the given value is available in the array
const firstValue = cities.shift();                                // Removes the first element from array and returns the value
const removedValue = cities.pop();                                // removed the last element from array and returns the value
let firstOccurenceIndex: number = cities.indexOf('Coimbatore');
let lastOccurenceIndex = cities.lastIndexOf('Coimbatore');

/* sort(), reverse() sorts and reverse string arrays
   it will mutates the original array and return the reference of the same array */

let sortedArray: string[] = cities.sort();                      
let reversedArray: string[] = cities.reverse();                  


/* readonly array */
// =================

let numbers: readonly number[] = [10, 20, 30, 40, 50];
// numbers[1] = 100;      cannnot add and modify the array as it is readonly
// numbers.push(70);


/* multitype values array */
// ========================

let values: (string | number | boolean)[] = ['Parthiban', 30, "sarathi", true];
const removedElement = values.splice(2, 1, false);                      // Return the element which we removed
console.log(removedElement);
console.log(values);                                                    // origin array with newly added element 'false'

/* array using constructor */
// =========================

let emptyArray = new Array<(number | string)>(20, 'Parthiban', 222);
let fixedArray = new Array<number>(5);                                 // Empty array with fixed size
let scores = new Array<number>(5, 6, 7);
let booleanValues = new Array(scores.length).fill(true);


/* tuples array */
// ==============

let userInfo:[number, string] = [30, 'Parthiban']                       // Store only fixed number of elements in predefined order.
userInfo.pop();
userInfo.push(30);


/* shallow copy */
// ==============

let lastNames: string[] = ['Subburam', 'vetri']
let copiedLastNames = [...lastNames];                                 // creates a new array as same as 'lastNames' array
copiedLastNames.push('tamil');                                        // If we add or modify, it will not affect the original array.
copiedLastNames[0] = 'Parthiban';                                    

let lastNamesObj = {name: 'Parthiban', 
                     contact: {phone: 89238, mobile: true}};         // if original array/object contains nested object, then it will mutate
let copiedLastNamesObj = {...lastNamesObj};  
console.log(copiedLastNamesObj)
copiedLastNamesObj.contact.mobile = false; 
console.log(lastNamesObj)

let array = [10, 20, 30]
let copy = array;
copy[0] = 100;
console.log(array);                                                 // it will mutate the existing array as it shares same ref obj


/* deep copy */
// ==============

let userInformation: {id: number, name: string}[] = [ 
    {id: 100, name: 'parthiban'}, 
    {id: 200, name: 'Vetri'}
];
let copiedUserInformation = structuredClone(userInformation)               // creates a new array as same as 'lastNames' array
copiedUserInformation.push({id: 300, name: 'Sarathi'});                    // new array points to new memory slot.
copiedUserInformation[0].name = 'Santhosh';                                // even if it contains nested objects, it will not mutate it

let lastNamesDeepObj = {name: 'Parthiban', 
                     contact: {phone: 89238, mobile: true}};               // even if it contains nested objects, it will not mutate it
let copiedLastNamesDeepObj = structuredClone(lastNamesDeepObj);  
console.log(copiedLastNamesDeepObj)
copiedLastNamesObj.contact.mobile = false; 
console.log(lastNamesDeepObj)