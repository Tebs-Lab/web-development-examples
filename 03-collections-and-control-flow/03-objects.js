// objects are the second main built in way to handle
// collections of data. Instead of an ordered collection
// like the array, objects are unordered key/value pairs.

// to make a object we use curly braces: {}
let emptyObject = {};

// Keys must be strings, and if you specify them without quotes they will
// automatially be pasrsed as if they had quotes around them.
// ANY type of data can be a value.
let person = {
    name: 'tyler',
    age: 30,
    eyeColor: 'blue',
    hairColor: 'brown',
    hobbies: ['piano', 'accordion', 'video games']
}

// We can also add new key/value pairs using bracket notation:
person['occupation'] = 'teacher';

// We can fetch an item from a object using bracket notation
// similar to arrays. 
console.log(person['age']); // 30

// We can also use the dot notation to do the same thing.
console.log(person.age);

// Just like objects, if we ask for a key that doesn't exist, we get undefined:
console.log(person['height'], person.height);

// We can also loop through objects, but the order is decided
// arbitrarily so remember not to rely on an order when doing so.
// We still use a for loop for this, and we always get the KEY when we
// use this kind of loop:

console.log('\n===looping===')
for(let key in person) {
    // Notice here, we are using a VARIABLE inside of bracket notation
    // and that using dot notation would not work: person.key ==> person['key']
    // which is NOT THE SAME as person[key].
    let value = person[key]; 
    console.log(key, value);
}
    

// Micro-Exercise: use bracket notation and the .push function to give
// our person one additional hobby. 
