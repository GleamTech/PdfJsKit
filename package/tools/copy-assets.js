const fs = require('fs');
const path = require('path');

const copyAssets = () => {
  const sourcePath = './dist/pdfjskit';
  const destPath = '../../public/pdfjskit';

  try {
    fs.cpSync(sourcePath, destPath, {recursive: true, preserveTimestamps: true});
    
    console.log('Successfully copied PdfJsKit assets from "' + sourcePath + '" to "' + destPath + '".');
  } catch (err) {
    console.log('Error copying PdfJsKit assets from "' + sourcePath + '" to "' + destPath + '".');
    
    throw err.message;
  }
};

copyAssets(); 