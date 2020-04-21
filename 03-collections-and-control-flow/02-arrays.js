// We often have values that should be grouped.
// JavaScript offers two main "collections" for such cases:
// the Array and the Object.

// arrays are an ordered collection of items.
// We can make a new one using square brackets: []
let emptyArray = []
let arrayOne = [1, 2, 3, 4, 5, 6]
let arrayTwo = ['a', 'b', 'c', 'd', 'e', 'f']

// We choose the order, so this is perfectly allowed:
let arrayThree = [6, 1, 2 , 5, 4, 3]

// We can fetch a particular item from the array using "bracket notation"
// Programmers pronounce this line of code "console.log arrayOne sub zero" and it
// returns the item in the first position of the array, which is the number 1.
// (sub is short for "subscript" by the way)
console.log(arrayOne[0])

// So what does this console.log?
console.log(arrayTwo[3])

// What about this?
console.log(arrayThree[6])

// Bracket notation can also be used to modify items in the array
arrayOne[0] = 999;
console.log(arrayOne);

// When we have a collection we frequently want to "loop over" all the
// values in that array. There are two ways to do this in JavaScript. The
// first is the old school "classic" for loop:
console.log("\nClassic For Loop: ");
for(let i = 0; i < arrayTwo.length; i++) {
    console.log(i, arrayTwo[i]);
}

// The second is newer and I think easier to read, but it doesn't
// give you the index/position of the items, just the items themselves.
for(let value of arrayTwo) {
    console.log(value);
}


// arrays have many useful functions built in that we can use, such as 
// push for adding an item to the end of a array, and the length property
// for determining how many items are in a array. See the docs for more:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let newArray = [];
newArray.push('hello');
newArray.push('good');
newArray.push('people');

console.log("\n", newArray, newArray.length)

// Micro-Exercise: push three more values into newArray, then loop
// over those values console.loging the value AND type of each item in newArray.
