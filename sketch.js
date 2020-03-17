var r=200;
var g=100;
var b=200;
function setup() {
  createCanvas(750, 400);
}
function draw() {
  background(r,g,b);
  circle(mouseX,100,mouseY,50);
  r,g,b=mouseX/3;
}