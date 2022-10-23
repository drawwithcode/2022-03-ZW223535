let myImage;
let myImage2;
let mySong2;
let myImage3;
let mySong3;

function preload() {
  mySong2 = loadSound("./assets/sound/Sonatina No 2_Cummins.mp3"); //Classical
  mySong3 = loadSound("./assets/sound/Sweet Relief_Hickman.mp3"); //Poppish
  myImage2 = loadImage("./assets/image/Image 2_1.png");
  myImage3 = loadImage("./assets/image/Image 3.png");
  myImage = loadImage("./assets/image/Playing.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (keyCode === RIGHT_ARROW) {
    background("#fae1aa");

    push();
    strokeWeight(1.5);
    fill("white");
    stroke("white");
    if (frameCount < 7000) {
      translate(frameCount / 50, 0);
      ellipseMode(CENTER);
      ellipse(width / 2.573, height * 0.7, 7, 7);
    } else {
      ellipseMode(CENTER);
      ellipse(width * 0.62, height * 0.7, 7, 7);
    }
    pop();

    push();
    strokeWeight(1.5);
    stroke("white");
    line(width / 2.57, height * 0.7, width * 0.62, height * 0.7);
    pop();

    push();
    let msg = "Happy Mood 2";
    fill("white");
    textSize(25);
    textFont("Kanit");
    textStyle(BOLD);
    textAlign(CENTER);
    text(msg, width / 2, height / 6);
    pop();
    push();
    let msg4 = "Use LEFT arrow to go back";
    fill("white");
    textSize(15);
    textFont("Kanit");
    textStyle(ITALIC);
    textAlign(CENTER);
    text(msg4, width / 2, height / 5);
    pop();

    push();
    imageMode(CENTER);
    image(myImage3, width / 2, height / 2.5, 225, 225);
    pop();

    push();
    rectMode(CENTER);
    noFill();
    stroke("White");
    strokeWeight(1, 5);
    rect(width * 0.51, height / 2.4, 225, 225);
    pop();

    //Icone musica
    push();
    imageMode(CENTER);
    image(
      myImage,
      width / 2,
      height * 0.77,
      myImage.width / 30,
      myImage.height / 30
    );
    pop();

    push();
    rectMode(CENTER);
    noFill();
    stroke("White");
    strokeWeight(1.5);
    rect(width * 0.51, height / 2.4, 225, 225);
    pop();

    //Data
    push();
    let d = day();
    let m = month();
    fill("white");
    textSize(75);
    textFont("KANIT");
    textAlign(CENTER);
    text(d, width / 2.8, height / 2.9);
    text(m, width / 2.8, height * 0.52);
    pop();

    //Linea data
    push();
    strokeWeight(1.5);
    stroke("white");
    line(width / 3, height / 2.5, width / 2.6, height / 2.5);
    pop();

    if (mySong3.isPlaying() === false) {
      mySong3.play();
      mySong3.setVolume(0.3);
    }
    mySong2.stop(); //Su questa parte mySong2 si deve fermare
  } else {
    background("#FFB9D9");

    push();
    strokeWeight(1.5);
    fill("white");
    stroke("white");
    if (frameCount < 7000) {
      translate(frameCount / 50, 0);
      ellipseMode(CENTER);
      ellipse(width / 2.573, height * 0.7, 7, 7);
    } else {
      ellipseMode(CENTER);
      ellipse(width * 0.62, height * 0.7, 7, 7);
    }
    pop();

    push();
    strokeWeight(1.5);
    stroke("white");
    line(width / 2.57, height * 0.7, width * 0.62, height * 0.7);
    pop();

    push();
    let msg2 = "Click to hear the music";
    fill("white");
    textSize(25);
    textFont("Kanit");
    textStyle(BOLD);
    textAlign(CENTER);
    text(msg2, width / 2, height / 6);
    pop();

    push();
    let msg3 = "Use the RIGHT arrow to change song";
    fill("white");
    textSize(15);
    textFont("Kanit");
    textStyle(ITALIC);
    textAlign(CENTER);
    text(msg3, width / 2, height / 5);
    pop();

    //Immagine
    push();
    imageMode(CENTER);
    image(myImage2, width / 2, height / 2.5, 225, 225);
    pop();

    //Icone musica
    push();
    imageMode(CENTER);
    image(
      myImage,
      width / 2,
      height * 0.77,
      myImage.width / 30,
      myImage.height / 30
    );
    pop();

    push();
    rectMode(CENTER);
    noFill();
    stroke("White");
    strokeWeight(1.5);
    rect(width * 0.51, height / 2.4, 225, 225);
    pop();

    //Data
    push();
    let d = day();
    let m = month();
    fill("white");
    textSize(75);
    textFont("KANIT");
    textAlign(CENTER);
    text(d, width / 2.8, height / 2.9);
    text(m, width / 2.8, height * 0.52);
    pop();

    //Linea data
    push();
    strokeWeight(1.5);
    stroke("white");
    line(width / 3, height / 2.5, width / 2.6, height / 2.5);
    pop();

    if (mySong2.isPlaying() === false) {
      mySong2.play();
      mySong2.setVolume(0.3);
    }

    mySong3.stop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
