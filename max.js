const disha = 56;
const rahim = 68;

if(disha > rahim){
    // console.log('disha will get the strawberry')
}
else{
    // console.log('rahim will eat the strawberry')
}

// inside a function 

function getMax(num1, num2){
    if(num1 < num2){
        return num1
    }
    else{
        return num2
    }
}

const max1 = getMax(56, 68)
const max2 = getMax(86, 95)
const ultimatMax = getMax(max1, max2)
console.log('max of two is:', ultimatMax)


