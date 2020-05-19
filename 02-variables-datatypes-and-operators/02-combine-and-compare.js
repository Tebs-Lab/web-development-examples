// Numbers can be combined using mathematical operators
let x = 1 + 1;
let y = 2 * 3;

// Variables holding numbers can be used any way numbers can be used
let z = y / x;

/*
We can prove that these computations worked out the same using
comparison operators. Specifically == and === both test for equality 
*/
console.log('\n===comparing===');
console.log('2 == x', 2 == x);
console.log('6 == y', 6 == y);
console.log('3 == z', 3 === z);

// But there is an important difference called "type coersion" where
// == will try to automatically convert values of different types into
// the same type. I suggest ALWAYS using ===, consider these:
console.log(" '3' == z vs 3 === z", '3' == z, '3' === z);

// More info about type coersion: https://www.w3schools.com/js/js_type_conversion.asp

// Other common comparisons include <, <=, >, >=
console.log('1 < 2', 1 < 2);       // true
console.log('10 >= 10', 10 >= 10); // true
console.log('10 > 10', 10 > 10);   // false

console.log(); // For a blank line in the output

// Strings are compared pseudoalphabetically for greater than / less than
console.log('"albert" < "bill"', "albert" < "bill"); // true

// HOWEVER, in JavaScript ALL capital letters come before ANY lowercase letters
console.log('"B" < "a"', "B" < "a"); // true

// There are additional rules for other characters like $, %, ., and so on
// that we're ignoring for now.

// Strings can also be combined with the + operator but it means something different
let textExample = "hello " + "world."; // Concatination results in "hello world."

console.log();
console.log(textExample);

// Finally, we can combine the assignment operator and these math operations
// using the following shorthands:
x = 4;
x += 3;  //  x = x + 3
x -= 1; //  x = x - 1
x *= 2; //  x = x * 2
x /= 4; //  x = x / 4

// Micro-Exercise: predict the value of x. Then write a comparison statement 
// involving x that evaluates to False. console.log the result of that comparison.