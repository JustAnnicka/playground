class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.hand = []; // Array of Card objects
    this.score = 0;
  }

  drawCard(card) {
    this.hand.push(card);
  }

  discardCard(cardIndex) {
    return this.hand.splice(cardIndex, 1)[0];
  }

  getHandSize() {
    return this.hand.length;
  }
}

module.exports = Player;