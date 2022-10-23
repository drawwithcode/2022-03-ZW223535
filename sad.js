let myGif;
let mySound;

function preload() {
  myGif = loadImage("./assets/image/TooSad.gif");
  mySound = loadSound("./assets/sound/Lament Of The Ancients_Fulero_Sad.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  background("black");

  push();
  if (capture.loadedmetadata) {
    translate(width, 0);
    scale(-1, 1);
    image(capture, 0, 0, width, height);
    filter(GRAY);
  }
  pop();

  if (mySound.isPlaying() === false) {
    mySound.play();
  }

  push();
  var op = map(mouseX, 0, width, 40, 120);
  imageMode(CENTER);
  tint(255, op);
  image(myGif, width / 2, height / 2, windowWidth, windowHeight);
  filter(GRAY);
  pop();

  push();
  noStroke();
  rectMode(CENTER);
  fill(0, 0, 0, 50);
  rect(width / 2, height / 6, 800, 200, 30);
  pop();

  let msg = "Click to hear the music";
  fill("white");
  textSize(30);
  textFont("Kalam");
  textAlign(CENTER);
  text(msg, width / 2, height / 7);

  let msg2 = "Open your Webcam and move your Mouse";
  fill("white");
  textSize(30);
  textFont("Kalam");
  textAlign(CENTER);
  text(msg2, width / 2, height / 6);
  let msg3 = "Be Sad, but #AESTHETICALLY";
  fill("white");
  textSize(50);
  textFont("Kalam");
  textAlign(CENTER);
  text(msg3, width / 2, height / 4.8);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
