function reverseString(value: string): string {

    let revString = "";
    let size = value.length - 1;

    for (let i = size; i >= 0; i--) {
        revString += value.charAt(i);
    }
    return revString;
}
console.log('Reversed string is:', reverseString('Parthiban'))

// ==========================================================================================================================

function countTheMaxCharOccurence(value: string): string {

    // let insertValues = new Map<string, number>();
    // let size = value.length-1;
    let maxOccurChar = '';
    let occur = 0;

    // for(let i=0; i<=size; i++) {

    //     if(insertValues.has(value.charAt(i))) {
    //         // @ts-ignore
    //         insertValues.set(value.charAt(i), insertValues.get(value.charAt(i))+1);
    //     }
    //     else {
    //         insertValues.set(value.charAt(i), 1);
    //     }
    // }

    // for(let [key, value] of insertValues) {

    //     if(value > occur) {
    //        maxOccurChar = key;
    //        occur = value;
    //     }
    // }

    // return maxOccurChar;

    const mapValues: Record<string, number> = {};

    for (let char of value) {
        mapValues[char] = (mapValues[char] || 0) + 1;
    }

    Object.entries(mapValues).forEach(([key, value]) => {

        if (value > occur) {
            maxOccurChar = key;
            occur = value;
        }
    });

    return maxOccurChar;
}
console.log('Maximum Occurence char is:', countTheMaxCharOccurence('Parthiban'));

// ==========================================================================================================================

