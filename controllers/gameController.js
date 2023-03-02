const Game = require("../model/gameModel");

var games = [
  new Game(
    "https://m.media-amazon.com/images/I/61v3Dxwu9KL.jpg",
    "Uncharted Drake's Fortune"
  ),
  new Game(
    "https://e.snmc.io/lk/lv/x/0e8e56e4adc1971b6b55732b3eff62ca/6853855",
    "Uncharted 2: Among Thieves"
  ),
  new Game(
    "https://upload.wikimedia.org/wikipedia/en/0/02/Uncharted_3_Boxart.jpg",
    "Uncharted 3: Drake's Deception"
  ),
  new Game(
    "https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg",
    "Uncharted 4: A Thief's End"
  ),
];

exports.getGames = function (req, res, next) {
  res.render("index", { games });
};

exports.uploadGames = function (req, res, next) {
  res.render("upload");
};

exports.about = function (req, res, next) {
  res.render("about");
};
