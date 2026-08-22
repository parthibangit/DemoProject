let firstName: string = 'Parthiban';
let lastName: string = "Subburam";

let fullName = firstName.concat(lastName);                     // concatenating two strings
let name = firstName+' '+lastName;                            
let positionChar = firstName.charAt(0);                        // return passed position character
firstName.indexOf('n');                                        // return index of given string
let isStarts = lastName.startsWith('s');                       // return false bcoz char is case sensitive
console.log(isStarts);
let isFirstNameStarts = firstName.endsWith("P");
let isAvailable = firstName.includes('Par');
console.log(isAvailable);
let firstNameLength = firstName.length;
console.log(firstNameLength);
let repeater = 'S*'.repeat(2);                                // repeat the string as give n time.
console.log('Repeater value is: ', repeater)
lastName.trim();                                               // remove the leading and trailing whitespace from a given string
lastName.trimStart();
lastName.trimEnd();
lastName.toLowerCase();                                        // convert to lowercase
lastName.toUpperCase();                                        // convert to uppercase

// split and replace the strings
// =============================

let userName: string = "Parthiban subburam...";
const splittedNames: string[] = userName.split(' ');
console.log(splittedNames);


// replace the strings using rexExp
// ================================

const replacedName = userName.replace('m', '6');               // remove by replaced char
console.log(replacedName);

let testUser: string = "Parthiban subburam @123...";

const replacedStrings = testUser.replace(/[a-zA-Z0-9 ]/g, '');   // Remove all characters and numbers and leaving special characters.
console.log(replacedStrings);

const replacedNumbers = testUser.replace(/[0-9]/g, '');         // Remove all numbers and leaving characters and special characters.
console.log(replacedNumbers);

const replacedSpecial = testUser.replace(/[^a-zA-Z0-9 ]/g, '');  // Remove all spcial characters only.
console.log(replacedSpecial);


// built-in utility types
// ======================

type names = 'parthiban' | 'sarathi' | 'tamil'
type capitalizeNames = Capitalize<names>;
type uncaptalized = Uncapitalize<names>;
type UpperCases = Uppercase<names>;
type lowerCases = Lowercase<names>;
const capitalisedNames: capitalizeNames = 'Parthiban';

// =============================================================================================================================