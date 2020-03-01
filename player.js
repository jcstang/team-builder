function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;

}

Player.prototype = {
  printStats: function () {
    console.log(
      `
      Name:     ${this.name}
      Position: ${this.position}
      Offense:  ${this.offense}
      Defense:  ${this.defense}
      `
    )
  }

}

module.exports = Player;