var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var gameState = "play";
var particle;
var particles = [particle];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
var count = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }




}



function draw() {
  background("black");

  textSize(22);
  text("Score : " + score, 20, 30);
  text("500",20,530);
  text("500",100,530);
  text("500",180,530);
  text("500",260,530);
  text("100",340,530);
  text("100",420,530);
  text("100",500,530);
  text("200",580,530);
  text("200",660,530);
  text("200",740,530);

  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }
  if (mousePressed()) {
    particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10));
  }

  // for (var j = 0; j < particles.length; j++) {

  //   particles[j].display();

  // }

  if (particle != null) {

    particle.display();

    if(particle.body.position.y>780) {
      if(particle.body.position.x < 300) {
        score = score + 500;
        particle = null;
      }
      else if(particle.body.position.x > 301 && particle.body.position.x < 600) {
        score = score + 100;
        particle = null;
      }
      else if(particle.body.position.x > 601 && particle.body.position.x < 900) {
        score = score + 200;
        particle = null;
      }
    }
  }



  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();

  }

  if( count>=5 ) {
    gameState = "end";
//     textSize(50)
//     text("GAME OVER",250,340);
  }
}

function mousePressed() {
  if(gameState !== "end") {
    particle = new Particle(mouseX,10,10);
    count++;
  }
}
