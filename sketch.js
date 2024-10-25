/*
Inspirations:
https://www.reddit.com/r/ProgrammerHumor/comments/13din6t/next_level_ui_validation/
https://www.reddit.com/r/ProgrammerHumor/comments/pppbaf/ive_just_made_this_awesome_ui_phone_selector/
https://www.reddit.com/r/ProgrammerHumor/comments/12tcnwg/continuum/
*/

let ratioo = 16 / 9;

let btn;
let memeBtn;

let naniSFX;

let imgs = [];
let currentIndex = 0;

let slider;
let randNum;

function preload() {
  // Download from https://tuna.voicemod.net/search/sounds?search=nani
  naniSFX = loadSound("naniSFX.mp3");

  //// Demonstration for 'for-loop' introduction
  // let img1 = loadImage('memes/meme_1.jpg')
  // let img2 = loadImage('memes/meme_2.jpg')
  // let img3 = loadImage('memes/meme_3.jpg')
  // let img4 = loadImage('memes/meme_4.jpg')
  // let img5 = loadImage('memes/meme_5.jpg')
  // let img6 = loadImage('memes/meme_6.jpg')
  // let img7 = loadImage('memes/meme_7.jpg')
  // let img8 = loadImage('memes/meme_8.jpg')
  // let img9 = loadImage('memes/meme_9.jpg')
  // let img10 = loadImage('memes/meme_10.jpg')
  // let img11 = loadImage('memes/meme_11.jpg')
  // let img12 = loadImage('memes/meme_12.jpg')
  // let img13 = loadImage('memes/meme_13.jpg')
  // let img14 = loadImage('memes/meme_14.jpg')
  // let img15 = loadImage('memes/meme_15.jpg')
  // let img16 = loadImage('memes/meme_16.jpg')
  // let img17 = loadImage('memes/meme_17.jpg')
  // let img18 = loadImage('memes/meme_18.jpg')
  // let img19 = loadImage('memes/meme_19.jpg')

  // imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19]

  // Using for-loop:
  for (let i = 1; i < 47; i += 1) {
    // let missings = [
    //   5, 7, 9, 10, 11, 12, 13, 20, 22, 25, 26, 27, 28, 29, 33, 34, 36, 40,
    // ];
    // if (missings.includes(i)) continue;

    let fileName = i < 10 ? "0" + i : i;

    let img = loadImage("memes/meme_" + fileName + ".jpg");
    imgs.push(img);
  }
  currentIndex = round(random(imgs.length - 1));
}

function setup() {
  createCanvas(windowWidth, windowWidth / ratioo);
  frameRate(30); // To make sure there are chances to click on the button.

  memeBtn = createButton("Next Meme");
  memeBtn.position(8, height - memeBtn.height);
  memeBtn.mousePressed(changeMeme);

  slider = createSlider(10000000, 99999999);
  slider.position(8, 8);

  randNum = round(random(10000000, 99999999));

  btn = createButton("Click Me");
  btn.position(random(width - btn.width), random(height - btn.height));
  btn.mousePressed(newTab);
}

function draw() {
  background(20);

  let img = imgs[currentIndex];
  let ratioo = img.width / img.height;
  img.width = width / 1.5;
  img.height = img.width / ratioo;
  let x = (width - img.width) / 2;
  let y = (height - img.height) / 2;
  image(img, x, y, img.width, img.height);

  let btnL = btn.x;
  let btnR = btnL + btn.width;
  let btnT = btn.y;
  let btnB = btnT + btn.height;
  if (mouseX > btnL && mouseX < btnR && mouseY > btnT && mouseY < btnB) {
    btn.position(random(width - btn.width), random(height - btn.height));
  }

  fill(255);
  text("You: " + slider.value(), slider.x, slider.height * 2);
  text(
    "Slide to " + randNum + " to see a surprise",
    slider.x,
    slider.height * 3
  );

  if (slider.value() == randNum) {
    fill("red");
    text("surprise", width / 2, height / 2);
  }
}

function newTab() {
  naniSFX.play();
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}

function changeMeme() {
  currentIndex = round(random(imgs.length - 1));
}
