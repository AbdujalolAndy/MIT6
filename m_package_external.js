//Module Package External

//1 Moment
const moment = require('moment');
setInterval(() => {
    const time = moment().format();
    console.log(`Hozirda vaqt ${time}`);
}, 5000);
//2 Inquirer
console.log("*****************");
const inquirer = require('inquirer');
inquirer
    .prompt([{type:'input', name:'raqam', message:'Raqam Kiriting:'}])
    .then((answer)=>console.log(`Kiritilgan raqam:${answer.raqam}`))
    .catch((err)=>console.log(err.message));

console.log("*****************");

//3 Validator 
console.log("*****************");

const validator = require('validator');
let test = validator.isEmail('abdu@jalol.com');
console.log('Test:', test);

console.log("*****************");
test = validator.isInt("100");
console.log('Test:', test);

console.log("*****************");
test= validator.isIP("118.235.3.168");
console.log("Test:", test);
console.log("*****************");

//uuid
const {v4:uuidv4} = require('uuid');
const randomStr = uuidv4();
console.log(`uuid creates Random String ${randomStr}`);
console.log("*****************");

//chalk
const chalk = require('chalk');
const log = console.log;
log(chalk.green("Hello ") + "World" + chalk.red(" !"));
console.log("*****************");
log(chalk.red(`uuid creates Random String ${randomStr}`));

