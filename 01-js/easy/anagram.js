/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  console.log("String :" ,str1, str2)
  arr1 = Array.from(str1.trim())
  arr2 = Array.from(str2.trim())
  if (arr1.length == arr2.length){
    // console.log("String 1 : ",str1.split(''))
    // console.log("String 1 : ",Object.assign([],str1))
    // console.log("String 1 : ",Array.from(str1))
    // console.log("String 2 : ",[...str2])
    for (let i = 0; i<arr1.length; i++){
      for (let j=0;j < arr2.length; j++){
        if (arr1[i] == arr2[j]){
          arr2.splice(arr2.indexOf(arr2[j]),1)
        }
      }
    }
    if(arr2.length == 0){
      return true
    }else{
      return false
    }
  }else{
    return false
  }

}

console.log(isAnagram("ten","net"))

module.exports = isAnagram;
