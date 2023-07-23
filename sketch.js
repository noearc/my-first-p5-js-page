function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  angleMode(DEGREES);
  translate(200,200);
  rotate(-90);
  
  noFill();
  
  strokeWeight(15)
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  //hr
  stroke(0,200,150);
  let ang1 = map(hr % 12,0,12,0,360)
  arc(0,0,320,320,0,ang1);
  push();
  rotate(ang1 - 45);
  line(0,0,40,40);
  pop();
  

  //mn
  stroke(0,150,150);
  let ang2 = map(mn,0,60,0,360)
  arc(0,0,280,280,0,ang2);
  push();
  rotate(ang2- 45);
  line(0,0,55,55);
  pop();
  
  
  //sc
  stroke(200,250,150);
  let ang3 = map(sc,0,60,0,360)
  arc(0,0,240,240,0,ang3);
  push();
  rotate(ang3 - 45);
  line(0,0,65,65);
  pop();
  
  stroke(240,255,255);
  point(0.0,0);
  
}