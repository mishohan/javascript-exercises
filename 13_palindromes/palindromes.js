const palindromes = function (str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleanStr.length - 1;
    while(left < right){
        if(cleanStr[left] !== cleanStr[right]) return false;
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
