// Assignment Code
var generateBtn = document.querySelector("#generate");
var passGenArray = [];
var uppercaseLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];

// Write password to the #password input
function userPassCriteria(){
  var passwordLength = prompt("How many characters would you like your password to be? Choose between 8 and 128");
  var passUpperCase = confirm("Would you like to use Uppercase?");
  var passLowerCase = confirm("Would you like to use Lowercase?");
  var passNumbers = confirm("Would you like to use Numbers?");
  var passSpecialChar = confirm("Would you like to use Special Characters?");
  
  
  var userCriteriaObj = {
    passwordLength: passwordLength,
    passUpperCase: passUpperCase,
    passLowerCase: passLowerCase,
    passNumbers: passNumbers,
    passSpecialChar: passSpecialChar,
  }
  
  return userCriteriaObj; 

  }

function generatePassword() {
  var userCriteria = userPassCriteria();

    if (userCriteria.passUpperCase) {
      passGenArray = passGenArray.concat(uppercaseLettersArray);
      
    }
    if (userCriteria.passLowerCase) {
      passGenArray = passGenArray.concat(lowercaseLettersArray);

    }
    if (userCriteria.passNumbers) {
      passGenArray = passGenArray.concat(numbersArray);

    }
    if (userCriteria.SpecChar) {
      passGenArray = passGenArray.concat(specialCharactersArray);

    }
    for (var i = 0; i < passwordLength; i++) {
      var letter = passGenArray[Math.floor(Math.random() * passGenArray.length)];
      var myPassword = myPassword + randomCharacter;
      //write the logic on each loop to pick on random character from passGenArray array.
      //push this random character into (something)
    }

    // return to something

    // reset stats (maybe?)
    
  }


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);