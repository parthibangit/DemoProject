import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
import zod from 'zod';
import { FunctionTool } from '@google/adk';

dotenv.config({ path: path.resolve(__dirname, '.env') });


// 1. Define the parameters for the report reading tool using zod
const fileLocation = zod.object({

    filePath: zod.string().describe('Local file path where we can find the test report after test run...')
})


// 2. Build a custom tool to expose files safely to the LLM agent
export const analyze_allure_report = new FunctionTool({
  name: 'read_allure_report',
  description: 'Read and retrieve the content of allure report',
  parameters: fileLocation,
  execute: async ( {filePath}) => {
    try {
      if(!fs.existsSync(filePath)) {
        return { error : `File not found at: ${filePath}` }
      }
      const data = fs.readFileSync(filePath, 'utf-8');
      return { content: data }
    }
    catch (error: any) {
      return { error: `Failed to read a file: ${error.stack}`}
    }
  }
});