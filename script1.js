// This is the version of my project I did with assistance from Tutor. It works.

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

  // Check if the user is entering a number inside of passwordLength prompt, if not, return error message
  if(isNaN(passwordLength)){
    alert("You must enter a number")
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

  // Create an empty array to store your characters based on user choices
  var validCharacters = []

  // if they choose to include lowercase, add them to the validCharacters array
  if (includeLowercase) {
    validCharacters = validCharacters.concat(lowercase)
  }

    // if they choose to include uppercase, add them to the validCharacters array
  if (includeUppercase) {
    validCharacters = validCharacters.concat(uppercase)
  }

    // if they choose to include special characters, add them to the validCharacters array
  if (includeSpecial) {
    validCharacters = validCharacters.concat(special)
  }

  // if they choose to include numbers, add them to the validCharacters array
  if (includeNumeric) {
    validCharacters = validCharacters.concat(numeric)
  }

  // if they did not choose to add any character types, display error message
if (validCharacters.length == 0) {
  alert("You must select at least one character type");
  return "";
}

// set password variable to an empty array
  let password = ""

  // for loop that chooses a random character from validCharacters, and loops it the amount of times entered in passwordLength prompt
  for(let i=0;i<passwordLength;i++){
    const randomIndex = Math.floor(Math.random() * validCharacters.length)
    password += validCharacters[randomIndex] //This is saying password = password + validCharacters[randomIndex]
  }
return password;

}
