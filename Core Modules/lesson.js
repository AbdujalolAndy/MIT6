//Module Package Core 
const fs = require('fs');

//SYNC FILE READER
const file=fs.readFileSync('./input.txt',"utf8");
console.log('File',file);
console.log('*************************');


// SYNC FILE WRITER
fs.writeFileSync('./input.txt',`${file} \n\t\t BekzodAli`);
const new_file=fs.readFileSync('./input.txt',"utf8");
console.log('File',new_file);
console.log('*************************');
