Day One Notes

        Goal:
            **- find a starting point, this is not like the bootstrap work
            **- String are needed, so i am working with those now
            **- What would be the best way ro have our's set up
                *- We will start with the alerts but may want to move on and chang the css to be better used


                Working with the code we need
                    Click 
                    Prompt
                    generate
                    prompt
                    generate
                    prompt
        I think they are all 



        // created a prompt to ask how long is the password

// select criteria for the password decision making 


// create another prompt for the leangth of the password between 8 and 128

// crate a propt for the criteria  like uper case

// create prompr for the numbers

// create code for !@#!#!@#!@#!@#!$!@$!@//#

// if Null / no leaght has been specified then ask question agian

// when all the prompts have been asked and answered generate questions
      // have one collections of possibilitys of all the specified peramiters 
      // What is needed 
// Add event listener to generate button









// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays to be used in creating code

var uppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spacChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// declarations being used below
var uppCase
var lowCase
var number
var spacChar

// prompt 1 declaration of # of characters being used
function writePassword() {
  var confirmlenght = (prompt("how many charachter does your password need to be?"));


// loop is used if the answer given is to long or short 
while(confirmlenght <= 7 || confirmlenght>= 51) {
  alert("password must be between 8 and 128 characters in lenght!!!");
var confirmlenght = ("how many charachter does your password need to be?")
}
  



// // console.log(howMuch)

//   // var spacChar = prompt("Does it need to contain special caracters?(yes or no)");
//   //   if ()



//   //   var howMuch = prompt("how many charachter does your password need to be?");
//   //   if (howMuch >8) {
//   //   alert("password must be between 8 and 128 characters in lenght.");  
//   //   }




 
// console.log(howMuch)
// if (howMuch>= 8){
//   var spacChar = prompt("Does it need to contain special caracters?(yes or no)");
//   var number = prompt("Does the password contain numbers? (yes or no)");
//   var uppCase = prompt("Does it need to contain capital letters? (yes or no)");
//   var lowCase = prompt("Does it need to have lower case letters? (yes or no)");
//   console.log(spacChar);
//   console.log(number);
//   console.log(uppCase);
//   console.log(lowCase)
// } 
  

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);