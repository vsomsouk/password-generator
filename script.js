// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function promptMe() {
    var startprompt = Number(prompt("How many characters would you like your password to be?"));
    while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
}


// Questions for prompts
//function myFunction() {
  // var uppercase = confirm("Would you like to include uppercase letters?");
  // var lowercase = confirm("Would you like to include lowercase letters?");
  // var numbers = confirm("Would you like to include numbers?");
  // var symbols = confirm("Would you like to include special characters?");
// }


