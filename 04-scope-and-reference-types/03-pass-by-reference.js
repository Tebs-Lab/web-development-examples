// Reference and value types are also passed into functions
// differently from each other. Value types are copied into
// the parameter, and reference types pass a reference into
// the parameter. 

// The parameter primative is NOT TIED to the variable prim.
// The value inside prim is copied when the function is called.
function modifyPrimative(primative) {
    primative = 10;
}

let prim = true;
modifyPrimative(prim);
console.log(prim);

// the parameter object references the same object as the variable obj.
// the two ARE TIED to the same object. When we add or change a property
// on one it is reflected in the other. 
function modifyObject(object) {
    object.newProperty = 10;
}

let obj = {
    initialProperty: "hello"
}

modifyObject(obj);
console.log(obj);

// Micro-exercise: Something different happens when you reassign a reference 
// type variable to an entierly new object though. Create a function that
// accepts a single parameter and assigns that parameter an entierly new object.
// Now, create a variable and assign it with an object as a vaule as well. 
// Now call your function with that variable. 

// When the function is executed, has your outer  variable's value changed or not? 