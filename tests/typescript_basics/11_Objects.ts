
// basic operations in object

const userData: {firstName: string; age?: number; location?: string; greet: () => string} = {
    firstName: 'parthiban',
    age: 29,
    greet() {
        return `Hello, I'm ${this.firstName}`;
    }
};
var userName = userData.firstName;               // fetch the value
var userFirstName = userData['firstName'];       // fetch the value using index value
userData.firstName = "Sarathi";                  // modify the value
delete userData.age;                             // delete the value if it is optional
userData.location = 'Chennai'                    // Add new value if it is optional
console.log(userData)
console.log(userData.greet())                    // Call the method from object


// fetch elements via foreach and for (We cannot directly use foreach with objects)
// ==================================================================================================================

Object.entries(userData).forEach(([key, value]) => {
    console.log(`key is ${key} and value is ${value}`)
})

Object.keys(userData).forEach((key) => {
    console.log(`Key is ${key}`);
});

Object.values(userData).forEach((value) => {
    console.log(`value is ${value}`);
});

for (const key in userData) {
    let value = userData[key as keyof typeof userData];
    console.log(`Key is ${key} and value is ${value}`);
};

// ====================================================================================================================

// Converting objects keys into array and set
// ==========================================

// Converting an object to array
// =============================

const keys = Object.keys(userData);           // keys and values return as array
const values = Object.values(userData);
const pairs = Object.entries(userData);


// Converting as Object to Set
// ===========================
const keysSet = new Set(Object.keys(userData));
const valuesSet = new Set(Object.values(userData));
const pairsSet = new Set(Object.entries(userData));


const box = {a:10, b:20};
const square = box;                             // Both variables reference the same object
square.a = 100;                                 // Changes that shared object
console.log(box);                               // { a: 100, b: 20 }

// To create an independent shallow copy, use spread syntax:
const independentSquare = {...box};
independentSquare.a = 200;
console.log(box);                               // { a: 100, b: 20 }
console.log(independentSquare === box)          // false => because refers the different object in the memory