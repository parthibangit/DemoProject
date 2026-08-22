const fs = require('fs');


function readFile(): any {

    fs.readFile('SameFile.txt', (error: NodeJS.ErrnoException | null, data: Buffer) => {
        if (error instanceof Error) {
            console.error(error.message)
            return;
        }
        console.log(data.toString());
    });
}

readFile();