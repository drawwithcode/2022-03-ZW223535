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
  strokeWeight(500);
  rect(width / 2 + 100, height / 2 - 100, width - 10, height - 10);
  pop();

  push();
  let msg0 = "ARE YOU";
  fill("white");
  textSize(150);
  textFont("Orbitron");
  textAlign(LEFT);
  text(msg0, -10, 300);
  pop();

  push();
  let msg01 = "TIRED";
  fill("white");
  textSize(150);
  textFont("Orbitron");
  textAlign(LEFT);
  text(msg01, -10, 450);
  pop();

  push();
  let msg02 = "YET?";
  fill("white");
  textSize(150);
  textFont("Orbitron");
  textAlign(LEFT);
  text(msg02, -10, 600);
  pop();

  push();
  let msg = "[Click to start]";
  fill("white");
  textSize(30);
  textFont("kanit");
  textAlign(LEFT);
  text(msg, width * 0.55, height * 0.85);
  pop();

  let msg2 = "Scream your anger into the VOID";
  fill("white");
  textSize(80);
  textFont("kanit");
  textStyle(BOLD);
  textAlign(LEFT);
  text(msg2, width * 0.55, height * 0.9);
  pop();

  push();
  rectMode(CENTER);
  noFill();
  stroke("white");
  strokeWeight(3);
  rect(width / 2 + 100, height / 2 - 100, width * 0.8, height * 0.7);
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
