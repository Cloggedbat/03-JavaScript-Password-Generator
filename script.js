// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  results = "";

  var passwordLength = "";
  console.log(generatePassword)

  // Validate the Password length 
  while (isNaN(parseInt(passwordLength)) || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    passwordLength = prompt("Please enter the number of characters you would like in the password it must  be between 8-128 characters")
  }
  // running boolion to get what characters needed 

  var lowerLet = confirm("Will you need lower case letters in your password? Ok for yes cancel for no")
  var upperLet = confirm("Will you need upper case letters in your password? Ok for yes cancel for no")
  var passNumber = confirm("Will your password need any numbers? Ok for yes cancel for no")
  var specialSym = confirm("Will your password need any symbols in it Ok for yes cancel for no")


  // remember we need the questions to reppet if all are no !!!! means know
  while (!lowerLet && !upperLet && !passNumber && !specialSym) {
    lowerLet = confirm("Will you need lower case letters in your password? Ok for yes cancel for no")
    upperLet = confirm("Will you need upper case letters in your password? Ok for yes cancel for no")
    passNumber = confirm("Will your password need any numbers? Ok for yes cancel for no")
    specialSym = confirm("Will your password need any symbols in it Ok for yes cancel for no")
  }

  // create character sets
  var char = "";
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var numberChar = "0123456789";
  // "abcdefghijklmnopqrstuvwxyz" was attempting to use an array over a string has not made a diffrence ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  if (lowerLet) {
    char += lowerChar
    // console.log(lowerLet)

  }
  if (upperLet) {
    char += upperChar
    // console.log(upperChar)
  }
  if (passNumber) {
    char += numberChar
    // console.log(numberChar)
  }
  if (specialSym) {
    char += specChar
    // console.log(specialSym)
  }

  var randomPass = "";



  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * char.length)
    randomPass += char[randomNumber]
  } return (randomPass)
}







