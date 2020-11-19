class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }
    soldier = createSprite(200, 400, 20, 20);
    soldier.addImage(soldierImage);
    soldier.scale = 0.5;

    soldier2 = createSprite(600, 500, 20, 20);
    soldier2.addImage(soldierImage);
    soldier2.scale = 0.5;

    soldier3 = createSprite(300, 100, 20, 20);
    soldier3.addImage(soldierImage);
    soldier3.scale = 0.5;

    soldier4 = createSprite(400, 600, 20, 20);
    soldier4.addImage(soldierImage);
    soldier4.scale = 0.5;

    soldier5 = createSprite(500, 200, 20, 20);
    soldier5.addImage(soldierImage);
    soldier5.scale = 0.5;

    soldier6 = createSprite(100, 300, 20, 20);
    soldier6.addImage(soldierImage);
    soldier6.scale = 0.5;
    soldiers = [soldier, soldier2, soldier3, soldier4, soldier5, soldier6];
  }

  play() {
    form.hide();
    Player.getPlayerInfo();
    var index = 0;
    var x = 200;
    var y = 300;
    if (allPlayers !== undefined) {
      for (var plr in allPlayers) {
        index++;
        x += 200;

        soldiers[index - 1].x = x;
        soldiers[index - 1].y = y;
        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);
          if (keyIsDown(87)) {
            console.log("hi");
            soldiers[index - 1].y -= 50;
          }
          if (keyIsDown(83)) {
            soldiers[index - 1].y += 50;
          }
          if (keyIsDown(68)) {
            soldiers[index - 1].x += 50;
          }
          if (keyIsDown(65)) {
            soldiers[index - 1].x -= 50;
          }
          soldiers[index - 1].rotation = angle;
          camera.position.x = soldiers[index - 1].x;
          camera.position.y = soldiers[index - 1].y;
          soldiers[index - 1].setCollider("rectangle", 0, 0, 80, 375);
          uzi.x = soldiers[index - 1].x + 20;
          uzi.y = soldiers[index - 1].y;
        }
        player.x = soldiers[index - 1].x;
        player.y = soldiers[index - 1].y;

        player.update();
      }
    }
    drawSprites();
  }
}
