let x = 0;
let y = 0;
let xSkip = 20;
let ySkip = 2;
let w = 10;

function setup() {
  createCanvas(400, 400);
  background(0);

  for (i = 0; i < 100; i++) {
    if (x > width) {
      x = 0;
    }
    if (y > height) {
      y = 0;
    }
    ellipse(x, y, w);
    x = x + xSkip;
    y = y + ySkip;
  }
}

function draw() {
}