// Attempting on my own - second attempt. It works.

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

  // Asks the user a set of questions, and assigns their values to variables
  function generatePassword() {
    const passwordLength = prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters.");

    // Check if the user has used a whole number
    const pwlength = Number(passwordLength);
    if (!Number.isInteger(pwlength)) {
      alert("You must input a whole number");
      return "";
    } 

      // Check if the user has selected a password length greater than 128
      if (passwordLength > 128) {
        alert("You must select a password between 8 and 128");
        return "";
      }

    // Check if the user has selected a password length less than 8
    if (passwordLength < 8) {
      alert("You must select a password between 8 and 128 characters");
      return "";
    }

    const includeLowercase = confirm("Do you want to include lowercase characters?");
    const includeUppercase = confirm("Do you want to include uppercase characters?");
    const includeNumeric = confirm("Do you want to include numeric characters?");
    const includeSpecial = confirm("Do you want to include special characters?");

    let availableChars = [];
    console.log("includeLowercase length = " + lowercase.length);
    console.log(lowercase);
    if (includeLowercase) {
      availableChars = availableChars.concat(lowercase);
      console.log("availableChars length = " + availableChars.length);

      console.log(availableChars);
    }
    if (includeUppercase) {
      availableChars = availableChars.concat(uppercase);
      console.log("availableChars length = " + availableChars.length);

      console.log(availableChars);
    }
    if (includeNumeric) {
      availableChars = availableChars.concat(numeric);
      console.log("availableChars length = " + availableChars.length);

      console.log(availableChars);
    }

    if (includeSpecial) {
      availableChars = availableChars.concat(special);
      console.log("availableChars length = " + availableChars.length);

      console.log(availableChars);
    }

    if (availableChars.length == 0) {
      alert("You must choose a character type");
      return "";
    }

    let generatedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const random = Math.floor(Math.random() * availableChars.length);
      console.log(random);
      console.log("add a character");
      generatedPassword = generatedPassword + availableChars[random];
      console.log(generatedPassword);
    }
    return generatedPassword;
  };
}
