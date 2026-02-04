/**
 * chair ---> 3 cft
 * table ---> 10 cft
 * bed ---> 50 cft
 */
function wooodQuantity (chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const ChairTotalWood = chairQuantity * perChairWood
    const tableTotalWood = tableQuantity * perTableWood
    const bedTotalWood = bedQuantity * perBedWood

    const totalWood = ChairTotalWood + tableTotalWood + bedTotalWood
    
    return totalWood
}

const wood = wooodQuantity(1, 1, 1)
console.log('wood needed', wood)