// We use if, if/else, and if/else if/else blocks to selectively
// execute code when some condition is true.

if(true) {
    console.log("This executes");
    console.log("this also executes");
}

if(false) {
    console.log("This never executes");
    console.log("this also never executes");
} 

// The above are trivial, but using comparison operators makes
// these constructs very useful:
let arbitraryNumber = 42;

// Only ONE of an if/else block can trigger.
if(arbitraryNumber > 10) {
    console.log("The number is larger than 10");
}
else{
    console.log("The number is not larger than 10");
}

// Same for an if/else if/else, exactly one block can trigger.
// But you can have any number of "else if" blocks
if(arbitraryNumber < 10){
    console.log("The number is less than 10");
}
else if(arbitraryNumber < 20) {
    console.log("The number is between 10 and 20");
}
else if(arbitraryNumber < 30) {
    console.log("The number is between 20 and 30");
}
else {
    console.log("The number is 30 or larger");
}

// comparisions can be combined using and (&&) as wel as or (||)
// they can also be negated with not (!)

// The ! operator means "not", it negates the true or false value
if(!arbitraryNumber > 10) {
    console.log("The number is NOT greater than 10.");
}

// The && operators means "and", it results in true only if both expressions are true
if(arbitraryNumber > 10 && arbitraryNumber < 50) {
    console.log("The number is greater than 10 AND less than 50");
}

// the || operator means "or", it results in true if either of the expressions are true
if(arbitraryNumber < 10 || arbitraryNumber > 30) {
    console.log("The number is less than 10, or more than 30");
}

// If statements can also be nested:
if(arbitraryNumber > 10) {
    console.log("The number is larger than 10");
    if(arbitraryNumber < 50) {
        console.log("The number is larger than 10 and less than 50");
    }
}

// Micro-Exercise: Create a variable, assign it a numerical value
// then write an if/else statement that will cause the variable
// to become half as large if it's greater than 100, and twice
// as large if it's less than 100. console.log the variable's value 
// after the if/else block and test that your code work