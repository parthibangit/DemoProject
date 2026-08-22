class Constructors {

    id: number;
    age: number;
    section: string;

    /* type script cannot have multiple constructore implementation but we can declare
       and single constructor implementation handles all variants */

    /* Overload signatures */
    constructor(id: number, age: number, section: string);
    constructor(id: number, age: number);

    /* Single implementation handling both overloads */
    constructor(id: number, age: number, section?: string) {
        this.id = id;
        this.age = age;
        this.section = section ?? '';
    }

    /* if class has private constructor then we cannot create object for this class from other class */
    // private constructor() {
    // };

    calculateAge(): string {
        if(this.age <= 10) {
            return `This ${this.age} years old not allowed to enroll`
        }
        else {
            return `This ${this.age} yeard old allowed to enroll`
        }
    };

};

const consObj = new Constructors(100, 10, 'Class 5');
console.log(consObj.calculateAge());