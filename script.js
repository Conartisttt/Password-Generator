// Assigns variable to button in HTML
const generateBtn = document.querySelector("#generate");

// Adds event listener so that when the button is clicked, writePassword function occurs
generateBtn.addEventListener("click", writePassword);

// Writes the generated password to the #password input in HTML
function writePassword() {
    let password = generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Arrays of options to generate password from
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ['"', "'", "\\", "!", "$", "#", "%", "&", "(", ")", "*", ".", ",", "-", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "-", "_", "~", "|", "{", "}", "+"];

// Asks the user a set of questions, and assigns their values to variables
function generatePassword() {

    let password = "";

    const passwordLength = prompt("How many characters would you like your password to be? Please choose between 8 and 128 characters.");

    // Check if the user has entered a password length less than 8
    if (passwordLength < 8) {
        alert("You must select a password between 8 and 128 characters");
        return passwordLength + " is less than the minimum allowable characters of 8.";
    }

    // Check if the user has entered a password length greater than 128
    if (passwordLength > 128) {
        alert("You must select a password between 8 and 128");
        return passwordLength + " is greater than the maximum allowable characters of 128.";
    }

    // Check if the user is entering a number inside of passwordLength prompt, if not, return error message
    if (isNaN(passwordLength)) {
        alert("You must enter a number")
        return passwordLength + " is not a number. Please enter a number between 8 and 128.";
    }

    const includeLowercase = confirm("Do you want to include lowercase characters?");
    const includeUppercase = confirm("Do you want to include uppercase characters?");
    const includeNumeric = confirm("Do you want to include numeric characters?");
    const includeSpecial = confirm("Do you want to include special characters?");

    let selectedCharacters = [];

    // Check which character types the user wants to include and add them to the selectedCharacters array
    if (includeLowercase) {
        selectedCharacters = selectedCharacters.concat(lowercase);
    }
    if (includeUppercase) {
        selectedCharacters = selectedCharacters.concat(uppercase);
    }
    if (includeNumeric) {
        selectedCharacters = selectedCharacters.concat(numeric);
    }
    if (includeSpecial) {
        selectedCharacters = selectedCharacters.concat(special);
    }

    // Check if the user has selected at least one character type
    if (selectedCharacters.length == 0) {
        alert("You must select at least one character type.");
        return "Without any character types selected, how am I supposed to generate a password? Please select at least one character type.";
    }

    // Generate a random password using the selected characters
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * selectedCharacters.length);
        password += selectedCharacters[randomIndex];
    }
    return password;
}
