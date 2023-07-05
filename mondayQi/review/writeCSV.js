import {appendFileSync} from 'fs';

let executed = false;
class School {
    constructor(schoolName = '', schoolId = '') {
        this.schoolName = schoolName;
        this.schoolId = schoolId;
    }
    saveAsCSV() {
        const header = `Account Name, Account: GUID\n`;
        const data = `${this.schoolName}, ${this.schoolId}\n`;

        if(!executed){
            appendFileSync('C:/Users/matthew.macon/Documents/testFolder/testCSV.csv', header); 
            executed = true;
        }
        appendFileSync('C:/Users/matthew.macon/Documents/testFolder/testCSV.csv', data); 
    }
};

const startScript = () => {
    const school1 = new School('Matt University', '2573');
    school1.saveAsCSV();
    const school2 = new School('John University', '1873');
    school2.saveAsCSV();
}
startScript();
