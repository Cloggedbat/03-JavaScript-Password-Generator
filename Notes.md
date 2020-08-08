Notes
Link to Password Genorator: https://cloggedbat.github.io/03-JavaScript-Password-Generator/
        Goal:
            **- find a starting point, this is not like the bootstrap work
            **- String are needed, so i am working with those now
            **- What would be the best way ro have our's set up
                *- We will start with the alerts but may want to move on and chang the css to be better used

Ok so madness ensude on this howework, I ended up tryed a few ways. In my first attempt, and that  was a miserable attempt I flowndered in even figuring out how to start. Soo i focused on what I know needed to work and that was the button. So I fought and fought and fought untill finly i got it to work. It did not have any vars to pull from but a prompt would show itself. Then on the advise of a fellow student ran down a rabbit whole that is the char codes. This didnt not help me other then make me more confused and angry.

Soooooo I deleted the JS code grabbed a new copy of the given code and started again, I lost functionality of the button for a day (that was great). After a day of looking at if/else statements, i started agian, this time i was able to get the prompt to somtimes pop up on the click. and run though... and then my spigetti code cracked and fell apart. 

Then i restarted again for the 3rd time with my study group and the golden ticket was the "While loop", that was a game changer, getting the propts being responsive over just being prompts was helped get me in the right direction. 

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