import {removeDuplicates} from './gatherIDs.js';
import fs from 'fs-extra';

const drivePathName = 'S:/Omid/PREMIUM - COLLEGE SECURE URL/2 Colleges sent direct Files/';

const formatDate = () => {
    const curr = new Date; // get current date
    const first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
    const monday = new Date(curr.setDate(first));
    const monthFormatted = monday.getMonth() + 1 < 10 ? '0' + (monday.getMonth() + 1): monday.getMonth() + 1;
    const dayFormatted = monday.getDate() < 10 ? '0' + monday.getDate(): monday.getDate();

    const formattedDate = monthFormatted + '_' + dayFormatted + '_' + monday.getFullYear();

    return formattedDate;
}

const getFilesToDelete = () => {
    const date = formatDate();
    console.log(`Monday's Date: ${date}`);
    const filesToDelete = [];
    const uniqueID = removeDuplicates();

    // let files = fs.readdirSync('C:/Users/matthew.macon/Documents/niche/workProjects/testFolder/' + formattedDate);
    let files = fs.readdirSync(drivePathName + date);

    files.forEach(file => {
        let isFileFound = false;

        uniqueID.forEach(id => {
            if(file === id) { 
                isFileFound = true;
            }
        });

        if (!isFileFound) {
            filesToDelete.push(file);
        }

        isFileFound = false;
    });

    return filesToDelete;
}

export function deleteFolders() {
    const date = formatDate();
    const fileNames = getFilesToDelete();

    if(fileNames.length === 0){
        console.log('No files to delete.');
        console.log('Script has finished running.');
        return;
    }

    for(let file of fileNames) {
        // fs.remove('C:/Users/matthew.macon/Documents/niche/workProjects/testFolder/' + formattedDate + '/' + file);
        fs.remove(drivePathName + date + '/' + file);
    }
    console.log(`Removed: ${fileNames}`);
    console.log(`Script has finished.`);
};