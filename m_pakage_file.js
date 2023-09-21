//Module Package File

//1
const hisob = require('./hisob.js');

console.log('==============');
hisob.kopaytirish(60, 20);
console.log('==============');
hisob.ayrish(60, 20);
console.log('==============');
hisob.qoshish(60, 20);
console.log('==============');

//2
const Account = require('./account.js');

Account.tellMeAboutClass();
Account.tellMeTime();
console.log('==============');

const myAccount = new Account('Andy',1_000_000,1234567890);
myAccount.giveMeDetails();

myAccount.makeDeposit(1_000_000);

//bugatti 2.4mln usd
myAccount.withdrawMoney(2_400_000);

//ferrari 400k sud
myAccount.withdrawMoney(400_000);
myAccount.makeDeposit(200_000);