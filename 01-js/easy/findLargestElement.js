/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let output
    numbers.forEach(element => {
        if(typeof output == 'undefined'){
            output=element
        }
        if(element>output){
            output=element
        }
        
    });
    return output
}

module.exports = findLargestElement;