// Variables declared outside of any function, if statement, or for loop
// are called "global" variables. Often these are part of the "runtime"
// environment provided by node.js or the browser running our code.

// The creation of global variables is generally discourated, but one
// example of an acceptable use of globals are constants:
const PI = 3.14;

// Every function, if statement, and for loop creates its own scope.
// We can access variables from an outer scope inside of these more
// specific scopes, but not the other way around. 
function scopeDemo() {
  // We can use these anywhere in this function, but nowhere outside of it.
  var x = 'x';
  let y = 'y';

  // This illustrates the key difference between let and var:
  // var variables are ALWAYS lifted to their nearest functions
  // scope, which is why we can use this.
  functionScopeVar = 'this variable is declared below.';

  // Notice that we can reference our global variable here.
  if(PI === 3.14) {
    var functionScopeVar;
    console.log(functionScopeVar); // This already has a value! Crazy!

    let blockVar = "this variable exists only within this if statement";
    console.log(blockVar);
  }

  // let variables are confined to their nearest "block" so if 
  // we try to print blockVar here, we get a ReferenecError.
  console.log(blockVar)
}

scopeDemo();

// Micro-exercise: if you forget to use the let, var, or const keyword
// to declare a variable it has a substantial impact on the scope it belongs
// to... Create a function that assigns a value to a variable WITHOUT using
// the let, const, or var keyword then determine what scope it belongs to 
// either using the debugger or console.log statements.
