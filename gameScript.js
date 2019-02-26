var w = window.innerWidth; //window width subtracted by border size
var h = window.innerHeight; //window height subtracted by border size
var startAmount = 2;
var ball0 = new ball0(); //creates global object ballA
var ball1 = new ball1(); //creates global object ballB
var ballSize = 50; //Global ball size

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(255);
  ball0.show();
  ball0.move();
  ball1.show();
  ball1.move();
}

function ball0() { //Global object "ball"
  this.x = 100;
  this.y = 100;
  this.show = function() { //Created function "ballA.show()"
    fill(color('red'));
    ellipse(this.x,this.y,ballSize,ballSize);
    document.getElementById('dis').innerHTML = "x: " + this.x + " y: " + this.y;
  };
  this.move = function() { //Created function "ballA.move()"
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

function ball1() { //Player 2 ballB()
  this.x = 200;
  this.y = 200;
  this.show = function() {
    fill(color('blue'));
    ellipse(this.x,this.y,ballSize,ballSize);
  };
  this.move = function() {
    if (keyIsDown(74)) { //Left
      this.x -= 10;
    }
    if (keyIsDown(76)) { //Right
      this.x += 10;
    }
    if (keyIsDown(73)) { //Up
      this.y -= 10;
    }
    if (keyIsDown(75)) { //Down
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
