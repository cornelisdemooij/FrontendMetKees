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

