
let currencyconver = (Amount, Currency) =>{

    if ( Currency == 'USD'){

        return (`${Amount} ${Currency}= ${Amount * 86.2} BDT`);
    }else if ( Currency == 'CAD'){
        return (`${Amount} ${Currency}= ${Amount * 67.75} BDT`);

    }else if( Currency == 'POUND'){
        return (`${Amount} ${Currency}= ${Amount * 115.52} BDT`);

    }else if(Currency == 'EURO'){
        return (`${Amount} ${Currency}= ${Amount * 98.52} BDT`);
    }
}
console.log(currencyconver(40,'USD'));
console.log(currencyconver(60,'POUND'));
