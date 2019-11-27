var mySong;
var face;
var bg;
var volume=0;

function preload(){
  mySong = loadSound("./assets/TG1_new.mp3");
  bg = loadImage("./assets/bg.jpg");
  face = loadImage ("./assets/giorgino.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(1, 8, 54);
  angleMode(DEGREES);
  amplitude = new p5.Amplitude();
  amplitude.setInput(mySong);
}

function mousePressed() {
  if (mySong.isPlaying()) {
    mySong.pause();
  } else {
    mySong.play();
  }
}

function draw() {
  // Draw the TG1 background
  push();
  translate(width/2, height/2);
  imageMode(CENTER);
  image(bg, 0, 0, 720, 405);
  pop();

  //Draw Giorgino's head and changes its size according to the volume of the bump
  volume=amplitude.getLevel();
  volume=map(volume, 0, 1, 0, height);
  translate(width/2, height/2);
  imageMode(CENTER);
  image(face, 0, 0, (92 + volume/2), (119 + volume/2));
  console.log("amplitude:" + amplitude.getLevel());
  console.log("var volume:" + volume);

  textFont("Oswald");
  textSize(30);
  text('Tap on Giorginos head!', windowWidth / 2 + 100, windowHeight / 2);
}

function windowResized() {
  //Make the window responsive
	resizeCanvas(windowWidth, windowHeight);
}
