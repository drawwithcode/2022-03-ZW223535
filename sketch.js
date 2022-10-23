let happy;
let sad;
let angry;
let luckyButton;
let starColor = ["#7fc5dc", "#FFFFFF", "#afc9ff"];
let myStars = [];

function preload() {
  mySound = loadSound("./assets/sound/Underwater Exploration_Godmode.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Bottone
  luckyButton = createButton("I'm feeling lucky.");
  luckyButton.position(width / 2 - 350 / 2, height * 0.7);
  luckyButton.mouseClicked(beLucky);

  //Emoji 1
  happy = createImg("./assets/image/Happy.png");
  happy.size(150, 150);
  happy.position(windowWidth / 3 - 150 / 2, windowHeight / 2 - 150 / 3);
  happy.mousePressed(beHappy);

  //Emoji 2
  sad = createImg("./assets/image/Sad.png");
  sad.size(150, 150);
  sad.position(windowWidth / 2 - 150 / 2, windowHeight / 2 - 150 / 3);
  sad.mousePressed(beSad);

  //Emoji 3
  angry = createImg("./assets/image/Angry.png");
  angry.size(150, 150);
  angry.position(windowWidth * 0.67 - 150 / 2, windowHeight / 2 - 150 / 3);
  angry.mousePressed(beAngry);

  //Generazione di Stelle
  for (let i = 0; i < 350; i++) {
    const newStar = new Star(
      random(windowWidth),
      random(windowHeight),
      random(0.5, 5),
      random(TWO_PI)
    );
    myStars.push(newStar);
  }
}

function draw() {
  background("#070b34");

  //GRADIENTE SFONDO
  push();
  strokeWeight(100);
  fill("#855988");
  drawingContext.filter = "blur(300px)";
  ellipse(width / 2, height / 2, 1000, 1000);
  pop();

  //STELLE
  push();
  for (let i = 0; i < myStars.length; i++) {
    myStars[i].display();
  }
  pop();

  //SCRITTA
  push();
  let myText = "How are you feeling today?";
  textFont("Kalam");
  fill("White");
  textSize(50);
  textAlign(CENTER);
  text(myText, width / 2, height / 3);
  pop();

  //SCRITTA 2
  push();
  let myText2 = "(Click to hear the music)";
  textFont("Kalam");
  fill("White");
  textSize(20);
  textAlign(CENTER);
  text(myText2, width / 2, height / 2.7);
  pop();

  //MUSICA
  if (mySound.isPlaying() === false) {
    mySound.play();
  }
  const myAmp = 0.5;
  mySound.amp(myAmp);
}

// Classe - STELLE
class Star {
  constructor(starX, starY, starR, starM) {
    this.x = starX;
    this.y = starY;
    this.r = starR;
    this.m = starM;
  }

  display() {
    this.m += 0.02;
    translate(frameCount / 700, frameCount / 700);
    let scale = this.r + sin(this.m) * 2;
    noStroke();
    drawingContext.filter = "blur(1px)";
    fill(random(starColor));
    ellipse(this.x, this.y, scale, scale);
  }
}

//Rimandi
function beLucky() {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}

function beSad() {
  window.open("sad.html");
}
function beHappy() {
  window.open("happy.html");
}

function beAngry() {
  window.open("angry.html");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
