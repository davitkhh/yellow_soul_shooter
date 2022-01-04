var soul, soulImg;
var bullet, bulletImg;


function preload() {
  soulImg = loadImage("images/soul.png")
  bulletImg = loadImage("images/bullet.png")
}

function setup() {
  createCanvas(600, 450);

  soul = createSprite(100, 225, 100, 10)
  soul.addImage('yellow', soulImg)
  soul.scale = 0.7

}

function draw() {
  background(220);

  drawSprites()
  soul_move()

  bullet_shoot()
}

function soul_move() {
  if (keyIsDown(RIGHT_ARROW)) {
    soul.position.x += 5
  }

  if (keyIsDown(LEFT_ARROW)) {
    soul.position.x -= 5
  }

  if (keyIsDown(UP_ARROW)) {
    soul.position.y -= 5
  }

  if (keyIsDown(DOWN_ARROW)) {
    soul.position.y += 5
  }
  
}

function create_bullet() {
  bullet = createSprite(0, 250, 10, 10)
  bullet.addImage('pewpew', bulletImg)
  bullet.scale = 2
}

function bullet_shoot() {
  if (keyIsDown(32)) {
    create_bullet()
    bullet.velocity.x += 5 
  }
}
