const removeFromArray = function(array, ...numbers) {
    return array.filter(item => !numbers.includes(item));
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 2, 3], 2);

// Do not edit below this line
module.exports = removeFromArray;
