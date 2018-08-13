var canvas  = document.getElementById("canvas");
var canvas2  = document.getElementById("canvas2");
var canvas21  = document.getElementById("canvas21");


var ctx = canvas.getContext("2d");
var ctx2 = canvas2.getContext("2d");
var ctx21 = canvas21.getContext("2d");


var gravity = 0.10;

var ball = {
  x:100,
  y:100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "#2e7d32",
  draw: function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

// ball.draw();

function update(){
  hitBottom();
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  ball.vy += gravity;
  ball.x += ball.vx;
  ball.y += ball.vy;
  if(ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0){
    ball.vy *= -1;
  }
  if(ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0){
    ball.vx *= -1;
  }
  ball.draw();
}

function hitBottom(){
  var rockbottom = canvas.height - ball.radius;
  if(ball.y > rockbottom){
    ball.y = rockbottom;
    clearInterval(intervalId)
  }
}

setInterval(update, 20)

document.getElementById("faster").onclick = function(){
  ball.vx *= 1.1;
}

document.getElementById("slower").onclick = function(){
  ball.vx *= 0.2;
}

////// canvas 2 ////

function draw (){
  var ctx = document.getElementById('canvas2').getContext('2d');
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
}
draw();

ctx21.save() // saving the original state
ctx21.fillStyle = "rgb(0,255,255)";
ctx21.translate(10, 10);
ctx21.fillRect(0, 0, 25, 25);
ctx21.restore(); // making xy back to 00, original state

ctx21.save()
ctx21.fillStyle = ctx21.fillStyle = "rgb(0,255,255)";
ctx21.translate(60, 10);
ctx21.fillRect(0, 0, 25, 25);
ctx21.restore(); 




 function draw2() {
  var ctx = document.getElementById('canvas3').getContext('2d');

  ctx.fillRect(0, 0, 150, 150);   // Draw a rectangle with default settings
  ctx.save();                  // Save the default state
 
  ctx.fillStyle = '#09F';      // Make changes to the settings
  ctx.fillRect(15, 15, 120, 120); // Draw a rectangle with new settings

  ctx.save();                  // Save the current state
  ctx.fillStyle = '#FFF';      // Make changes to the settings
  ctx.globalAlpha = 0.5; 
  ctx.fillRect(30, 30, 90, 90);   // Draw a rectangle with new settings

  ctx.restore();               // Restore previous state
  ctx.fillRect(45, 45, 60, 60);   // Draw a rectangle with restored settings

  ctx.restore();               // Restore original state
  ctx.fillRect(60, 60, 30, 30);   // Draw a rectangle with restored settings
}

draw2()
