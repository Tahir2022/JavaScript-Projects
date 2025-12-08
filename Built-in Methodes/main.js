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