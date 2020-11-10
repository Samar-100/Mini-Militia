class Player {
  constructor() {
    this.index = null;
    this.x = 0;
    this.y = 0;
    this.name = null;
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
  }

  update() {
    console.log(this.x + this.y);
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      x: this.x,
      y: this.y,
    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    });
  }
}
