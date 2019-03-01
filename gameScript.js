var w = window.innerWidth; //window width
var h = window.innerHeight; //window height

var ballA = new ballA(); //creates global object ballA
var ballB = new ballB(); //creates global object ballB

var powerA = new powerA(); //MORE OBJECTS
var powerB = new powerB(); //MORE OBJECTS

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
var staminaBalance = 5; //Punishes spamming the shift key

var d; //Distance

var powerSize = 20;
var powerOneAct = false;
var dPowerAA;
var dPowerAB;
var powerOneAppear;

var powerTwoAct = false;
var dPowerBA;
var dPowerBB;
var powerTwoAppear;

var beginCheck = false;
var time = 60; //Timer set to avoid
var triggerTime = time - 8; //Used in draw function
var timerInterval = setInterval(winCondition, 1000); //Timer decrements by 1 second

var tacked = ["BOPPED", "TACKLED", "TRAMPLED", "DOMINATED", "CAUGHT", "PUNCHED"]; //Wow
var winned = ["AVOIDED", "JUKED", "WINNER", "DITCHED", "LAPPED", "DODGED"]; //Wow

function setup() {
  createCanvas(w, h);
  document.getElementById('disTime').innerHTML = time;
  var limitTime = time - 25;
  powerOneAppear = Math.floor(Math.random() * limitTime) + 20;
  powerTwoAppear = Math.floor(Math.random() * limitTime) + 20;
}

function draw() {
  background(220);
  d = Math.floor(dist(ballA.x,ballA.y,ballB.x,ballB.y));
  if (d < ballSizeA) {
    collision();
    noLoop();
  }
  if (time < powerOneAppear && powerOneAct === false) {
    powerA.show();
    dPowerAA = Math.floor(dist(ballA.x,ballA.y,powerA.x,powerA.y));
    dPowerAB = Math.floor(dist(ballB.x,ballB.y,powerA.x,powerA.y));
  }
  if (time < powerTwoAppear && powerTwoAct === false) {
    powerB.show();
    dPowerBA = Math.floor(dist(ballA.x,ballA.y,powerB.x,powerB.y));
    dPowerBB = Math.floor(dist(ballB.x,ballB.y,powerB.x,powerB.y));
  }
  
  ballA.show();
  ballA.move();
  ballB.show();
  ballB.move();
  
  var x = w - (ballSizeA * 2);
  var y = h - (ballSizeA * 2);
  strokeWeight(2);
  noFill();
  rect(ballSizeA,ballSizeA,x,y);
  
  if (time > triggerTime) {
    document.getElementById('dis').innerHTML = "Distance between Players: " + d + " :::" + " Controls: Player1: WASD and shift ::: Player2: IJKL and space";
  } else {
    document.getElementById('dis').innerHTML = "Distance between Players: " + d;
  }
  document.getElementById('playA').innerHTML = "Player1 stamina: " + stamA;
  document.getElementById('playB').innerHTML = "Player2 stamina: " + stamB;
  document.getElementById('dump').innerHTML = powerOneAct + " " + dPowerAA + " " + dPowerAB + " " + powerOneAppear;
}

function start() {
  beginCheck = true;
}

function ballA() { //Global object "ball"
  this.x = 50;
  this.y = 50;
  this.show = function() { //Created function "ballA.show()"
    fill(color('red'));
    ellipse(this.x,this.y,ballSizeA,ballSizeA);
  };
  this.move = function() { //Created function "ballA.move()"
    if (beginCheck === true) {
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
        if (stamA < stamMaxA) { //Regenerate StamA
          stamA++;
        }
      }
      if (stamA === 0) { //Resets the speed if stamina runs out
        ballSpeedA = baseBallSpeedA;
      }
      if (stamA < 0) {
        stamA = 0;
      }
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
  this.x = w - 50;
  this.y = h - 50;
  this.show = function() {
    fill(color('blue'));
    ellipse(this.x,this.y,ballSizeB,ballSizeB);
  };
  this.move = function() {
    if (beginCheck === true) {
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
      if (keyIsDown(32)) { //Speed up for B
        if (stamB > 0) {
          stamB--;
          ballSpeedB = ballSprintB;
        }
      } else {
        if (stamB < stamMaxB) { //Regenerate StamA
          stamB++;
        }
      }
      if (stamB === 0) { //Resets the speed if stamina runs out
        ballSpeedB = baseBallSpeedB;
      }
      if (stamB < 0) {
        stamB = 0;
      }
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

function powerA() {
  var compactX = w - powerSize;
  var compactY = h - powerSize;
  var randX = Math.floor(Math.random() * compactX);
  var randY = Math.floor(Math.random() * compactY);
  this.x = randX;
  this.y = randY;
  this.show = function() {
    fill(color('yellow'));
    ellipse(this.x,this.y,powerSize,powerSize);
  };
}

function powerB() {
  var compactX = w - powerSize;
  var compactY = h - powerSize;
  var randX = Math.floor(Math.random() * compactX);
  var randY = Math.floor(Math.random() * compactY);
  this.x = randX;
  this.y = randY;
  this.show = function() {
    fill(color('green'));
    ellipse(this.x,this.y,powerSize,powerSize);
  };
}

function keyPressed() {
  if (beginCheck === true) {
    if (keyCode == "16") {
      stamA -= staminaBalance;
    }
    if (keyCode == "32") {
    stamB -= staminaBalance;
  }
  }
  
}

function collision() { //When the two player collide
  var rand = Math.floor(Math.random() * tacked.length);
  window.alert(tacked[rand] + " -P2 win");
  location.href = "starterGame.html";
}

function winCondition() { //When the player is able to avoid the opponent
  var rand = Math.floor(Math.random() * winned.length);
  time--;
  document.getElementById('disTime').innerHTML = time;
  if (time === 0) {
    window.alert(winned[rand] + " -P1 win");
    location.href = "starterGame.html";
  }
}
