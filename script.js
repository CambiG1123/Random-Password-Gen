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
  // creates a variable password that represents an empty string
  var password ="";

// create a for loop to generate randomly along the length of the charChoice variable as many times as the minCharLength variable
for(var i = 0; i < minCharLength; i++){
  //creates a new variable randomSet that is equal to the randomly generated characters  
var randomSet = Math.floor(Math.random() * charChoice.length);
  // new variable password is password concatenated with charChoice[randomSet]
var password = password + charChoice[randomSet];
}

return password;


}

// Write password to the #password input
function writePassword() {
  // created a variable to represent the completed displayPrompts function
  var checkedPrompts = displayPrompts();
  var newPasswordText = document.querySelector("#password");

// Create an if statement that checks if checkedPrompts is true and if it is assigns the variable newPassword to represent the generatePassword function

  if (checkedPrompts){
    var newPassword = generatePassword();

    newPasswordText.value = newPassword;

}
return




}

