let mySong;
let mic;
let myColors = ["red", "orange", "yellow"];

function preload() {
  mySong = loadSound("./assets/sound/No Filter_NEFFEX.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  if (mySong.isPlaying() === false) {
    mySong.play();
    mySong.setVolume(0.1);
  }
  push();
  if (mic) {
    let micLevel = mic.getLevel();
    let size = map(micLevel, 0, 1, 1, 200);
    console.log(mic.getLevel());

    const inc = 200;

    for (let y = inc; y < height; y += inc) {
      for (let x = inc; x < width; x += inc) {
        noStroke();
        fill(random(myColors));
        drawingContext.filter = "blur(30px)";
        ellipse(x, y, random(size, size * 10));
      }
    }
  }
  pop();

  push();
  rectMode(CENTER);
  noFill();
  strokeWeight(250);
  rect(width / 2 + 50, height / 2 - 50, width - 5, height - 5);
  pop();

  push();
  let msg0 = "ARE YOU";
  fill("white");
  textSize(75);
  textFont("Orbitron");
  textAlign(LEFT);
  text(msg0, -10, 150);
  pop();

  push();
  let msg01 = "TIRED";
  fill("white");
  textSize(75);
  textFont("Orbitron");
  textAlign(LEFT);
  text(msg01, -10, 250);
  pop();

  push();
  let msg02 = "YET?";
  fill("white");
  textSize(75);
  textFont("Orbitron");
  textAlign(LEFT);
  text(msg02, -10, 350);
  pop();

  push();
  let msg = "[Click to start]";
  fill("white");
  textSize(15);
  textFont("kanit");
  textAlign(LEFT);
  text(msg, width * 0.55, height * 0.85);
  pop();

  let msg2 = "Scream your anger into the VOID";
  fill("white");
  textSize(40);
  textFont("kanit");
  textStyle(BOLD);
  textAlign(LEFT);
  text(msg2, width * 0.55, height * 0.9);
  pop();

  push();
  rectMode(CENTER);
  noFill();
  stroke("white");
  strokeWeight(1.5);
  rect(width / 2 + 50, height / 2 - 50, width * 0.9, height * 0.7);
  pop();
}

function mousePressed() {
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
