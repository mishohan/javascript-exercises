const sumAll = function(initial, final) {

    if(initial < 0 || final < 0 || !Number.isInteger(initial) || !Number.isInteger(final)) return 'ERROR';
    if(initial > final){
         const temp = initial; 
         initial = final;
         final = temp;
         }

    let sum = 0;

    for(let i = initial; i <= final; i++){

        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
