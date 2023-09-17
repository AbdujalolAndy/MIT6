//Creating File Module
const moment = require('moment')

class Account{
    #amount;
    #account_id;

    constructor(name, amount, account_id){
        this.name = name;
        this.#amount  = amount;
        this.#account_id = account_id;
    }

    tellMeBalance(){
        console.log(`Sizning hisobingizda qoldiq: ${this.#amount}`);
        return this.#amount;
    }

    withdrawMoney(money){
        if(this.#amount>=money){
            this.#amount-=money;
            console.log(`Hisobingizda $${money} yechild va qoldi ${this.#amount}`)
        }else{
            console.log('Hisobingizda yetarli mablag\' yo\'q')
        }
    }

    makeDeposit(money){
        this.#amount+=money;
        console.log(`Hisobingiz to'ldirildi! Hisobingiz $${this.#amount} tashkil etadi`)
    }

    giveMeDetails(){
        console.log(
            `Salom hurmatli ${this.name} sizning hisobingiz ${this.#amount} ga teng.`
        );
        console.log(
            `Va hisob raqamingiz ${this.#account_id}`
        );
    }

    static tellMeAboutClass(){
        console.log("Bu class accountlarni yasash uchun xizmat qiladi")
    }

    static tellMeTime(){
        console.log(`Hozirgi vaqt ${moment().format("YYYY MM DD HH:mm")} `)
    }
}

module.exports=Account