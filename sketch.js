var cir = {
  X: 0,
  y: 0,
  dia1: 10,
  dia2:10
};

var col = {
  r: 0,
  g: 0,
  b: 0,
  a: 100,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  noStroke();
  cir.x = mouseX + random(0, windowWidth) / 20;
  cir.y = mouseY + random(0, windowHeight) / 20;
  cir.dia1 = random(10, 20);
  cir.dia2 = random(10, 20);
  col.r = random(100, 150);
  col.g = random(100, 255);
  col.b = random(100, 255);
  col.a = random(100, 255);
  fill(col.r, col.g, col.b, col.a);
  ellipse(cir.x, cir.y, cir.dia1, cir.dia2);
  if (frameCount > 400) {
    background(220);
    frameCount = 0;
  }
}

function mousePressed() {
  col.r = random(100, 150);
  col.g = random(100, 255);
  col.b = random(100, 255);
  col.a = random(100, 255);
  background(col.r, col.g, col.b, 20);
}
