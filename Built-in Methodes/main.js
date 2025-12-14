/*string slicing = creating a substring 
                    from a portion of another string*/

//const fullName = "Tahir Abbasov";
/*let firstName = fullName.slice(0, 5);
let lastName = fullName.slice(6, 13);
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);*/

//let firstName = fullName.slice(0, fullName.indexOf(" "));
//let lastName = fullName.slice(fullName.indexOf(" ") + 1);

//console.log(firstName);
//console.log(lastName);
/*console.log(firstChar);
console.log(lastChar);*/

/*const email = "tahir123@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);*/

//Exercises

// ----No Method Chaining-----

/*let userName = window.prompt("Enter your username: ");

userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraChar = userName.slice(1);
extraChar = extraChar.toLowerCase();
userName = letter + extraChar;

console.log(userName);*/

//-----Method Chaining-----

/*let username = window.prompt("Enter your username: ");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);*/

/*
= assingment operator
== comparison operator (compare if values are equal)
=== strict equality operator (compare if values & datatype are equal)
!= inequality operator
!== strict inequality operator
*/

/*const PI = "3.14";

if(PI !== 3.14){
    console.log("That is not PI")
}
else{
    console.log("That is PI")
}*/

/*let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter you username: ");
    password = window.prompt("Enter your password: ")

    if(username === "Tahir" && password === "123"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid username or password! Try again")
    }
}*/

//function = a section of reusable code
//           declare code once, use it whenever you want.

/*function happyBithday(username,age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy bithday dear ${username}`);
    console.log("Happy birthday tou you!");
    console.log(`You are ${age} years old`);
}

happyBithday("Tahir", 27);
*/


//function isEven(number){
    /*if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }*/
        // using ternary method
       // return number % 2 === 0 ? true : false;


//console.log(isEven(7));

/*
function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidEmail("tahir@123"));
*/

//2D array

/*
const matrix = [[1,2,3],
                [4,5,6], 
                [7,8,9]]

for(let row of matrix){
    const rowString = row.join(' ');
    console.log(rowString);
}
*/

/*
function add(...numbers){
    let result = 0;

    for(let number of numbers){
        result += number;
    }
    return result;
}

console.log(add(2, 5, 10));
*/

// callback = a function that is passed as an argument
//              to another function

/*
function hello(callback){
    console.log("Hello!");
    callback();
}

function go(){
    console.log("Go!")
}

hello(go);
*/

//forEach() = method used to iterate over elements
//            of an array and apply a specified function(callback)
//            to each element


/*
let numbers = [1,2,3,4,5];


numbers.forEach(double);
numbers.forEach(display);


function display(element){
    console.log(element);
}

function double(element, index, array){
    array[index] = element * 2;
}
*/


/*
let fruits = ["apple", "orange", "banana", "coconut"];


fruits.forEach(capitalize);
fruits.forEach(display);

function display(element){
    console.log(element);
}

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
*/

//.map() = accepts a callback an applies that function
//         to each element of an array, then return a new array

/*
const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(cubes);


function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element, 3);
}
*/

/*
const students = ["Spongebob", "Patrick", "Sandy"]
const studentsUpper = students.map(upperCase);

console.log(studentsUpper);


function upperCase(element){
    return element.toUpperCase();
}
*/

/*
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
*/

//.filter() = creates a new array by filtering out elements

/*
let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(oddNums);
console.log(evenNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}
*/    

//arrow functions
/*
const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);
*/