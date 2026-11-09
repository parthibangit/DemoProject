import {expect, mergeTests} from '@playwright/test';
// import { pageClasses } from './PageFixtures.ts';
// import { testData } from './TestDataFixtures.ts';
// import { apiFixtures } from './ApiFixtures.ts';
// import { dataBaseFixtures } from './DataBaseFixtures.ts';
import { pageClasses, testData, apiFixtures, dataBaseFixtures, overlayFixtures } from './IndexFixtures.ts';

export const test = mergeTests(pageClasses, testData, apiFixtures, dataBaseFixtures, overlayFixtures);

export { expect };