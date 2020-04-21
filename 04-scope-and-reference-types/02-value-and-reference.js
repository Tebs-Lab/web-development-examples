// Numbers are an example of a "value" type, as are all primative JS types.
// When we use variables holding "value" types, the value is copied into 
// the new variable. The variables are not "tied" to each other, they are
// totally separate. 

// In this example there are two copies of the number 1, and one of them
// is replaced with a 2.
let x = 1;
let y = x;
y = 2;

console.log('x:', x);
console.log('y:', y);

// Objects and lists are both reference types.
// When we use variables holding reference types then the "value"
// in the variable is actually just a "reference" to the object.

// In this example there is one object and the variables a and b both
// "reference" the same object which is why changing the property on
// b also changes the property on a. 
let a = {
  prop: "hello"
};
let b = a;
b.prop = 655;

console.log('a:', a);
console.log('b:', b);

// Micro-exercise: the equality operator on reference types means something
// but it might not be what you expect. Create two empty lists and save them
// into two separate variables, then use the equality operator (===) to compare them.
// THEN use the same operator to compare the variables a and b from above.
// console.log the results of the comparisons, can you explain what's happening?