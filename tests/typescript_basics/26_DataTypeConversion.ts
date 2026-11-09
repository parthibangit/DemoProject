
// Convert number to string
// ========================

let value: number = 250;
let valueToString = value.toString();
let directString = String(value)
console.log(typeof(valueToString), valueToString);
console.log(typeof(directString), directString);


// Convert string to number
// ========================

let name: string = 'Parthiban';
let convertNumber = Number(name);
let convertedNumber = +name;
console.log(convertNumber);                                   // NaN
console.log(convertedNumber);                                 // NaN

let uniqueName: string = '123Par';
let parsedValue = parseInt(uniqueName);
let convertToNumber = Number(uniqueName);   
console.log(convertToNumber);                                  // NaN
console.log(typeof(parsedValue), parsedValue);                 // 123