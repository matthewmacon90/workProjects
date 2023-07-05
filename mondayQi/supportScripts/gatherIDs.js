import fs from 'fs-extra';
const gatherID = () => {
    const dataArray = fs.readdirSync('S:/Omid/PREMIUM - COLLEGE SECURE URL/2 Colleges sent direct Files/06_26_2023');
    return dataArray;
}

export function removeDuplicates() {
    const duplicatesArray = gatherID();
    const removeDup = [... new Set(duplicatesArray)];
    return removeDup;
}