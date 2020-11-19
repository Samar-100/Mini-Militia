class Form {
  constructor() {
    this.input = createInput("Your Name");
    this.button = createButton("Start");
    this.greeting = createElement("h2");
    this.title = createElement("h2");
    this.heading = createElement("h1");
    this.number = createElement("h1");
    this.resetButton = createButton("Reset");
  }

  hide() {
    this.title.hide();
    this.heading.hide();
    this.number.hide();
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  }

  display() {
    this.title.html("Enter your name below");
    this.title.position(displayWidth / 2 - 120, displayHeight / 6);

    this.heading.html("Shoot-Out");
    this.heading.position(displayWidth / 2 - 80, displayHeight / 6 - 100);

    this.input.position(displayWidth / 2 - 85, displayHeight / 4);
    this.button.position(displayWidth - 180, displayHeight - 218);
    this.resetButton.position(displayWidth - 180, displayHeight - 288);

    this.button.size(150, 75);
    this.button.style("background", rgb(200, 163, 21));
    this.input.size(170, 20);

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      this.title.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Waiting for other players...");
      this.greeting.position(displayWidth / 2 - 120, displayHeight / 6);
      num = 0;
      flag = 1;
    });
    this.resetButton.mousePressed(() => {
      player.updateCount(0);
      game.update(0);
    });
  }
}
