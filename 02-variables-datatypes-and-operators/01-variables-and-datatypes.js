/* 
the keywords let, var, and const all allow us to create variables.
let and var are very similar, and we can't discuss the difference
until after we've introduced something called "scope" but let is
newer and generally preferred. 

const creates a "constant" variable whose value cannot be changed.

Data comes in a variety of typeofs. These two versions of the number 
one are not the same. One is a number, one is a piece of text,
called a "string", and the third variable holds something called a boolean.
There are 2 boolean values: true and false.

We use the equals sign (=) to assign values to a variable. This is
called the assignment operator. 
*/
let x = 1;
var y = '1';
const z = false;

/* 
We can use a function called console.log to console.log information to our 
terminals, which is useful for debugging. We can use the typeofof operator
to tell us what typeof of data we are working with:
*/ 
console.log('\n===types===')
console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(z));

// In JavaScript There are two special values that means "nothing"
let blankOne = null;
let blankTwo = undefined;

console.log('\n===null / undefined===');
console.log(typeof(blankOne));
console.log(typeof(blankTwo));

/* 
Micro-Exercise: Create a variable and assign it a value.
Then, pick one of the variables defined above and reassign 
it to have the same value as the variable you created.
Finally, prove your code works with a console.log statement.
*/