//Creating File Module

const hisob = {};

hisob.kopaytirish = (a,b)=>{
    console.log(`Natijasi: `, a*b);
}

hisob.ayrish = (a,b)=>{
    console.log(`Natijasi: `, a-b);
}

hisob.qoshish = (a,b)=>{
    console.log(`Natijasi: `, a+b);
}

module.exports = hisob;
