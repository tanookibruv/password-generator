// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
      var length = 12,
          charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&",
          randPass = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
          randPass += charset.charAt(Math.random() * n);
      }
      return randPass;
      
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);