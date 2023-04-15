// Assigns variable to button in HTML
const generateBtn = document.querySelector("#generate");

// Adds event listener so that when the button is clicked, writePassword function occurs
generateBtn.addEventListener("click", writePassword);

// Arrays of options to generate password from
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["!", "$", "#", "%", "&", "(", ")", "*", ".", ",", "-", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "-", "_", "~", "|", "{", "}", "+"];

// Writes the generated password to the #password input in HTML
function writePassword() {
  let password = generatePassword();
  console.log(password);
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Asks the user a set of questions, and assigns their values to variables
function generatePassword() {

  // How many characters (and converts the string to a number using pareInt)
  const passwordLength = parseInt(prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters."));


  // Check if the user has selected a password length greater than 128
  if (passwordLength > 128) {
    alert("You must select a password between 8 and 128");
    return "Max is 128";
  }

  // Check if the user has selected a password length less than 8
  if (passwordLength < 8) {
    alert("You must select a password between 8 and 128 characters");
    return "Min is 8";
  }

  if(isNaN(passwordLength)){
    return "Please enter numbers"
  }
  // Include lowercase?
  const includeLowercase = confirm("Do you want to include lowercase characters?");

  // Include uppercase?
  const includeUppercase = confirm("Do you want to include uppercase characters?");

  // Include numbers?
  const includeNumeric = confirm("Do you want to include numeric characters?");

  // include special characters?
  const includeSpecial = confirm("Do you want to include special characters?");

  // Use all of these criteria to generate a random password and return its value to the input text area
  var validCharacters = []

  if (includeLowercase) {
    validCharacters = validCharacters.concat(lowercase)
  }

  if (includeUppercase) {
    validCharacters = validCharacters.concat(uppercase)
  }

  if (includeSpecial) {
    validCharacters = validCharacters.concat(special)
  }

  if (includeNumeric) {
    validCharacters = validCharacters.concat(numeric)
  }

if (validCharacters.length == 0) {
  alert("You must select at least one character type");
  return "";
}

  console.log(validCharacters);

  var password = ""
  for(let i=0;i<passwordLength;i++){
    var randomIndex = Math.floor(Math.random() * validCharacters.length)
    password += validCharacters[randomIndex]
  }
return password;

}
