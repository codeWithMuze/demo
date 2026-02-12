console.log('hey muzammil how are you');
let array=[1,23,21,534,276,342];

array.sort();

console.log(array);
// index.js - demo JavaScript code

console.log("🚀 Demo project started...");
// Simple user data
const user = {
  name: "Muzammil",
  age: 20,
  role: "MERN trainer",
};

// Function: greet user
function greetUser(user) {
  console.log(`Hello ${user.name}! 👋`);
  console.log(`Age: ${user.age}`);
  console.log(`Role: ${user.role}`);
}

// Function: check even/odd
async function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return `${num} is Even ✅`;
  } else {
    return `${num} is Odd ❌`;
  }
}