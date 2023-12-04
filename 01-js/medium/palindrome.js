/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let checkstr = ''
  str = str.replace(/[^a-z0-9]/gi, '')
  for(let i = str.length-1;i>=0;i--){
    checkstr+=str[i]
  }
  if(str.toLowerCase()==checkstr.toLowerCase()){
    return true;
  }else{
    return false;
  }
}
module.exports = isPalindrome;
