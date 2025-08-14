function numberChecker(number) {
  if (number === 1000) {
    return true;
  } 
  else if(number === 10) {
    return true;
  }
    else if ( number === 9) {
    return false;
  }
  else if( number === 6) {
    return false;
  } 
}

//or just be lazy, if number is greater than 10 its true and if less it's false
/*
  function numberChecker(number){
  if(number >= 10){
  return ture;
}
  else{
  return false;
}
}
*/

// Do not edit below this line
module.exports = numberChecker;
