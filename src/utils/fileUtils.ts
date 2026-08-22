import fs from 'fs';
import path from 'path';
import { userInfo } from '../types/testdataType';


export function readJsonFile(fileName: string): any {
  const env = process.env.ENV || 'uat';
  const filePath = path.resolve(__dirname, `../test-data/${env}/${fileName}.json`);
  const rawData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(rawData);
};

export function fetchAuthJsonFile(): string {
  const env = process.env.ENV || 'uat';
  return path.resolve(__dirname, `../test-data/${env}/auth.json`);
}

export function fetchLoginJsonFile(): userInfo[] {
  const env = process.env.ENV || 'uat';
  const filePath = path.resolve(__dirname, `../test-data/${env}/login.json`);
  const rawData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(rawData) as userInfo[];
}