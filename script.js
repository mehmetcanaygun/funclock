var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");

var puppy1 = new Image();
puppy1.src = "img/puppy1.jpg";
var puppy2 = new Image();
puppy2.src = "img/puppy2.jpg";
var puppy3 = new Image();
puppy3.src = "img/puppy3.jpg";

ctx.fillStyle = "#FF0000";
ctx.font = "30px Monoton";
ctx.textAlign = "center";
canvas.textBaseline = "bottom";
ctx.fillText("Hello World", canvas.width / 2, canvas.height - 60);
ctx.drawImage(puppy1, 0, 0);
