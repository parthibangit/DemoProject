import mssql, { ConnectionPool, IRecordSet } from 'mssql';
import { Pool, PoolConfig } from 'pg';


// Configuration object for SQL Server connection
const configuration: mssql.config = {
    server: process.env.DB_SERVER || 'localhost', 
    database: process.env.DB_NAME || 'YourDatabaseName',
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASSWORD || 'YourStrongPassword',
    port: parseInt(process.env.DB_PORT || '1433'),
    options: {
        encrypt: true, // Use true if connecting to Azure SQL
        trustServerCertificate: true // Change to false for production environments
    }
};

// Configuration object for PostGres database connection
const pgConfig: PoolConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 5432
};


/**
 * Executes a single SQL query and returns the recordset rows.
 * Handles opening and closing the connection pool automatically.
 */

export class connectMsSql {

    private connection!: ConnectionPool;

    private async executeQuery(sqlQuery: string): Promise<any[]> {
        try {
            this.connection = await mssql.connect(configuration);
            const result = await this.connection.request().query(sqlQuery);
            return result.recordset || [];
        }
        catch (error) {
            console.error((error as Error).stack);
            throw error;  
        }
        finally {
            if (this.connection) {
                await this.connection.close();
            }
        }
    };

    async getRowsValues(sqlQuery: string): Promise<any[]> {
        return await this.executeQuery(sqlQuery);
    };

    /**
     * Execute a query and return values of a specific column from all rows.
     * Example: await instance.getColumnValues('SELECT id, name FROM users', 'name')
     */
    async getColumnValues(sqlQuery: string, columnName: string): Promise<any[]> {
        const rows = await this.executeQuery(sqlQuery);
        return rows.map((row: any) => row[columnName]);
    };

};


export class PostGresSql {
    
    private pool: Pool;

    constructor() {
        this.pool = new Pool(pgConfig);
    };

    async queryTheSql(sqlQuery: string): Promise<any> {

        try {
            const connection = await this.pool.connect();
            const records = await connection.query(sqlQuery);
            records.rows;
        }
        catch(error) {
            console.error((error as Error).message);
            throw error;
        }
    };

    async closeTheConnection() {
        await this.pool.end();
    };

}