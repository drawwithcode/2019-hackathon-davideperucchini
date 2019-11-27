var mySong;
var face;
var bg;
var volume=0;

let sampleIsLooping = false;

function preload(){
  mySong = loadSound("./assets/TG1_new.mp3");
  bg = loadImage("./assets/bg.jpg");
  face = loadImage ("./assets/giorgino.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  amplitude = new p5.Amplitude();
  amplitude.setInput(mySong);
}

// function mousePressed() {
//   if (mySong.isPlaying()) {
//     mySong.pause();
//   } else {
//     mySong.play();
//   }
// }

function mouseClicked() {
  //here I test if the mouse is over the canvas element when it's clicked
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    background(1, 8, 54);

    if (!sampleIsLooping) {
      //loop the TG1 tune until we call mySong.stop() on it.
      mySong.loop();

      sampleIsLooping = true;
      text('Click to stop!', width / 2, height / 2);
    } else {
      mySong.stop();

      sampleIsLooping = false;
      text('Click to loop!', width / 2, height / 2);
    }
  }
}

function draw() {
  //Draw the blue background
  background(1, 8, 54);

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

  push();
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(color("white"));
  text("Tap on Giorgino's head to play the TG1 tune. Tap again to stop the audio", 0, windowHeight/3);
  pop();
}

function windowResized() {
  //Make the window responsive
	resizeCanvas(windowWidth, windowHeight);
}
