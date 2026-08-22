// core functions with return type
// ==============================

function fetchFullName(firstName: string, lastName: string): string {    // return as string

    return firstName+' '+lastName;
};
console.log(fetchFullName('Parthiban', 'Subburam'));

function sum(a: number, b: number): number {                            // return as number

    return a+b;
};
console.log(sum(10, 20));

function printName(firstName: string, lastName: string): void {        // return void

    console.log(firstName+' '+lastName);
};
printName('Parthiban', 'subburam');

function throwErrorMsg(errorMsg: string): never {                       // use never to throw error which never finish running
     // console.log(`Function is not working because of ${errorMsg}`);
     throw new Error(errorMsg);
}
// throwErrorMsg('Button is not enabled...')

function anyReturnType(): any {                       // Totaly diable the type safety
                                                      // can access any property but it will not show compile time error
    return { 
        name: 'Sarathi', 
        age: 30
    };
};

const ref = anyReturnType();
console.log(ref.name);
console.log(ref.fetchNames());                         // At runtime, it will show the error.


// ============================================================================================================================

// Arrow functions

 // If the function perform only one operation, we can omit curly branch and return keyword

const prepareScore = (initialScore: number, finalScore: number): number => initialScore + finalScore;
console.log(prepareScore(35, 45));

const singleParameter = (fullName: string): void => console.log('Full name is:', fullName);
singleParameter('Parthiban Subburam');

const getFullName = (firstName: string, lastName: string): string => {

    let fullName = firstName +' '+ lastName;
    return fullName;
};
console.log(getFullName('Parthiban', 'Subburam'));
