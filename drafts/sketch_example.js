let spr;
function setup() {
  createCanvas(400, 400);
  spr = createSprite(
    width/2, height/2, 40, 40);
  spr.shapeColor = color(255);
  spr.velocity.y = 0.5;
}
function draw() {
  background(50);
  if (keyIsDown(RIGHT_ARROW)) {
    console.log("Right arrow press detected.")
    // console.log(soul)
    spr.position.x += 10
}
drawSprites()
}
function mousePressed() {
  spr.position.x = mouseX;
  spr.position.y = mouseY;
}