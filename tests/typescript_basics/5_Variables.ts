
// using 'let'

let firstName: string = "Parthiban";
let lastName: string = 'Subburam';

// let firstName: string = 'Sarathi';      we cannot redeclare

firstName = 'sarathi';                     // we can reassign the value
console.log(`First name is ${firstName}`);

// ================================================================================================================

// using 'var'
// ==========

var initialScore: number = 78;     
var initialScore: number = 80;              // we can redeclare
var finalScore: number = 100;

finalScore = 150;                           // we can reassign the value

console.log('Initial score is', initialScore);

// ===================================================================================================================

// using 'const'
// ============
const company: string = 'EPAM';

// const company: string = 'Google';         we cannot redeclare
// company = 'Facebook';                     we cannot reassign the value