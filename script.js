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

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}