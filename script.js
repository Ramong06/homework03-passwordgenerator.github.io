// Assigned Variables
var generateBtn = document.querySelector("#generate");
var passGenArray = [];
var uppercaseLettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
var counter = 0

// Write password to the #password input
function userPassCriteria(){
  if (counter === 5) {
    alert("You have made too many attempts. You must now refresh the page.");
    window.AbortController.apply()
  }
  var passwordLength = prompt("How many characters would you like your password to be? Choose between 8 and 128");

// If user does not enter a value in Password Length prompt they will see this alert
  if (!passwordLength) {
    alert("This needs a value");
    counter++;
    userPassCriteria()
  } 
  
  else if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = alert("You must choose a value between 8 and 128");
  counter++;
  userPassCriteria()
  }

  else {
  var passUpperCase = confirm("Would you like to use Uppercase?");
  var passLowerCase = confirm("Would you like to use Lowercase?");
  var passNumbers = confirm("Would you like to use Numbers?");
  var passSpecialChar = confirm("Would you like to use Special Characters?");
  }
  
  // This is the object where all my Password Criteria is stored
  var userCriteriaObj = {
    passwordLength,
    passUpperCase,
    passLowerCase,
    passNumbers,
    passSpecialChar
  }
  
  return userCriteriaObj; 
  
}

// this should enter the criteria into the generated password
function generatePassword() {
  var userCriteria = userPassCriteria();

    if (!userCriteria.passUpperCase && !userCriteria.passLowerCase && !userCriteria.passNumbers && !userCriteria.passSpecialChar) {
      alert("You must choose at least one character type.");
      counter++;
      generatePassword();
   }

     var password = "";

    if (userCriteria.passUpperCase) {
      passGenArray = passGenArray.concat(uppercaseLettersArray);
      
    }
    if (userCriteria.passLowerCase) {
      passGenArray = passGenArray.concat(lowercaseLettersArray);

    }
    if (userCriteria.passNumbers) {
      passGenArray = passGenArray.concat(numbersArray);

    }
    if (userCriteria.passSpecialChar) {
      passGenArray = passGenArray.concat(specialCharactersArray);

    }

    for (var i = 0; i < userCriteria.passwordLength; i++) {
      var randomChar = passGenArray[Math.floor(Math.random() * passGenArray.length)];

      password = password + randomChar;
      
    }

    return password;
    
}

// This should write the generated password in the text box.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);