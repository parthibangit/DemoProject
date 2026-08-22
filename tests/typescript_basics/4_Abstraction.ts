abstract class UserProfile {

    readonly role: string;
    subRole?: string | undefined;
    name: string;

    constructor(name: string, role: string, subRole?: string | undefined) {
        this.name = name;
        this.subRole = subRole;
        this.role = role;
    };

    protected fetchName(): string {                          // we can access only within the class and child class when we extends this class
        return this.name;
    };

    private fetchSubRole(): string | undefined {
        return this.subRole;
    };

    abstract printName(): void;                               // Must be implemented in child class
};


class ImplementAbstract extends UserProfile {

    constructor() {
        super('Parthiban', "Engineer", 'IT');
    };

    printName(): void {                                       // Implemented in child class
        console.log(this.name);
    };
};

const obj = new ImplementAbstract();
obj.printName();