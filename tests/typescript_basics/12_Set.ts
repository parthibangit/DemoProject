// creation
const numbers = new Set<number>([1,2,2,3]);
console.log(numbers);

// Adding elements into existing set
numbers.add(5);
numbers.add(6);
console.log(numbers);

// Checking existence
numbers.has(2);    // return true
numbers.has(8);    // return false

// remove elements
if(numbers.delete(6)) {    // return true if element existed and removed, otherwise return false
   numbers.add(7);         // Add element again at the value of 6 (indirectly modify the element)
}  
console.log(numbers);

// Clear the set
// numbers.clear();


// find the size of the set
let size = numbers.size;
console.log(size);

// Iterating the elements using for and foreach
for(let value of numbers) {
    console.log(value);
}

numbers.forEach( (value) => {
    console.log(`value is ${value}`);
});

// Convert set into array using spreading
const convertedToArray = [...numbers];
console.log('Converted array is: ', convertedToArray);

// Convert set into array using array.from()
const newArray = Array.from(numbers);
console.log('New array is: ', newArray);

// Converting to array, map the values and return as set again.
let modifiedValue = new Set<number>([...numbers].map(value => value * 10));
console.log(modifiedValue);