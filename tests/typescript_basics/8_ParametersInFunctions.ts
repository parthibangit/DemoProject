// Types of parameters in functions
// ================================

// required parameters
// ===================

function printName(firstName: string, lastName: string): string {

    return `full name is ${firstName} ${lastName}`;
}
console.log(printName('Parthiban', 'Subburam'));

// ====================================================================================================

// optional parameter
// ==================

// optional parameter should followed by one required parameter
function fetchState(city: string, capital?: string): string {

   return `City is ${city} and capital is ${capital}`;
}
console.log(fetchState('Chennai'));                 // City is Chennai and capital is undefined
console.log(fetchState('Chennai', 'Tamil Nadu'));   // City is Chennai and capital is Tamil Nadu

// ==================================================================================================================

// default parameter
// =================

function fetchCity(city: string, capital: string = 'Tamil Nadu'): string {

    return `City is '${city}' and capital is '${capital}'`;
}
console.log(fetchCity('Chennai'));                  // City is Chennai and capital is Tamil Nadu
console.log(fetchCity('Kochi', 'Kerala'));          // City is Chennai and capital is Kerala

// =====================================================================================================================

// rest parameter
// ==============

function calculateTheTotalValue(msg: string, ...numbers: number[]): number {
    
    let total: number = 0;
    numbers.forEach((value) => {    
        total +=value;
    });
    return total;
}
console.log(calculateTheTotalValue('Sum of the given numbers are: ', 10, 20, 30, 40, 50));

function findMaximumLengthWord(msg: string, ...words: string[]): string {
    
    let total: number = 0;
    let word: string = '';
    
    words.forEach((value) => {    
        if(value.length > total) {
            word = value;
            total = value.length;
        }
    });
    return word;
}
console.log(findMaximumLengthWord('Maximum length of the word is: ', 'parthiban', 'subburam', 'tamil'));

// ===========================================================================================================================