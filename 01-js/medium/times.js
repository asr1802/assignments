/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/


function calculateTime(n) {
    const dte1 = new Date()
    console.log(dte1)
    let res1 = 0
    for(i=1;i<=n;i++){
        res1=res1+i
        // console.log(res1)
    }
    const dte2 = new Date()
    console.log(dte2-dte1, res1)
    return dte2-dte1;
}

calculateTime(100)


