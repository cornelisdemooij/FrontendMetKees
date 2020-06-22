// Console logging:
// console.log("Hallo Young Colfield!")
// console.warn("Waarschuwing! Implementeer geen bugs!")
// console.error("Oh nee, een error! Ik had nog gezegd om geen bugs toe te voegen!")

// Variabelen:
let a = 'text';
console.log(a)
a = 'meer text';
console.log(a)
const b = 'text die je niet kan veranderen';
console.log(b)
b = 'nieuwe text?'; // <- dit gaat een error opleveren.

// Types:
let a;
console.log(typeof a)
console.log(typeof(a))
let b = null;
console.log(typeof(b))  // null is een object.
let c = true;
console.log(`typeof(c) = ${typeof(c)}`)
let d = false;
console.log(`typeof(d) = ${typeof(d)}`)
let e = new Boolean(true);
console.log(`typeof(e) = ${typeof(e)}`) // Verwarrend: JavaScript heeft object versie van de native types boolean, number en string.
let f = 1;
console.log(`typeof(f) = ${typeof(f)}`)
let g = 1.0;
console.log(`typeof(g) = ${typeof(g)}`)
let h = 1n;
console.log(`typeof(h) = ${typeof(h)}`)
let i = "Text";
console.log(`typeof(i) = ${typeof(i)}`)
let j = {
  key: "value",
  'anotherkey': 3.1415
};
console.log(`typeof(j) = ${typeof(j)}`)
let k = ["an", "array", "is", "also", "an", "object"];
console.log(`typeof(k) = ${typeof(k)}`)
let l = (a) => console.log(a);
console.log(`typeof(l) = ${typeof(l)}`)
let m = function bla(a) { console.log(a) };
console.log(`typeof(m) = ${typeof(m)}`)
let n = Symbol("n");
let nAgain = Symbol("n");
console.log(n === nAgain)
console.log(`typeof(n) = ${typeof(n)}`)

// Type coercion met yolo:
console.log(`true + false = ${true + false}`)
console.log(`0 + '1' = ${0 + '1'}`)
console.log(`'0' + 1 = ${'0' + 1}`)
console.log(`'0' + '1' = ${'0' + '1'}`)
console.log(`0 - '1' = ${0 - '1'}`)
console.log(`'0' - 1 = ${'0' - 1}`)
console.log(`'0' - '1' = ${'0' - '1'}`)
x = 3;
console.log(`'5' + x - x = ${'5' + x - x}`)
console.log(`'5' - x + x = ${'5' - x + x}`)
console.log(`[] + null + 1 = ${[] + null + 1}`)
console.log(`[1,2,3] == [1,2,3] = ${[1,2,3] == [1,2,3]}`)
console.log(`!+[] = ${!+[]}`)
console.log(`new Date(0) - 0 = ${new Date(0) - 0}`)
console.log(`new Date(0) + 0 = ${new Date(0) + 0}`)

// Strings, concatenation & templates:
/* const firstName = 'Bob';
const lastName = 'Jones';
const age = 45;
const description1 = 'This is ' + firstName + ' ' + lastName + ' and he is ' + age + ' years old.';
const description2 = `This is ${firstName} ${lastName} and he is ${age} years old.`;
console.log(description1);
console.log(description2); */

// Functions:
/* function mijnNieuweFunctie(eersteInput, tweedeInput) {
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
console.log(b) */

// Callbacks:
/* function greeting(name) {
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
interactWithUser(insult) */

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
/* function divide(a,b) {
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
  .catch(error => console.error(error)); */

// Promises with asynchronicity:
/* function doXAfterYSeconds(name,x,y) {
  return new Promise(resolve => {
    console.log('Starting ' + name)
    setTimeout(() => {
      console.log('Completing ' + name);
      resolve(x);
    }, y * 1000);
  });
}

async function serialFlow() {
  const aResult = await doXAfterYSeconds('a', 1, 3);
  const bResult = await doXAfterYSeconds('b', 2, 2);
  const cResult = await doXAfterYSeconds('c', 3, 1);
  const finalResult = aResult + bResult + cResult;
  console.log(`finalResult = ${finalResult}`);
  return finalResult;
}
serialFlow();

async function parallelFlow() {
  const aResult = doXAfterYSeconds('a', 1, 3);
  const bResult = doXAfterYSeconds('b', 2, 2);
  const cResult = doXAfterYSeconds('c', 3, 1);
  const finalResult = await aResult + await bResult + await cResult;
  console.log(`finalResult = ${finalResult}`);
  return finalResult;
}
parallelFlow(); */

// Fetch API:
/* const fetchPromise = fetch('https://api.kanye.rest')
  .then(response => response.json())
  .catch(error => console.error(`Something went wrong with the response! ${error}`))
  .then(data => data.quote)
  .catch(error => console.error(`Something went wrong with the data! ${error}`))
  .then((quote) => {
    console.log(quote);
    return quote.length;
  })
  .catch(error => console.error(`Something went wrong with the quote! ${error}`))
  .then(length => console.log(length))
  .catch(error => console.error(`Something went wrong with the length! ${error}`))
  .finally(() => console.log('This always happens.')); */
// Run this command to enable git yolo: git config --global alias.yolo '!git commit -m "$(curl -s api.kanye.rest/?format=text)"'

