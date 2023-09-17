// C-Task: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin.

// MASALAN checkSimilarity("laep", "apple") true return qiladi.

function checkSimilarity(text,word){
    let index=0;
    while(index<word.length){
        if(!word.includes(text[index]))return false
        index++;
    }
    return true;
}

const result=checkSimilarity("alepp", "apple");
console.log("Can the text be similar to word:", result);