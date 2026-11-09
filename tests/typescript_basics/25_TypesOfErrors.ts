let a;
console.log(b);                     // Throw reference error

// =========================================================================================================

let name: string = 100;
console.log(name);                   // Throw compile-time type error but it will print the value as 100

let b: number = 100;
console.log(b.toUpperCase())         // Throw compile-time and run time type error.

function login(username: string, password: string): void {
    console.log('user logged in')
}

console.log(login('Parthiban', 82398289));

// ==========================================================================================================

let fixedArray = new Array<number>(-1);
console.log(fixedArray)                // Throw range error at run time

let sum = 1345.456;
console.log(sum.toFixed(150));         // Throw range error as argument value should be between 0 to 100

// ===========================================================================================================

functi name() {
    console.log('This is me')          // Throw syntax error
}

// ============================================================================================================