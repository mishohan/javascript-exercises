const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) { 
  return a - b;
};

const sum = function(array) {
	let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {

  if(array.length === 0) return "Empty Array";

  let total = 1;
  array.forEach(items => total *= items);
  return total;
};

const power = function(a, b) {
  return Math.pow(a, b);
	
};

const factorial = function(n) {
  if(n === 0 || n === 1) return 1;
  else{
	return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
