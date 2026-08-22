class Child {

    /* Accessible from anywhere - No need to type it explicitly. */
    public firstName: string;  

    /* Accessible only within the class */                       
    private age: number = 0; 

    /* public property */                        
    lastName: string;
    
    /* can access only within the class and child classes */                                
    protected career: string = 'Engineer';

    /* can call only inside the static function */            
    static location: string = 'Chennai';  

    /* If property has readonly access modifier, then we cannot redeclare or reasign value outside the constructor*/
    readonly native: string;            


    constructor(firstName: string, lastName: string, native: string, career?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.career = career ?? this.career;
        this.native = native;
    };

    set setAge(age: number) {
        this.age = age;
    };

    /* no need use () when calling this get function */
    get getAge() {
        return this.age;
    };

    static findLocation = (): string => this.location;

    protected fetchCareer = (): string => this.career;

    fetchFullName(): string {
        return `Full name is ${this.firstName} ${this.lastName} and career is ${this.fetchCareer()}`
    }

    fetchNative(): string {
        /* readonly property cannot be reassigned */
        // this.native = 'Chennai';
        return this.native;
    }

};

const childObj = new Child('Parthiban', 'Subburam', 'Pannaipuram');
childObj.setAge = 30;
console.log(childObj.fetchFullName());
console.log(childObj.getAge);
console.log(Child.findLocation())

