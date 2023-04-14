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


const passwordLength = prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters.");
const includeLowercase = confirm("Do you want to include lowercase characters?");
const includeUppercase = confirm("Do you want to include uppercase characters?");
const includeNumeric = confirm("Do you want to include numeric characters?");
const includeSpecial = confirm("Do you want to include special characters?");

function generatePassword() {

};