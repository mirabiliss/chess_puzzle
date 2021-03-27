const form  = document.getElementsByTagName('form')[0];

let username = document.getElementById("username");
let password = document.getElementById("pwd");

function checkPassword(p) { 
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(p);
}

function checkUsername(input) {
  return /^(?!.*[_.]{2})[a-zA-Z_.0-9]{5,}$/g.test(input);
}

function validate() { 
  if (!checkUsername(username.value)) {
    alert('Username should be at least 5 characters long.\
    \nOnly latin letters, digits, underscore and dot are allowed. \
    \nUnderscore must not follow a dot and vice versa.')
  } 
  if (!checkPassword(password.value)) {
    alert('Password should be at least 8 characters long \
    \nand contain at least \n- 1 digit, \
    \n- 1 lowercase letter, \n- 1 uppercase letter. \
    \nOnly latin letters are allowed. \
    \nPlease try again.');
  } 
  

}
