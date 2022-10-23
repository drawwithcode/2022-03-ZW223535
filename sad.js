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
  angleMode(DEGREES);
}

function draw() {
  background("#e6dbc8");

  //WEBCAM
  push();
  if (capture.loadedmetadata) {
    image(capture, 100, 100, capture.width * 2, capture.height * 2);
    filter(GRAY);
  }
  pop();

  //MUSICA
  if (mySound.isPlaying() === false) {
    mySound.play();
  }

  //PIOGGIA
  push();
  var op = map(mouseX, 0, width, 40, 170);
  tint(255, op);
  image(myGif, 100, 100, capture.width * 2, capture.height * 2);
  filter(GRAY);
  pop();

  push();
  stroke("black");
  strokeWeight(3);
  noFill();
  rect(150, 150, capture.width * 2, capture.height * 2);
  pop();

  push();
  let msg = "Click to hear the music";
  fill("black");
  translate(capture.width * 2 + 200, 200);
  textAlign(LEFT);
  textSize(25);
  textFont("kanit");
  rotate(90);
  text(msg, 0, 0);
  pop();

  push();
  let msg2 = "Open your Webcam and move your Mouse";
  fill("black");
  translate(capture.width * 2 + 250, 200);
  textSize(30);
  textFont("Kanit");
  rotate(90);
  textStyle(BOLD);
  textAlign(LEFT);
  text(msg2, 0, 0);
  pop();

  push();
  let msg3 = "Be Sad, but";
  noFill();
  stroke("black");
  strokeWeight(3);
  textSize(80);
  textFont("kanit");
  textAlign(LEFT);
  text(msg3, width * 0.6, height * 0.52);
  pop();

  push();
  let msg4 = "#AESTHETICALLY.";
  fill("black");
  textSize(120);
  textFont("kanit");
  textStyle(BOLD);
  textAlign(LEFT);
  text(msg4, width * 0.6, height * 0.6);
  pop();

  push();
  let msg5 =
    "[Move your cursor in the webcam box to decrease/increase the sadness]";
  fill("black");
  textSize(30);
  textFont("kanit");
  textAlign(LEFT);
  text(msg5, width * 0.6, height * 0.7);
  pop();

  //DATA
  push();
  let d = day();
  let m = month();
  fill("BLACK");
  textSize(100);
  textFont("KANIT");

  textAlign(CENTER);
  text(d, 225, height * 0.85);
  text(m, 225, height * 0.9);
  pop();

  push();
  strokeWeight(3);
  stroke("BLACK");
  line(150, height * 0.85, 300, height * 0.85);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
