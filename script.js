// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%&";
var allChars = lowercase + uppercase + numbers + symbols;
var randPasswordArray = Array(length);
randPasswordArray[0] = lowercase;
randPasswordArray[1] = uppercase;
randPasswordArray[2] = numbers;
randPasswordArray[3] = symbols;

// Write password to the #password input
function length(){
    var length = validLength();

    return length;
}

function validLength() {
    var lengthInput, valid;
    valid = false;

    while(!valid){
        lengthInput = prompt('Enter character length between 8 and 26');
        if(lengthInput >=8 && lengthInput <= 26){
            valid = true;
        } else {
            alert('Length is not valid')
        }
    }return lengthInput;
}

var Characters = function () {
    var Characters = validCharacters();

    return Characters
    valid = false;
}

function validCharacters() {
    var CharactersInput, valid;
    valid = false;

    while(!valid){
        CharactersInput = prompt('Enter character types: lowercase, uppercase, numbers, and/or symbols');
        if(CharactersInput = lowercase)
          (CharactersInput = uppercase)
          (CharactersInput = numbers)
          (CharactersInput = symbols){
              valid = true;
          } else {
              alert('Types are not valid')
          }
    }return CharactersInput;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
    var length = validLength();

    var Characters = validCharacters();

    
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);