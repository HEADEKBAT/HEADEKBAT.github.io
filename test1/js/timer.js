document.addEventListener('DOMContentLoaded', function () {

  var timerWrapperClass = '.timer';
  var timers = new Array(document.querySelectorAll(timerWrapperClass))[0];

  if (localStorage.getItem('timeLeft')) {
      var timeLeft = localStorage.getItem('timeLeft');
  } else {
      var finalHours = 0,
          finalMinutes = 12,
          finalSeconds = 0;
      var timeLeft = finalHours * 3600 + finalMinutes * 60 + finalSeconds;
  }

  function timer() {
      if (timeLeft == 0) {
          clearInterval(timerInterval);
          return;
      }
      timeLeft--;
      var leftHours = Math.floor(timeLeft / 3600);
      var left = timeLeft % 3600;
      var leftMinutes = Math.floor(left / 60);
      var leftSeconds = left % 60;
      if (leftHours < 10) leftHours = '0' + leftHours;
      if (leftMinutes < 10) leftMinutes = '0' + leftMinutes;
      if (leftSeconds < 10) leftSeconds = '0' + leftSeconds;
      var timeArray = [];
      timeArray.push(leftHours);
      timeArray.push(leftMinutes);
      timeArray.push(leftSeconds);
      timers.forEach(function (el) {
          timerDraw(el, timeArray);
      });
      localStorage.setItem('timeLeft', timeLeft);
  };

  function timerDraw(element, timeArray) {
      element.querySelector('.timer-hour').innerHTML = timeArray[0];
      element.querySelector('.timer-minutes').innerHTML = timeArray[1];
      element.querySelector('.timer-seconds').innerHTML = timeArray[2];
  };

  var timerInterval = setInterval(timer, 1000);

});