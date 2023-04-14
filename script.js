// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// The password can include special characters. 
// If you’re unfamiliar with these, see this 
// [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.