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

function drawChart() {
  let dataCounts = []
  let dataHistory = []
  dataHistory.push('wr');
  dataHistory.push('wb');
  dataHistory.push('wp');
  dataHistory.push('wk');
  dataHistory.push('wn');
  dataHistory.push('wq');
  dataHistory.push('bb');
  dataHistory.push('bn');
  dataHistory.push('bp');
  dataHistory.push('br');
  dataHistory.push('bq');
  dataHistory.push('bk');

  for (let i = 0; i < dataHistory.length; i++) {
    dataCounts.push(document.getElementsByClassName(`${dataHistory[i]}`).length);
  }

  var ctx = document.getElementById('chart');
  
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [...dataHistory],
      datasets: [{
        borderColor: [
          'rgb(244, 10, 10)',
          'rgb(248, 129, 32)',
          'rgb(247, 216, 43)', 
          'rgb(248, 243, 124)',
          'rgb(128, 248, 124)',
          'rgb(13, 160, 44)',
          'rgb(157, 250, 233)',
          'rgb(51, 199, 244)',
          'rgb(9, 52, 239)',
          'rgb(141, 27, 247)',
          'rgb(200, 27, 247)',
          'rgb(249, 51, 206)',
          'rgb(244, 10, 10)'
          ],
        backgroundColor: [
          'rgba(244, 10, 10, 0.75)',
          'rgba(248, 129, 32, 0.75)',
          'rgba(247, 216, 43, 0.75)', 
          'rgba(248, 243, 124, 0.75)',
          'rgba(128, 248, 124, 0.75)',
          'rgba(13, 160, 44, 0.75)',
          'rgba(157, 250, 233, 0.75)',
          'rgba(51, 199, 244, 0.75)',
          'rgba(9, 52, 239, 0.75)',
          'rgba(141, 27, 247, 0.75)',
          'rgba(200, 27, 247, 0.75)',
          'rgba(249, 51, 206, 0.75)',
          ],
        data: [...dataCounts, 0]
      }]
    },
    options: {}
  });

}