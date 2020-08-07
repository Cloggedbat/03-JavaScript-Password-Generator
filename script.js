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

function generatePassword() {

}
var passwordLength = "";
 

// Validate the Password length 
while (isNaN(parseInt(passwordLength)) || parseInt(passwordLength) < 8 || parseInt(passwordLength) >128) {
  passwordLength = prompt ("password length needs to be 8-128 characters")
}
// running boolion to get what characters needed 

var lowerLet = confirm ("Will you need lower case letters in your password?")
var upperLet = confirm ("Will you need upper case letters in your password?")
var passNumber = confirm ("Will your password need any numbers?")
var specialSym = confirm ("Will your password need any symbols in it")


// remember we need the questions to reppet if all are no !!!! means know
while (!lowerLet || !upperLet || !passNumber || !specialSym) {
  lowerLet = confirm ("Will you need lower case letters in your password?")
  upperLet = confirm ("Will you need upper case letters in your password?")
  passNumber = confirm ("Will your password need any numbers?")
  specialSym = confirm ("Will your password need any symbols in it")
}

// create character sets
var char = "";

if (lowerLet){
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  char += lowerChar
}
if (upperLet){
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  char += upperChar
}
if (passNumber){
  var numberChar = "0123456789";
  char += numberChar
}
if (specialSym){
  var specChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  char  += specChar
}
console.log (char.length)
//  Add event listener to generate button
   generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");


