// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for Values 
var uppercasevalue = ["A","B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercasevalue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbervalue = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolvalue = ["!", "#", "$", "%", "&", "'", "(", ")"]

var uppercase = false;
var lowercase = false;
var numbers = false;
var symbols = false;


// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

//Questions once the generate button is selected
function generateBtn () {
  var confirmLength = "";
  while (isNaN)(confirmLength || confirmLength < 8 || confirmLength > 128); {
    confirmLength = prompt("What length would you like your password to be? Please choose between 8 - 128 characters");
    if (confirmLength === null);
  }

if(confirmLength){
  if(confirm("Would you like to include uppercase letters?") == true) {
    uppercasevalue = true
  }
  if (confirm("Would you like to include lowercase letters?") == true) {
    lowercasevalue = true
  }
  if (confirm("Would you like to include numbers?") == true {
    numbervalue = true
  }
  if (confirm("Would you like to include special characters") == true {
    symbolvalue = true
  }
  
 


// Creating loop for password





// Password to generate to textbox..math random


//document.getElementById("writePassword").value = password