import excel from 'xlsx';

interface types {

    ID: number,
    Name: string,
    Amount: number,
    City: string,
    State: string
}

function readExcelFile(filePath: string, sheetName: string): types[] {

    // 2. Read the workbook from the file path
    const workbook = excel.readFile(filePath);

    // 3. Get the first sheet name
    // const sheetName = workbook.SheetNames[0];
    const workSheet = workbook.Sheets[sheetName];

    // 4. Convert sheet data to typed JSON objects
    const data = excel.utils.sheet_to_json<types>(workSheet);
    return data; 
}

const testData = readExcelFile('SampleTest.xlsx', 'UserInfo')
// console.log(testData);

// parse a json objects from array
const firstObject = testData[0]
const userName = testData[0].Name;


testData.forEach(value => {
    console.log(value.ID)
    console.log(value.Name)
    console.log(value.Amount)
    console.log(value.City)
    console.log(value.State)
})

testData.forEach(({ID, Name, Amount, City, State}) => {
    console.log(ID)
    console.log(Name)
    console.log(Amount)
    console.log(City)
    console.log(State)
})