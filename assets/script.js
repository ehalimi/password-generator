// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Write the code here
function generatePassword() {

  var passwordLengthInput = window.prompt('How many characters do you want your password to have?');

  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var symbolsArray = [".", ",", "?", "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "+", "_", "<", ">"];

  var InputLength = passwordLengthInput;
  if (InputLength >= 8 && InputLength <= 128) {
    InputLength;
  } else {
    window.alert("You need to enter a number between 0 and 128! Please try again!");
    generatePassword();      
    };
  
  var upperCase = confirm("Do you want your password to include uppercase letters?");
      upperCase = uppercaseArray.splice(Math.floor(Math.random() * uppercaseArray.length), InputLength);
      upperCase = upperCase.join('').toString();

  if (upperCase) {
    upperCase;
  } else {
    return false;
  }

  var lowerCase = confirm("Do you want your password to include lowercase letters?");
      lowerCase = lowercaseArray.splice(Math.floor(Math.random() * lowercaseArray.length), InputLength);
      lowerCase = lowerCase.join('').toString();

  if (lowerCase) {
    lowerCase;
  } else {
    return false;
  }

  var symbols = confirm("Do you want your password to include symbols?");
      symbols = symbolsArray.splice(Math.floor(Math.random() * symbolsArray.length), InputLength);
      symbols = symbols.join('').toString();

  if (symbols) {
    symbols;
  } else {
    return false;
  }

  var numbers = confirm("Do you want your password to include numbers?");
      numbers = numbersArray.splice(Math.floor(Math.random() * numbersArray.length), InputLength);
      numbers = numbers.join('').toString();

  if (numbers) {
    numbers;
  } else {
    return false;
  }

  if (upperCase && lowerCase && symbols && numbers === null) {
    window.alert("You should select at least one character type!");
  }

  var userDecision = [upperCase, lowerCase, symbols, numbers];
  var userNumberDecision = InputLength;
  var newPassword = userDecision.join('').slice(0, userNumberDecision);

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


