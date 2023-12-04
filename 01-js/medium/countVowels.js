/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let elements = Array.from(str.toLowerCase())
    let countVowels = 0
    elements.forEach(item =>{
      if(vowels.includes(item)){
        countVowels++
      }
    })
    // console.log(countVowels)
    return countVowels
}
// countVowels("AeioU")
module.exports = countVowels;