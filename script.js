// When button is clicked, a series of prompts is presented




// Assignment Code
const generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

const passwordLength = prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters.");

const lowercaseCharacters = confirm("Do you want to include lowercase characters?");
const uppercaseCharacters = confirm("Do you want to include uppercase characters?");
const numericCharacters = confirm("Do you want to include numeric characters?");
const specialCharacers = confirm("Do you want to include special characters?");


// const  password = generatePassword();

const passwordText = document.querySelector("#password");

  passwordText.value = password;

}





// The password can include special characters. 
// If you’re unfamiliar with these, see this 
// [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.