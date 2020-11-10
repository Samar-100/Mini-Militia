var gameState = 0;
var playerCount;
var allPlayers;
var database;
var soldier, soldierImage, sniper_1, sniper_2, melee_3, smg_1, smg_2, shotgun_2;
var button1, button2, button3, button4;
var soldier2, soldier3, soldier4, soldier5, soldier6, soldiers;
var ground;
var rand;
var uzi, desertEagle;

var form,
  player,
  game,
  rifle_4,
  shotgun_1,
  rifle_1,
  rifle_2,
  rifle_3,
  melee_1,
  melee_2;
var backgroundImage, melee_4;

var angle = 0;
var currentTime;
var num = 0;
var flag = 0;

function preload() {
  shotgun_1 = loadImage("images/AA12-shotgun.png");
  rifle_1 = loadImage("images/AK47-rifle.png");
  rifle_2 = loadImage("images/AR15-rifle.png");
  melee_1 = loadImage("images/DESERT-EAGLE.png");
  melee_2 = loadImage("images/HUNTINGPISTOL.png");
  sniper_1 = loadImage("images/M14-sniper.png");
  sniper_2 = loadImage("images/M93BA-sniper.png");
  melee_3 = loadImage("images/MAGNUM-pistol.png");
  smg_1 = loadImage("images/MP5-smg.png");
  shotgun_2 = loadImage("images/pump-action-shotgun.png");
  rifle_3 = loadImage("images/TAVOR-rifle.png");
  melee_4 = loadImage("images/TEC9-handgun.png");
  smg_2 = loadImage("images/UZI-smg.png");
  rifle_4 = loadImage("images/XM8-rifle.png");
  soldierImage = loadImage("images/SOLDIER.png");
  backgroundImage = loadImage("images/bg_new-540p.png");
  groundImg = loadImage("images/Asset 1.png");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight - 115);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  uzi = createSprite(displayWidth / 2 + 20, displayHeight / 2, 20, 20);
  uzi.addImage(smg_1);
  uzi.visible = false;
  if (gameState === 0) {
    setInterval(function () {
      num++;
    }, 1000);
  }
}

function draw() {
  background(backgroundImage);
  drawSprites();
  if (playerCount === 6) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
    num = 0;
    flag = 0;
    form.hide();
    // ground = createSprite(displayWidth / 2, displayHeight / 2, 20, 20);
    uzi.visible = true;
    // ground.addImage(groundImg);
    // ground.scale = 3.7;
    rand = Math.round(random(1, 2));
    // button1 = createSprite(displayWidth / 6 - 190, displayHeight - 270, 20, 20);
    // button2 = createSprite(displayWidth / 6 - 190, displayHeight - 190, 20, 20);
    // button3 = createSprite(displayWidth / 6 - 140, displayHeight - 230, 20, 20);
    // button4 = createSprite(displayWidth / 6 - 240, displayHeight - 230, 20, 20);
  }
  if (flag === 1) {
    form.number.html(num);
    form.number.position(displayWidth / 2 - 10, displayHeight / 5);
  }
  currentTime = second();
  if (keyIsDown(81)) {
    angle -= 10;
  }
  if (keyIsDown(69)) {
    angle += 10;
  }
}
