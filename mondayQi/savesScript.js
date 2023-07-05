import {deleteFolders} from './supportScripts/deleteFolders.js';

const savesScript = () => {
    console.log(`Running Script for Monday Saves.`);
    deleteFolders();
}
savesScript();