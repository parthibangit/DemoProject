import path from 'path';
import fs from 'fs';
import { test, expect } from '@playwright/test';


test('Read the file', async() => {
    const absPath = path.resolve(__dirname, '../../SameFile.txt')
    const readData = fs.readFileSync(absPath, 'utf-8');
    console.log(readData);
})

test('Write a file', async() => {
    const absPath = path.resolve(__dirname, '../../SameFile.txt')
    fs.writeFileSync(absPath, 'This is for testing', 'utf-8');
    const readData = fs.readFileSync(absPath, 'utf-8');
    console.log(readData);
})

test('Check file is exist', async() => {
    const absPath = path.resolve(__dirname, '../../SameFile.txt')
    const isFileExist = fs.existsSync(absPath);
    expect(isFileExist, `File not available in given path: ${absPath}`).toBeTruthy();
})
