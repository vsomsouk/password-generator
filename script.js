// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for Values 
var uppercasevalue = ["A","B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercasevalue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbervalue = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolvalue = ["!", "#", "$", "%", "&", "'", "(", ")"]


// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

//Questions once the generate button is selected
function generateBtn () {
  var confirmLength = "";
  while (isNaN)(confirmLength || confirmLength < 8 || confirmLength > 128) {
    confirmLength = prompt("What length would you like your password to be? Please choose between 8 - 128 characters");
    if (confirmLength === null) {
      break;
    }
  }



 
  var uppercase = confirm("Would you like to include uppercase letters?");
  var lowercase = confirm("Would you like to include lowercase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var symbols = confirm("Would you like to include special characters?");
}


// Creating loop for password





// Password to generate to textbox
//document.getElementById("writePassword").value = password