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

const email = "tahir123@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);