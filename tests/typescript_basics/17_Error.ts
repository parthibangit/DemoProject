
class CustomError extends Error {

    constructor(message: string) {
        super(message);
    }

};

class CheckError {

    age: number = 10;

    checkAge(): void {
    if(this.age < 15) {
       throw new CustomError('Age is not matched...'); 
      }
    };
};



// using if conditions
// ======================
const checkError = new CheckError();
try {
  checkError.checkAge()  
//   throw new Error('This method has a problem')
}

catch (error) {                           // If the error is unknown use conditions to check the type for safe
    if(error instanceof CustomError) {
        console.error(error.message);     // Result - This method has a problem
        console.error(error.stack);       // Print entrie error message with lines
    }
    else {
        console.error(String(error));     // Result - Error: This method has a problem
    }
}


// using in-line type casting
// ==========================

try {
  throw new Error('This method has a problem')
}

catch (error) {                                   // If the error is unknows use conditions to check the type for safe

    console.error((error as Error).message);      // Result - This method has a problem
    console.error((error as Error).stack);        // Print entrie error message with lines
}

finally {
    console.log('This block run always regardless of error thrown or not');
}