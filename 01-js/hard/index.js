let expr = '75+3-2*(6-1)/5'
let expr1 =`10 +   2 *    (   600 - (4 + 1) / 2) + 7`



class Stack{
    constructor(){
        this.stack = []
    }
    push(item){
        this.stack.push(item);
    }
    pop(){
        this.stack.pop();
    }
}
class Queue{
    constructor(){
        this.queue = {}
        this.tail = 0
        this.head = 0
    }
    enqueue(element){
        this.queue[this.tail++]=element
    }
    dequeue() {
        if(this.tail === this.head)
            return undefined
    
        delete this.queue[this.head]
        return element
    }
}

// function Queue(){
//     this.queue = {}
//     this.tail = 0
//     this.head = 0
// }

// Queue.prototype.enqueue = function (element) {
//     this.queue[this.tail++]=element
// }

// Queue.prototype.dequeue = function () {
//     if(this.tail === this.head)
//         return undefined

//     var element = this.queue[this.head];
//     delete element
//     return element
// }

function Token(type, value) {
    this.type = type
    this.value = value
}
function isDigit(ch) { return /\d/.test(ch);}
function isLetter(ch) { return /[a-z]/i.test(ch);}
function isOperator(ch) { return /\+|-|\*|\/|\^/.test(ch);}
function isLeftParenthesis(ch) { return (ch === "(");}
function isRightParenthesis(ch) { return (ch == ")");}

function tokenize(str) {
    var result = []
    str.replace(/\s+/g, "");
    str = str.split("")
    let numberBuffer = ''
    str.forEach(function (char,idx) {
        if(isDigit(char)) {   
            numberBuffer += char   
            // result.push(new Token("Literal", char));    
        } 
        else if (isOperator(char)) {  
            if(numberBuffer.length>0){
                result.push(new Token('Number',numberBuffer))
                numberBuffer = ''
            }    
            result.push(new Token("Operator", char));    
        }  
        else if (isLeftParenthesis(char)) {  
            if(numberBuffer.length>0){
                result.push(new Token('Number',numberBuffer))
                numberBuffer = ''
            }  
            result.push(new Token("Left Parenthesis", char)); 
        } 
        else if (isRightParenthesis(char)) {   
            if(numberBuffer.length>0){
                result.push(new Token('Number',numberBuffer))
                numberBuffer = ''
            }  
            result.push(new Token("Right Parenthesis", char)); 
        } 
    })
    return result;

}

let tokens = tokenize(expr1)
let numberBuffer = ''
let res = []
let stack = new Stack()
let newstack = new Stack()
let queue = new Queue()
tokens.forEach(element => {
    if(element.type !='Number'){
        stack.push(element.value)
        console.log(" top ",(stack.stack[stack.stack.length-1] <= '+'), stack.stack[stack.stack.length-1])
        // if(stack.stack[stack.stack.length-1] =='+'){
        //     console.log(element.value)
        // } else if (element.value=='*' || element.value=='/'){
        //     console.log(element.value)
        // }
    }   
    else{ 
        // console.log(element.va)
        queue.enqueue(element.value)
        
    }
});
console.log(stack.stack)
// console.log(queue)



