class Game {
  constructor(imageUrl, name, description, approval = false) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.description = description;
    this.approval = approval;
  }
}

module.exports = Game;
