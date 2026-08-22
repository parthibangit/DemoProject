import {test as base} from '@playwright/test';
import { readJsonFile } from '../utils/fileUtils';

type testDataTypes = {
   pgIdTestData: any,
   successMsgTestData: any,
   login: any 
}

export const testData = base.extend< testDataTypes >({

    pgIdTestData: async ({}, use: (value: any) => Promise<void>) => {
        const fileName: string = 'pgId';
        const data = readJsonFile(fileName);
        await use(data);
    },

    successMsgTestData: async ({}, use: (value: any) => Promise<void>) => {
        const fileName: string = "successMessages";
        const data = readJsonFile(fileName);
        await use(data);
    }

});