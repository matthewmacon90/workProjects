//Create a file importing two CSV files and comparing columns.
import * as fs from 'fs';
import { parse } from 'csv-parse';

// const {parse} = require('csv-parse');

const compareCSV = (file1, file2) => {
    const finalData = [];
    
    fs.createReadStream("C:/Users/matthew.macon/Documents/testFolder/data/report1684258963321.csv")
        .pipe(parse(['Name', 'Age']))
        .on('data',(data) => finalData.push(data))
        .on('end', () => {
            console.log('finalData: ', finalData);
        });
    // console.log('readData: ', readData)
}
compareCSV();

