let a: number = 10.256
let rounded = Math.round(a);                  // 10 => based on the nearest integer
let ceiled = Math.ceil(a);                    // 11 => always rounds up to next integer
let floored = Math.floor(a);                  // 10 => always rounds down to next integer
console.log(rounded)
console.log(ceiled)
console.log(floored)

let formatted = Number(a.toFixed(2));
let formattedOperator = +a.toFixed(2);
console.log(formatted)                        // 10.26
console.log(formattedOperator)                // 10.26

// decimal formatter
const decimalFormatter = new Intl.NumberFormat('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log(decimalFormatter.format(2500045));
