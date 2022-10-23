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
    let size = map(micLevel, 0, 1, 1, 1000);
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
  let msg = "Click to start";
  fill("white");
  textSize(30);
  textFont("Kalam");
  textAlign(CENTER);
  text(msg, width / 2, height / 2.3);

  let msg2 = "Scream your anger into the VOID!";
  fill("white");
  textSize(50);
  textFont("Kalam");
  textAlign(CENTER);
  text(msg2, width / 2, height / 2);
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
