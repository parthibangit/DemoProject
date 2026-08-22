
// slicing
// ========

let firstNames: string[] = ['Parthiban', 'Sarathi', 'Tamil', 'Santhosh', 'Prasanna', 'Natraj'];

let slicedArray = firstNames.slice(0, 2);                                // extract from 0 till 1 index and 2 excluded.
let safeCopy = firstNames.slice();
console.log('safe copies are: ', safeCopy);
console.log('Sliced arrays are: ', slicedArray);
console.log('Original array values are:', firstNames);                   // Original array has not modifed.

// ============================================================================================================

// splicing
// ========

let lastNames: string[] = ['Subburam', 'Subburam', 'Arasan', 'Kumar', 'lekkala', 'Kannan'];

let splicedArray = lastNames.splice(1, 2, 'Vetri');                     // return the removed values.
console.log(splicedArray);           
console.log(lastNames);                                                 // original array has modified with newly added.

// ============================================================================================================

// filter, map, reduce, some, and every
// ===================================

let numbers: number[] = [10, 20, 30, 40, 50];
let scores: number[] = [100, 200, 300, 400, 500]

let filteredArray = numbers.filter(value => value >= 30);
console.log(filteredArray);

let mappedValue: number[] = numbers.map(value => value * 10);
console.log(mappedValue);

var totalValue: number = numbers.reduce((sum, value) => sum + value, 0);
console.log('Total values are: ', totalValue);

var isAnyValueMatches = numbers.some(value => value === 30);             // Check if any value matches with given condition and returns true
console.log(`Is any values matched: ${isAnyValueMatches}`);

var isEveryValueMatches = scores.every(value => value % 100 === 0);      // Check if every value is divisible by 100 and returns true if all match
console.log(`Are all values divisible by 100? ${isEveryValueMatches}`);

// ============================================================================================================

// Filtering complex objects in array of objects
// ============================================

interface Product {
  id: string;
  name: string;
  price: number;
  in_stock: boolean;
  category: string
};

const productArrayObjects: Product[] = [                                // array of objects
  { id: "p1", name: "Samsung Mobile", price: 250, category: 'Electronics', in_stock: true },
  { id: "p2", name: "Laptop", price: 800, in_stock: false, category: 'Electronics' },
  { id: "p3", name: "Scooty Cover", price: 350, in_stock: true, category: 'Household' }
];

const productObjectsUnder300: Product[] = productArrayObjects
  .filter(product => product.in_stock && product.price < 300);
console.log(productObjectsUnder300);

const productsUnder300: string[] = productArrayObjects
  .filter(product => product.category === 'Electronics' && product.in_stock && product.price < 300)
  .map(product => product.name);
console.log(productsUnder300);

// =================================================================================================================

// for each (only perform the action and not returns any data)
// ===========================================================

// Type Inference: TypeScript automatically detects the type based on the initial elements.

const fruits = ['apple', 'banana', 'guava', 'grapes'];
fruits.forEach((fruit, index) => {
    console.log(`index of '${fruit}' is ${index}`)
});
console.log(typeof(fruits));

var marks: number[] = [1, 2, 3, 8, 10, 15, 17, 7, 9];
let totalmarks: number = 0;
marks.forEach(price => {
    totalmarks += price;
});
console.log('Total marks are: ', totalmarks);
console.log(typeof(totalmarks));
