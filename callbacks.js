console.log("Yo");

// logs a string to the console to tell the user the function was called
function notifyUser() {
  console.log("notifyUser function was called!");
}
// accepts a function as an argument to run when it has done it's work
function myFunction(notifyUserCallback) {
  console.log("Running myFunction");
  console.log("Complete, I will notify the user");
  notifyUserCallback();
}
// run the function, and pass the notifyUser function to it
myFunction(notifyUser);

function myNewFunction(onCompleteCallback) {
  console.log("Running myNewFunction doing complex things");
  console.log("Complex things complete, I will notify the user");
}

myNewFunction(function () {
  console.log("notifyUser function was called");
});
//This can also be defined as an arrow function, which in this case is just a short hand way of writing the same anonymous function, without the need for the function keyword. There are other differences we'll learn later, but they're not relevant for this class.
myNewFunction(() => {
  console.log("notifyUser function was called!");
});

//example2 - simpler example.

function greet(fName) {
  console.log(`Hello ${fName}`);
}

greet("Dan");
greet("Sam");

function runFunction(functionArg) {
  functionArg();
}

runFunction(function () {
  console.log(`I'm being run by another function`);
});
runFunction(callBackFunc);

function callBackFunc() {
  console.log(`I am also being run by another function`);
}

//calculator example
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

function myCalculator(a, b, operationalCallback) {
  console.log("Currently calculating numbers: ", a, b);
  //console.log("We could have code to save the result to a database");
  return operationalCallback(a, b);
}

const result = myCalculator(2, 2, add);
console.log(result); //outputs 4

const resultTwo = myCalculator(2, 5, multiply);
console.log(resultTwo); // outputs 10

//full output for add: I am currently calculating numbers: 2 2
//4
//full output for multiply: I am currently calculating numbers: 2 5
//10

//we can now add the two results together.
const finalResult = myCalculator(result, resultTwo, add);
console.log(finalResult); //outputs the 'currently calculating numbers: 4 10' the the answer 14

//we could even mulitply divide or subtract

const finalResult2 = myCalculator(result, resultTwo, multiply);
console.log(finalResult2); // outputs curently calculating numbers: 4 10  40(note the answer will be on a new line in console)

const finalResult3 = myCalculator(result, resultTwo, divide);
console.log(finalResult3); // 0.4

const finalResult4 = myCalculator(finalResult2, finalResult, subtract);
console.log(finalResult4); //26 (note i have used final results for this one. not the origional a and b values)
