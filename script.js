// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const numbers = [0,1,2,3,4,5,6,7,8,9]
const uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lowercaseLetters = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`] 
const specialChars = [`?`,`!`,`@`,`#`,`$`,`%`,`&`,`*`]
var charChoice = [];
var minCharLength = 8
   
// step 1. prompt the user for password criteria
      // a. password length >= 8 <= 128
//       b. lowercase, uppercase, numbers, special characters
// step 2. Validate input. 
// step 3. Display generated password to the page.

function generatePassword() {


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
