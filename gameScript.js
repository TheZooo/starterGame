var w = window.innerWidth; //window width subtracted by border size
var h = window.innerHeight; //window height subtracted by border size
var ball = new ball(); //creates global object
var ballSize = 50; //Global ball size
var tick = false;

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(255);
  ball.show();
  ball.move();
}

function ball() { //Global object "ball"
  this.x = 100;
  this.y = 100;
  this.show = function() { //Created function "ball.show()"
    fill(color('red'));
    ellipse(this.x,this.y,ballSize,ballSize);
    document.getElementById('dis').innerHTML = "x: " + this.x + " y: " + this.y;
  };
  this.move = function() { //Created function "ball.move()"
    if (keyIsDown(65)) { //Left
      this.x -= 10;
    }
    if (keyIsDown(68)) { //Right
      this.x += 10;
    }
    if (keyIsDown(87)) { //Up
      this.y -= 10;
    }
    if (keyIsDown(83)) { //Down
      this.y += 10;
    }
    if (this.x < ballSize) { //Border Left
      this.x = ballSize;
    } else if (this.x > w - ballSize) { //Border Right
      this.x = w - ballSize;
    }
    if (this.y < ballSize) { //Border Up
      this.y = ballSize;
    } else if (this.y > h - ballSize) { //Border Down
      this.y = h - ballSize;
    }
  };
}
