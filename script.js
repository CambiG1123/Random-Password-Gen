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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function displayPrompts(){
  // ensures that the character choices are reset when displayPrompts is ran
  charChoice =[];
  // displays a prompt asking for the length of the password and converts the given string into an integer
  minCharLength = parseInt(prompt("How many characters would you like your password to be? (Min 8 Max 128)"));
// if user inputs a string that is not a number ie 'ten' they will be alerted and this snippet will repeat
  if(isNaN(minCharLength) || minCharLength < 8 || minCharLength > 128) { 
    alert("Must be a number. Please try again");
    return false;

}

  // asks the user if they would like to include lower case letters. If they confirm they do the current empty array of charChoice will be concatenated with the lowercaseLetters array.
  if (confirm('Would you like to include lower case letters "abc" ?')){
    charChoice = charChoice.concat(lowercaseLetters);
  }
  // asks the user if they would like uppercase letters. If they confirm they do the charChoice array is concatenated with the uppercaseLetters array.
  if (confirm('Would you like to include uppercase letters "ABC" ?')){
    charChoice = charChoice.concat(uppercaseLetters);
  }
  // asks the user if they would like special characters. If they confirm they do the charChoice array is concatenated with the specialChars array. 
  if (confirm('Would you like to include special characters "!@#$" ?')){
    charChoice = charChoice.concat(specialChars);
  }
  // asks the user if they would like numbers. If they confirm they do the charChoice array is concatenated with the numbers array. 
  if (confirm('Would you like to include numbers "1234" ?')){
    charChoice = charChoice.concat(specialChars);
  }
  return true;
}


function generatePassword() {

  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

