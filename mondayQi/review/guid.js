import * as fs from 'fs';
import {parse} from 'csv-parse';

const createDataBase = () => {
    const result = [];

    fs.createReadStream('C:/Users/matthew.macon/Documents/niche/workProjects/masterSheet.csv')
        .pipe(parse({columns: true, ltrim: true, delimiter:','}))    
        .on('data', (data) => result.push(data))
        .on('end', () => {
            console.log('Finished creating database')
        })
        console.log(result)
    return result; 
}

const extractGUID = () => {
    const data = createDataBase();
    console.log('data: ', data);
    const accountGUID = [];
    const keys = Object.keys(data);
    console.log(keys)
    
};
extractGUID();