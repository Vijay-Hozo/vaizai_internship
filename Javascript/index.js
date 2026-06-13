// JavaScript Fundamentals Demo
// This file shows simple examples of common JavaScript concepts.

const printHeading = (title) => {
    console.log(`\n=== ${title} ===`);
};

// Data Types
printHeading("Data Types");

let value = 23;
console.log(typeof value);

// Operators (+, -, *, /, %)
printHeading("Operators");

const firstNumber = 10;
const secondNumber = 5;

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber); // quotient
console.log(firstNumber % secondNumber); // remainder

// Comparison Operators
printHeading("Comparison Operators");

console.log(10 == "10"); // checks value only
console.log(10 === "10"); // checks value and data type
console.log(10 > 5);

// Conditional Statements
printHeading("Conditional Statements");

let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("Sorry, you are not eligible.");
}

age = 2;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("Sorry, you are not eligible.");
}

// Loops
printHeading("Loops");

for (let index = 1; index < 10; index += 2) {
    console.log(index);
}

// Functions - reusable blocks of code
printHeading("Functions");

function greet() {
    console.log("Hello, welcome to JavaScript!");
}

greet();

function greetUser(userName) {
    console.log(`Hello ${userName}`);
    console.log(userName);
}

greetUser("Vijay");

function sum(a, b) {
    console.log(a + b);
}

sum(10, 5);

// Function with return value
function addNumbers(a, b) {
    return a + b;
}

const additionValue = addNumbers(10, 10);
console.log(additionValue);

// Arrow functions
printHeading("Arrow Functions");

const showGreeting = (userName) => {
    console.log(`This is an arrow function ${userName}`);
};

showGreeting("John");

const showGreetingShort = (userName) => console.log(`This is an arrow function ${userName}`);
showGreetingShort("John");

// Callback Function - a function passed as an argument to another function
printHeading("Callback Functions");

function greetWithCallback(userName, callback) {
    console.log("Hello " + userName);
    callback();
}

function showWelcomeMessage() {
    console.log("Welcome to JavaScript");
}

greetWithCallback("Vijay", showWelcomeMessage);

// Arrays - used to store a list of values
printHeading("Arrays");

const numberData = [10, 20, 30];
const stringData = ["Vijay", "John", "Doe"];

console.log(numberData);
console.log(stringData);
console.log(numberData[2]);

// Objects
printHeading("Objects");

const student = {
    name: "Vijay",
    age: 22,
    course: "IT"
};

console.log(student.course);
console.log(student?.salary); // optional chaining

// Hoisting - variable and function declarations are moved to the top of their scope.
printHeading("Hoisting");

console.log(hoistedVar);
var hoistedVar = "Vijay";

var hoistedName;
console.log(hoistedName);
hoistedName = "Vijay";

// let and const stay in the temporal dead zone until they are declared.
// console.log(hoistedLet); // ReferenceError
let hoistedLet = "Vijay";

// console.log(hoistedConst); // ReferenceError
const hoistedConst = 12;

function hoistedFunctionExample() {
    console.log("Hello, welcome to JavaScript!");
}

hoistedFunctionExample();

const functionExpression = function () {
    console.log("This is a function expression.");
};

functionExpression();

// Destructuring - unpack values from arrays or objects into separate variables.
printHeading("Destructuring");

const values = [10, 20, 30];
const [firstValue, , thirdValue] = values;

console.log(firstValue);
console.log(thirdValue);

const students = {
    name: "VJ",
    age: 22
};

console.log(students.name);
console.log(students.age);

const userProfile = {
    name: "John",
    age: 22
};

const { name: studentName, age: studentAge, course = "IT" } = userProfile;
console.log(studentName);
console.log(studentAge);
console.log(course);
