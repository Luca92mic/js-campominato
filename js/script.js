var numeriPc = [];

while(numeriPc.length < 16){
    var numeriRandom = numRandom(1, 100);
    if(!numeriPc.includes(numRandom)) //numeri non duplicati
    {
        numeriPc.push(numRandom);
    }
}

console.log(numeriPc);

//chiedere all'utente (100-16) volte di inserire un numero alla volta sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.

var arrayUser = [];

//! modificare 20 con 100 alla fine
while(arrayUser.length < level(100) && !numeriPc.includes(numUser))
{
    var numUser = parseInt(prompt('Inserisci un numero da 1 a 100'));
    if (numeriPc.includes(numUser)){
        console.log('Hai perso, il tuo risultato è: ' + arrayUser.length);
    } else if (arrayUser.includes(numUser)){
        console.log('Hai già inserito il numero, ritenta');
    } else if(!numeriPc.includes(numUser) && !arrayUser.includes(numUser))
    {
        arrayUser.push(numUser);
    }  
}

if (arrayUser.length == level(100)) {
    console.log('Winner');
}



function numRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function level(numMax){
    return numMax - 16;
}