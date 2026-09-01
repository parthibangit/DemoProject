import { createRecordPayloadTypes } from '../types/payloadType';
import { faker } from '@faker-js/faker';

export function createRecordPayload(overrides?: Partial<createRecordPayloadTypes>): createRecordPayloadTypes {

    return {
        data: {
            name: faker.commerce.productName(),
            price: Number(faker.finance.amount({ min: 50, max: 100 })),
            category: faker.commerce.department(),
            in_stock: true,
            ...overrides,                // Allows overriding specific fields per test
        }
    };
}