function findSmallestNumber(array: number[]): number {

    let min = array[0];

    for (let i = 1; i < array.length; i++) {

        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
console.log('Smallest number in given array is: ', findSmallestNumber([4, 7, 2, 8, 9, 1, 10]))

// ==========================================================================================================================

function findSecondLargestNumber(numbers: number[]): number {

    let sortedArray = numbers.sort();
    return sortedArray[numbers.length - 1]
}
console.log('Second largest value in given array is: ', findSecondLargestNumber([4, 7, 2, 8, 9, 1, 10]))

// ==========================================================================================================================

type Products = {
    id: string,
    productName: string,
    price: number,
    category: string,
    in_stock: boolean
}

function filterTheValue(productName: string, products: Products[]): any[] {

    return products.filter(product => product.productName.includes(productName) && product.in_stock === true)
        .map(product => ({ productName: product.productName, price: product.price }));  // return the particular values from matching object
    // .map(product =>product);                                                   // return whole product information
};

const productArrayObjects: Products[] = [
    { id: "p1", productName: "Samsung Mobile", price: 250, category: 'Electronics', in_stock: true },
    { id: "p2", productName: "Laptop", price: 800, in_stock: false, category: 'Electronics' },
    { id: "p3", productName: "Samsung Cover", price: 350, in_stock: true, category: 'Household' }
];
console.log('Available product details are: ', filterTheValue('Samsung', productArrayObjects))

// ==========================================================================================================================

function removeDuplicateValues(...values: string[]): Set<string> {

    // let uniqueValues = [...new Set(array)];
    let uniqueValues = new Set(values)
    return uniqueValues;
};
console.log('Array after removing the duplicates: ', removeDuplicateValues('a', 'b', 'a', 'c', 'e'));

// ===========================================================================================================================

function removeDuplicateValuesFromString(value: string): string {

    return [...new Set(value)].join('')

};
console.log('Array after removing the duplicates: ', removeDuplicateValuesFromString('Parthiban'));

// ===========================================================================================================================
// input - selenium;     output -> s*l**nium

function transformTheValue(value: string): string {
    const removeChar = 'e';
    const updateChar = '*';
    let occurrenceCount = 0;

    return value.split('')
        .map((char) => {
            if (char === removeChar) {
                occurrenceCount++;
                return updateChar.repeat(occurrenceCount);
            }
            return char;
        })
        .join('');
}
console.log('Tranformed value is: ', transformTheValue('selenium'))

// ===========================================================================================================================

// Prime number - Divisible by 1 and number itself

function isPrimeNumber(value: number): [boolean, number[]] {

    const primeNumbers: number[] = [];

    if (value <= 1) return [false, primeNumbers];
    if (value === 2) return [true, [2]];
    if (value % 2 === 0) return [false, primeNumbers];

    for (let i = 3; i < value; i += 2) {
        if (value % i === 0) return [false, primeNumbers];
        primeNumbers.push(i);
    }
    return [true, primeNumbers];
}
const [isPrime, checkedNumbers] = isPrimeNumber(13);
console.log('Following number is prime?', isPrime, checkedNumbers);
console.log('Following number is prime?', isPrimeNumber(10))

// ============================================================================================================================

function isNumberPalindrome(value: number): number {

    const reversedValue = value.toString().split('').reverse().join('');
    return parseInt(reversedValue) * Math.sign(value);                     // Math.sign() keeps the negative signs
}
console.log('Reversed number is?', isNumberPalindrome(-250))

// =============================================================================================================================

function isArmStrongNumber(value: number): boolean {
    let sum = 0;
    let temp = value;

    while (value > 0) {

        let lastDigit = value % 10
        sum = sum + lastDigit * lastDigit * lastDigit
        value = Math.floor(value / 10)
    }
    return sum === temp;
}
console.log('is following number is armstrong?', isArmStrongNumber(120))

// =============================================================================================================================

function factorial(value: number): number {

    if (value <= 0) return 0;

    let sum: number = 1;

    for (let i = value; i > 0; i--) {
        // sum *= i;
        sum = sum * i;
    }
    return sum;
}
console.log('Factorial value is: ', factorial(5))

// =============================================================================================================================

function checkIfElementPresentInArray(values: (string | number)[], checkValue: (string | number)): boolean {

    //    return values.includes(checkValue);
    return values.filter(value => value === checkValue).length > 0;
}
console.log('Is element present in array: ', checkIfElementPresentInArray(['a', 'b', 'c'], 'd'));

// =============================================================================================================================

function reverseAWordsInSentence(sentence: string): string {

    return sentence.split(' ').map(word => {
        return word.split('').reverse().join('');
    }).join(' ');
}

console.log('Reverse a sentence: ', reverseAWordsInSentence('This is Parthiban subburam'));

// ================================================================================================================================

function convertToCamelCase(value: string): string {

    return value.split(' ')
        .map(word => {
            if (word.charAt(0) === word.charAt(0).toUpperCase()) return word;
            return word.substring(0, 1).toUpperCase().concat(word.substring(1))
        })
        .join(' ')
};
console.log('Converted to camel case value is: ', convertToCamelCase('this is Parthiban subburam ...'));

// ================================================================================================================================

function compareTwoArrayToFindSameElements(array1: number[], array2: number[]): number[] {

    // return array1.filter(value => array2.includes(value));
    const values = new Set<number>(array2);
    return array1.filter(value => values.has(value));

}
console.log('Same elements in both arrays are: ', compareTwoArrayToFindSameElements([10, 7, 6, 2, 4], [2, 4, 5, 2, 10]));

// ===============================================================================================================================

function frequencyOfChar(value: string, checkChar: string): number {

    // return value.split('').filter(char => char.includes(checkChar)).length;
    let count: number = 0;

    for(let char of value) {
        if(char === checkChar) {
            count++;
        }
    }
    return count;

}
console.log('Given char occured in: ', frequencyOfChar('Parthiban', 'a'))

// ===============================================================================================================================

function reverseAParticularWordFromSentence(sentence: string, reverseWord: string): string {

   return sentence.split(' ').map(value => {
       if(value === reverseWord) return value.split('').reverse().join('');
       return value;
   }).join(' ')

}
console.log('Result after reverse a particular word from sentence: ', reverseAParticularWordFromSentence('I am software tester', 'am'));

// ===============================================================================================================================

function reverseAWordsFromSentenceWithSpecialChar(sentence: string): string {

   return sentence.split('#').map(value => {
       if(value.length == 1) return value;
       return value.split('').reverse().join('');
   }).reverse().join(' ')

}
console.log('Result after reverse a particular word with special char: ', reverseAWordsFromSentenceWithSpecialChar('I#am#software#tester'));

// ===============================================================================================================================
