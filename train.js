// B-Task: Shunday function tuzing, u 1ta parametr ega bolsin,
//hamda osha stringda qatnashgan raqamlarni sonini return qilsin.
//Masalan: getDigits("ag1aw5g6") return qilsin 3

function getDigits(text='ag1aw5g6'){
    return text.split('')
        .filter((a)=>{if(parseInt(a)/1) return a})
        .length;
}

console.log(getDigits());