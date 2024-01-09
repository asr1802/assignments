import { useMemo } from "react";
import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    const [counter, setCounter] = useState(0)
    // Your solution starts here
     
    const funFact = useMemo(() => {
    // const funFact = (input) => {
        console.log("expensive function")
        if (input < 0) {
            console.log('Error! Factorial for negative number does not exist.');
            return 
        }
        // if number is 0
        else if (input === 0) {
            console.log(`The factorial of ${input} is 1.`);
            return 1
        }
        let fact = 1;
        for (let i = 1; i <= input; i++) {
            fact *= i;
        }
        return fact
    }
    ,[input])
    const expensiveValue = funFact
    // const expensiveValue = funFact(input)

    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>

            <button onClick={()=> setCounter(counter+1)}>Counter ({counter})</button>
        </div>
    );
}