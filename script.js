// Original Assignment Code

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays of options to generate password from
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["!", "$", "#", "%", "&", "(", ")", "*", ".", ",", "-", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "-", "_", "~", "|", "{", "}", "+"];

// Create an array to store selected characters
let includedCharacters = [];

// Create a function that asks the users questions, and returns a password based on those answers
function generatePassword() {
  const pwLength = parseInt(prompt("How many characters do you want your password to be? Please choose between 8 and 128."));
  if (pwLength > 128) {
    alert("You must choose a password between 8 and 128 characters");
    return "";
  }
  if (pwLength < 8) {
    alert("You must choose a password between 8 and 128 characters");
    return "";
  }
  if (isNaN(pwLength)) {
    alert("You must choose a password bewtween 8 and 128 characters");
    return "";
  }

  const inLower = confirm("Do you want to include lowercase letters?");
  if (inLower) {
    includedCharacters = includedCharacters.concat(lowercase);
  }

  const inUpper = confirm("Do you want to include uppercase letters?");
  if (inUpper) {
    includedCharacters = includedCharacters.concat(uppercase);
  }

  const inNumeric = confirm("Do you want to include numbers?");
  if (inNumeric) {
    includedCharacters = includedCharacters.concat(numeric);
  }

  const inSpecial = confirm("Do you want to include special characters?");
  if (inSpecial) {
    includedCharacters = includedCharacters.concat(special);
  }

  if (includedCharacters.length == 0) {
    alert("You must choose at least one type of character");
    return "";
  }

  let password = "";

  for (let i = 0; i < pwLength; i++) {
    const randomIndex = Math.floor(Math.random() * includedCharacters.length)
    password += includedCharacters[randomIndex]
  }
  return password;

}



