
// Primitive Type Aliases
// ======================

type firstName = string;
type age = number;

const userFirstName: firstName = 'Parthiban';
const userAge: age = 29;
console.log(userFirstName);
console.log(userAge)

// ==============================================================================================================

// Object Type Aliases
// ===================

type testData = {

    pgId: number,
    rId: number,
    aucAmount?: number,
    contactAvailable: boolean,
    fetchContacts?: () => string
}

const userTestData: testData = {
    pgId: 8934349457,
    rId: 3456,
    // aucAmount: 35000,
    contactAvailable: true,
    fetchContacts: () => 'Parthiban Subburam'
}
userTestData.aucAmount = 25000;
console.log(userTestData);

// ==================================================================================================================

// union type

type userId = string | number;
type users = 'Admin' | 'Branch' | 'FA';

const id: userId = 'QA123';                // If i assign boolean value then we will face compile time error.
const user: users = 'FA';                  // If i assign as '123" then we will face compile time error.

console.log(user);
console.log(id);

// ====================================================================================================================

// Function type
// =============

type calculateTwoValues = (a:number, b:number) => number;

let sumOfTwoValues: calculateTwoValues = (a, b) => a+b;
console.log(sumOfTwoValues(10, 20));

// ====================================================================================================================

// Intersection type
// ================

type name = { 
    firstName: string, 
    lastName: string
}

type contactInfo = {
    phoneNumber: number,
}

type combinedTypes = name & contactInfo;                    // combining two types into new one

const userInfo: combinedTypes = {
    firstName: 'Parthiban',
    lastName: 'Subburam',
    phoneNumber: 9034903490
}
console.log(userInfo);

// ================================================================================================================