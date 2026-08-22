class MethodOverloading {

    // Multiple method signatures
    fecthCapital(cityName: string): string;
    fecthCapital(cityName: string, stateName?: string): string;

    // Implementation of those multiple signatures to achieve method overloading
    fecthCapital(cityName: string, stateName?:string): string {
          if(stateName == undefined) {
             return `Capital name is ${cityName}`
          }
          else {
            return `capital is part of ${cityName} and ${stateName}`
          }
    };

    /* we can overload the static methods but difference is passing parameters */
    static findAge(age: number): number;
    static findAge(age: number, ages?: number[]): number[];

    static findAge(age: number, ages?: number[]): number | number[] {
       if(ages === undefined) {
           return age;
       }
       else {
         return ages;
       }
    }

}

const methodOverloading = new MethodOverloading();
console.log(methodOverloading.fecthCapital('Chennai', 'Tamil Nadu'));


/* overriding conept */
// ====================

class MethodOverriding {

    fetchFullName(userName: string): string {
        return `user full name is ${userName}`
    }

    static printname(name: string): void {
        console.log('user name is: ', name)
    }

}

class ChildClass extends MethodOverriding {

    override fetchFullName(userName: string): string {
        return `user name is ${userName}`
    }

    // redefining or shadowing the parent class static method.
    static printname(name: string): void {
        console.log('Branch user name is: ', name)
    } 
}

const obj = new ChildClass();
console.log(obj.fetchFullName('parthiban'))
console.log(obj.fetchFullName('Sarathi'))
ChildClass.printname('Sarathi');