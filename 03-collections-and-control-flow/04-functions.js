// Functions allow us to create reusable blocks of code that we can “call” at will. 
// We define a function with the function keyword, followed by the name of the function.
// After the name we have the "paramenters" inside of parenthesis. We can have any number
// of parameters, includeing zero.

// Functions also use the return keyword to send data back to the caller.
// paramters are input to the function, the return value is output from the function.

// This function is named add and it accepts 2 parameters
function add(a, b) {
    return a + b;
}

// This function is named "isEligibleForPrize" and accepts 3 parameters
function isEligibleForPrize(age, score, duration) {
    if(age < 18 && score > 90 && duration < 3) {
      return true;
    }
   
    return false;
}

// This function is named useless, it accepts zero paremters and returns undefined
function useless() {}

// After we have defined functions we can "call" or "envoke" them (two words for the same thing):
let x = add(3, 7);
console.log(x);

// second example
let tylerEligible = isEligibleForPrize(30, 95, 7);
console.log("Tyler: ", tylerEligible);

let hawaEligible = isEligibleForPrize(12, 99, 2.6)
console.log("Hawa: ", hawaEligible);

// third example
console.log(useless());

// Micro-exercise: create a function called fancyMath that accepts 3 parameters
// and uses math operators to combine them somehow. Return the result of your 
// fancy math and print it to the console.