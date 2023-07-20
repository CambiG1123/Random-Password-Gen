// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// step 1. prompt the user for password criteria
      // a. password length >= 8 <= 128
//       b. lowercase, uppercase, numbers, special characters
// step 2. Validate input. 
// step 3. Display generated password to the page.

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
