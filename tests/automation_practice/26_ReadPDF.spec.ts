import fs from 'fs';
import pdf from 'pdf-parse';
import { test, expect } from '@playwright/test'

test('Read a pdf file', async() => {

    const dataBuffer = fs.readFileSync('./July_2026_Wifi_Bill.pdf');
    const parser = new pdf.PDFParse({ data: dataBuffer });
    const data = await parser.getText();

    // console.log(data.pages);
    console.log('Text from PDF: ', data.getPageText(1));
    console.log('\n================================\n')
    // console.log('Content of pdf: ', data.text);
    console.log('Total number of pages: ', data.total);

    await parser.destroy();
})

test('Compare two pdf file', async() => {

    const dataBuffer = fs.readFileSync('./July_2026_Wifi_Bill.pdf');
    const parser = new pdf.PDFParse({ data: dataBuffer });
    const data = await parser.getText();

    const dataBuffer2 = fs.readFileSync('./July_2026_Wifi_Bill.pdf');
    const parser2 = new pdf.PDFParse({ data: dataBuffer2 });
    const data2 = await parser2.getText();
 
    expect(data.text, 'PDF content not matched...').toBe(data2.text)
    expect(data.total, 'PDF page total not matched...').toBe(data2.total)

    await parser.destroy();
})

test('Verify the value in PDF file', async() => {

    const dataBuffer = fs.readFileSync('./July_2026_Wifi_Bill.pdf');
    const parser = new pdf.PDFParse({ data: dataBuffer });
    const data = await parser.getText();

    expect(data.text, 'PDF content not matched...').toContain('Email: sarathipartha04@gmail.com')

    await parser.destroy();
})