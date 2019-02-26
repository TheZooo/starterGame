var w = window.innerWidth; //window width
var h = window.innerHeight; //window height
var ballA = new ballA(); //creates global object ballA
var ballB = new ballB(); //creates global object ballB
var ballSizeA = 30; //Global ballA size
var ballSizeB = 30; //Global ballB size
var baseBallSpeedA = 5; //To reset speedA
var ballSpeedA = baseBallSpeedA; //Set speed of ballA
var ballSprintA = 8; //Sprint speed
var stamA = 80; //Stamina for sprinting
var stamMaxA = 60; //Max staminaA
var baseBallSpeedB = 5; //To reset speedB
var ballSpeedB = baseBallSpeedB; //Set speed of ballB
var ballSprintB = 8; //Sprint speed
var stamB = 80; //Stamina for sprinting
var stamMaxB = 60; //Max staminaB
var d; //Distance
var tacked = ["BOPPED", "TACKLED", "TRAMPLED", "DOMINATED", "CAUGHT", "PUNCHED"]; //Wow

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(220);
  line(ballA.x,ballA.y,ballB.x,ballB.y);
  d = Math.floor(dist(ballA.x,ballA.y,ballB.x,ballB.y));
  if (d < ballSizeA) {
    collision();
    noLoop();
  }
  ballA.show();
  ballA.move();
  ballB.show();
  ballB.move();
  document.getElementById('dis').innerHTML = "Distance of line: " + d + " :::" + " Controls: Player1: WASD and shift ::: Player2: IJKL and space";
  document.getElementById('playA').innerHTML = "Player1 stamina: " + stamA;
  document.getElementById('playB').innerHTML = "Player2 stamina: " + stamB;
}

function ballA() { //Global object "ball"
  this.x = 50;
  this.y = 50;
  this.show = function() { //Created function "ballA.show()"
    fill(color('red'));
    ellipse(this.x,this.y,ballSizeA,ballSizeA);
  };
  this.move = function() { //Created function "ballA.move()"
    if (keyIsDown(65)) { //Left
      this.x -= ballSpeedA;
    }
    if (keyIsDown(68)) { //Right
      this.x += ballSpeedA;
    }
    if (keyIsDown(87)) { //Up
      this.y -= ballSpeedA;
    }
    if (keyIsDown(83)) { //Down
      this.y += ballSpeedA;
    }
    if (keyIsDown(16)) { //Speed up for A
      if (stamA > 0) {
        stamA--;
        ballSpeedA = ballSprintA;
      }
    } else {
      if (stamA < stamMaxA) {
        stamA++;
      }
    }
    if (stamA === 0) {
      ballSpeedA = baseBallSpeedA;
    }
    if (this.x < ballSizeA) { //Border Left
      this.x = ballSizeA;
    } else if (this.x > w - ballSizeA) { //Border Right
      this.x = w - ballSizeA;
    }
    if (this.y < ballSizeA) { //Border Up
      this.y = ballSizeA;
    } else if (this.y > h - ballSizeA) { //Border Down
      this.y = h - ballSizeA;
    }
  };
}

function ballB() { //Player 2 ballB()
  this.x = w;
  this.y = h;
  this.show = function() {
    fill(color('blue'));
    ellipse(this.x,this.y,ballSizeB,ballSizeB);
  };
  this.move = function() {
    if (keyIsDown(74)) { //Left
      this.x -= ballSpeedB;
    }
    if (keyIsDown(76)) { //Right
      this.x += ballSpeedB;
    }
    if (keyIsDown(73)) { //Up
      this.y -= ballSpeedB;
    }
    if (keyIsDown(75)) { //Down
      this.y += ballSpeedB;
    }
    if (keyIsDown(32)) {
      if (stamB > 0) {
        stamB--;
        ballSpeedB = ballSprintB;
      }
    } else {
      if (stamB < stamMaxB) {
        stamB++;
      }
    }
    if (stamB === 0) {
      ballSpeedB = baseBallSpeedB;
    }
    if (this.x < ballSizeB) { //Border Left
      this.x = ballSizeB;
    } else if (this.x > w - ballSizeB) { //Border Right
      this.x = w - ballSizeB;
    }
    if (this.y < ballSizeB) { //Border Up
      this.y = ballSizeB;
    } else if (this.y > h - ballSizeB) { //Border Down
      this.y = h - ballSizeB;
    }
  };
}

function collision() {
  var rand = Math.floor(Math.random() * tacked.length);
  window.alert(tacked[rand]);
  location.href = "starterGame.html";
}
