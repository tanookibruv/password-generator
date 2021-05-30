// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G,", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "&", "!", "@", "#", "$", "%", "&", "!", "@", "#", "$", "%", "&"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Functions made for random passwords types and lengths
function generatePassword() {
    //Password length
    var length = (prompt('Enter a desired password length'));
    while(length <= 7 || length >= 128) {
        alert('Password length must be between 8-128 characters long, Please re-enter amount');
        var length = (prompt('Enter a desired password length'))
    }

    alert(`Your password will be ${length} characters long.`)

    //Password Character Types
    var yesLower = confirm('Click OK to add lowercase letters in your password?');
    var yesUpper = confirm('Click OK to add uppercase letters in your password?');
    var yesNum = confirm('Click OK to add numbers in your password?');
    var yesSymbol = confirm('Click OK to add symbols in your password?');

    while(yesLower === false && yesUpper === false && yesNum === false && yesSymbol === false) {
        alert('You must choose at least one character type!');
        var yesLower = confirm('Click OK to add lowercase letters in your password?');
        var yesUpper = confirm('Click OK to add uppercase letters in your password?');
        var yesNum = confirm('Click OK to add numbers in your password?');
        var yesSymbol = confirm('Click OK to add symbols in your password?');
    }

    //Assigning password characters
    var passwordChar = []

    if (yesLower) {
        passwordChar = passwordChar.concat(lowerChar)
    }
    if (yesUpper) {
        passwordChar = passwordChar.concat(upperChar)
    }
    if (yesNum) {
        passwordChar = passwordChar.concat(numChar)
    }
    if (yesSymbol) {
        passwordChar = passwordChar.concat(symbols)
    }

    //Randomizing password with selected types
    var randomPass = ""

    for (var i = 0; i < length; i++) {
        randomPass = randomPass + passwordChar[Math.floor(Math.random() * passwordChar.length)];
    }
    return randomPass;
    
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
