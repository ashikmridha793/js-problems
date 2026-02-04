const phones = [
    {name: 'samsung', price: 20000, camere: '50mp', color: 'black'},
    {name: 'xoami', price: 35000, camere: '50mp', color: 'black'},
    {name: 'oppo', price: 30000, camere: '50mp', color: 'black'},
    {name: 'iphon', price: 120000, camere: '50mp', color: 'black'},
    {name: 'Walton', price: 12000, camere: '50mp', color: 'black'},
    {name: ' HTC', price: 27000, camere: '50mp', color: 'black'}
];

function getCheapestPhon(phones){
    let min = phones[0]
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone
        }
    }
    return min
}
const cheap = getCheapestPhon(phones);
console.log('cheapest phone is:', cheap)


function getExpensivePhon(phones){
    let max = phones[0]
    for(const phon of phones){
        if(phon.price > max.price){
            max = phon
        }
    }
    return max
}
const expensive = getExpensivePhon(phones);
console.log('The expensive phone is:', expensive)
