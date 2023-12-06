/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

const readline = require("readline-sync"); 

class Calculator {
  result = 0;
  constructor(){
    let input = this.takeinput()
    if(input=='exit'){
      process.exit(1)
    }else{
      console.log("expression :", input)
    }
  }
  split(expression, operator) {
      const result = [];
      let braces = 0;
      let currentChunk = "";
      for (let i = 0; i < expression.length; ++i) {
        const curCh = expression[i];
        if (curCh == '(') {
          braces++;
        } else if (curCh == ')') {
          braces--;
        }
        if (braces == 0 && operator == curCh) {
          result.push(currentChunk);
          currentChunk = "";
        } else currentChunk += curCh;
      }
      if (currentChunk != "") {
        result.push(currentChunk);
      }
      return result;
  }

  takeinput(){
    let exp = readline.question("Enter the expression to calculate : ") 
    return exp
  }
  
  expression(expr){
    var chars = expr.split("");
    var str = expr.match(/[+\−]*(\.\d+|\d+(\.\d+)?)/g) || [];
    console.log(str)
    return chars
  }
}




let cal = new Calculator()
console.log(cal)

module.exports = Calculator;
