// // JavaScript Fundamentals Demo
// // This file shows simple examples of common JavaScript concepts.

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
    console.log(`Hello ${userName}`); // template literal
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

const { name: studentName, age , course = "IT" } = userProfile;
console.log(studentName);
console.log(age);
console.log(course);

// Spread Operator - It is used to expand the values in array or object
printHeading("Spread");

const arr1 = [1, 2, 3];
const arr2 = [arr1, 4, 5];
console.log(arr2);

// [1,2,3,4,5]

const spreadarr1 = [1, 2, 3];
const spreadarr2 = [...spreadarr1, 4, 5, 6];
console.log(spreadarr2);

// Copy an array using spread operator

const arr3 = [1, 2, 3];
const arr4 = arr3;
console.log(arr4);
arr4.push(4);
console.log(arr4);
console.log(arr3); // arr3 also gets modified because arr4 is referencing the same array in memory

const arr5 = [1, 2, 3];
const arr6 = [...arr5];
console.log("arr6", arr6);
arr6.push(4);
console.log("arr6", arr6);
console.log("arr5", arr5);

// Spread operator with objects

const studentObj = {
  name: "vijay",
  age: 22,
};
console.log("student Obj", studentObj);

const updatedStudent = {
  ...studentObj,
  age: 30,
  course: "IT",
  Mark: 98,
};

console.log("Updated obj", updatedStudent);

// Map

const mapnumber = [1, 2, 3, 4];

const result = mapnumber.map((num) => {
  return num * 10;
});

console.log("result", result); // Result of map will be array. Result array and input array size will be equal

const even = mapnumber.filter((num) => {
  return num % 2 == 0;
});

console.log("even", even); // result will be array but not the size of input array

const reduce = mapnumber.reduce((sum, n) => sum + n, 10); // sum - additiom value, n - value from array , 0 - default value (initial)

console.log("reduce", reduce); // reduce will give single value

// Promises - It is used to make the javascript program as asynchronous
// Example - API Calls, Database query, File upload
// states - Pending, Fulfilled, rejected

printHeading("Promises")

const myPromise = new Promise(
    (resolve,reject) => {
        resolve("Promise is success");
    }
);

// .then - used for success handling and .catch - used for error handling 
myPromise.then((result) => {
    console.log(result);
})


const loginPromise = new Promise((resolve,reject)=>{
    const isLoggedIn = false; // Boolean

    if(isLoggedIn){
        resolve("Login Success");
    }else{
        reject("Login Failed");
    }
})

loginPromise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

// SetTimeout - It will run after some certain time interval 

const timeoutexample = setTimeout(()=>{
    console.log('I am here!!')
},3000) // 3000 - 3 sec 

// setInterval - it will run continuously after some certain time interval

let count = 1;
const setintervalexample = setInterval(()=>{
    console.log(count);
    count++;
},1000);

setTimeout(()=>{
    clearInterval(setintervalexample);
},5000)



