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


//Questions for prompts
var uppercase = confirm("Would you like to include uppercase letters?");
var lowercase = confirm("Would you like to include lowercase letters?");
var numbers = confirm("Would you like to include numbers?");
var symbols = confirm("Would you like to include special characters?");





