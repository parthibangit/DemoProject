interface basics {

   /* Interface is used to define the shape of the object. */

   /* i) we can have only method declaration.
      ii) We cannot use private or protected access modifier
      iii) We cannot have constructors
      iv) A single class can implement multiple interface by comma separated.
      v) Use extends keyword when extend the interface to another interface. */

    readonly role: string;
    subRole?: string;
    name: string;
    printName(): void;
    fetchName(): string;
};

/* it will ask to implement all the object from interface */
// const user: basics = {
//     role: 'Engineer',
//     name: 'Parthiban'
// };


class ImplementInterface implements basics {

    role: string = 'Engineer';
    subRole?: string;
    name: string;
    
    constructor(name: string, subRole?: string) {
        this.name = name;
        this.subRole = subRole;
    };

    printName(): void {
        console.log('Print name method has implemented');
    };

    fetchName(): string {
        return `Name is ${this.name}`
    };
};

const obj = new ImplementInterface('Parthiban');
console.log(obj.fetchName());