/*
console.log("Hallo Young Colfield!")

// Strings, concatenation & templates:
const firstName = 'Bob';
const lastName = 'Jones';
const age = 45;
const description1 = 'This is ' + firstName + ' ' + lastName + ' and he is ' + age + ' years old.';
const description2 = `This is ${firstName} ${lastName} and he is ${age} years old.`;
console.log(description1);
console.log(description2);

// Functions:
function mijnNieuweFunctie(eersteInput, tweedeInput) {
	console.log(eersteInput)
	const resultaat = eersteInput + tweedeInput;
	return resultaat;
}
const a = "whoa";
let b = "omg";
console.log(a)
console.log(b)
b = mijnNieuweFunctie(a,b);
console.log(a)
console.log(b)

// Callbacks:
function greeting(name) {
  alert(`Hello ${name}`)
}
function insult(name) {
  alert(`${name}, you smell like boiled cabbage`)
}
function interactWithUser(callback) {
  let name = prompt('Please enter your name: ');
  callback(name);
}
interactWithUser(greeting)
interactWithUser(insult)
*/

// Asynchronous behaviour:
/* function slowGreeting(name) {
  console.log("Slow greeting started")
  setTimeout(() => {
    console.log(`Hello ${name}`)
  }, 5000)
}
function fastGreeting(name) {
  console.log("Fast greeting started")
  setTimeout(() => {
    console.log(`Hello ${name}`)
  }, 1)
}
slowGreeting("Alice")
fastGreeting("Bob") */

// Promises:
function divide(a,b) {
  return new Promise(function(resolve, reject) {
    try {
      if (b == 0) {
        throw new Error("Cannot divide by zero!");
      }
      const result = a / b;
      resolve(result);
    } catch(error) {
      reject("An error occurred! " + error);
    }
  })
}
const a = prompt('Please enter the numerator: ');
const b = prompt('Please enter the divisor: ');
const divisionPromise = divide(a,b);
divisionPromise
  .then(result => console.log(`The result is ${result}`))
  .catch(error => console.error(error));

