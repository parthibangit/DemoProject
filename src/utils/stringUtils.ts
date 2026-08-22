import { faker } from '@faker-js/faker';

export class StringUtils {

    static firstName(): string {
       return faker.person.firstName();
    };

    static lastName(): string {
       return faker.person.lastName();
    };

    static fullName = (): string =>  faker.person.fullName();

};

