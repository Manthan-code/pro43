var hr,mn,sc;

function setup() {
  createCanvas(displayWidth,displayHeight);
  angleMode(DEGREES);

}

function draw() {
  background("black"); 

  hr=hour();
  mn=minute();
  sc=second(); 

translate(displayWidth/2-100,displayHeight/2);
rotate-90;
  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  strokeWeight(4);
  stroke("red");
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  strokeWeight(6);
  stroke("blue");
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  strokeWeight(8);
  stroke("chartreuse");
  line(0,0,50,0);
  pop();



  drawSprites();
}