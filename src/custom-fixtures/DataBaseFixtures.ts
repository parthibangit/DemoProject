import {test as base} from '@playwright/test';
import {connectMsSql, PostGresSql} from '../utils/databaseUtils';

type dataBases = {

    sqlServer: connectMsSql;
    postgres: PostGresSql;
}

export const dataBaseFixtures = base.extend<dataBases>({

    sqlServer: async({}, use: (value: connectMsSql) => Promise<void>) => {

        // Act as a setup - Create a connection to mssql
        const sqlObj = new connectMsSql();

        await use(sqlObj);
    },

    postgres: async({}, use: (value: PostGresSql) => Promise<void>) => {

        // Act as a setup - Create a connection to postgres
        const psObj = new PostGresSql();

        await use(psObj);

        // Automatically runs after the test finishes
        psObj.closeTheConnection();
    },

});