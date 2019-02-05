var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");

var puppyImg = new Image();

var puppyMessage = "Hello World";

var timeWrapper = document.getElementById("time-wrapper");

puppyImg.onload = function() {
  ctx.drawImage(puppyImg, 0, 0);
  ctx.fillStyle = "#FF0000";
  ctx.font = "30px Monoton";
  ctx.textAlign = "center";
  canvas.textBaseline = "bottom";
  ctx.fillText(puppyMessage, canvas.width / 2, canvas.height - 60);
};
puppyImg.src = "img/puppy1.jpg";

window.setInterval(function() {
  /// call your function here
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  timeWrapper.innerHTML = hour + ":" + minute + ":" + second;
}, 1000);
