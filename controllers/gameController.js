const Game = require("../model/gameModel");

const adminController = require("./adminController");

var games = [
  new Game(
    "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/14/gaming-gta5-cover.jpeg?resize=480:*",
    "GTA V",
    "Endless possibilities",
    true
  ),
  new Game(
    "https://m.media-amazon.com/images/I/61v3Dxwu9KL.jpg",
    "Uncharted Drake's Fortune",
    "Great game",
    true
  ),
  new Game(
    "https://upload.wikimedia.org/wikipedia/en/c/ce/Vice-city-cover.jpg",
    "GTA: Vice City",
    "Best GTA story line ever",
    true
  ),
  new Game(
    "https://e.snmc.io/lk/lv/x/0e8e56e4adc1971b6b55732b3eff62ca/6853855",
    "Uncharted 2: Among Thieves",
    "Great game",
    true
  ),
  new Game(
    "https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg",
    "Uncharted 4: A Thief's End",
    "Great game",
    true
  ),
  new Game(
    "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg",
    "The Last Of US",
    "Best Game",
    true
  ),
  new Game(
    "https://m.media-amazon.com/images/I/61T36I+zpXL._SY606_.jpg",
    "The Last Of US II",
    "It doesn't get any better than this",
    true
  ),
  new Game(
    "https://i.gadgets360cdn.com/products/large/MV5BMmVjMzkyYWMtNDNhNi00ZWI3LTgxNGUtODRkMWYxNjZmNDI5XkEyXkFqcGdeQXVyMzY0MTE3NzU-.-V1-FMjpg-UX1000-1000x1500-1666698829.jpg",
    "God of War",
    "A path of challenges",
    true
  ),
  new Game(
    "https://m.media-amazon.com/images/M/MV5BMTAyYWYyOTMtNmUzNS00NzNjLTkyZTUtZjhlZjMzYzJmNzM5XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    "GTA: San Andreas",
    "Forever nostalgic",
    true
  ),
  new Game(
    "https://upload.wikimedia.org/wikipedia/en/0/02/Uncharted_3_Boxart.jpg",
    "Uncharted 3: Drake's Deception",
    "Great game",
    true
  ),
  new Game(
    "https://image.api.playstation.com/vulcan/ap/rnd/202109/2821/SZRc7OMwGgv8lJXIOlYyuBU2.jpg",
    "God of War: Ragnarok",
    "Father and Son",
    true
  ),
  new Game(
    "https://upload.wikimedia.org/wikipedia/en/d/d7/Until_Dawn_cover_art.jpg",
    "Until Dawn",
    "A one time experience",
    true
  ),
  new Game(
    "https://upload.wikimedia.org/wikipedia/en/c/c1/Heavy_Rain_Cover_Art.jpg",
    "Heavy Rain",
    "An emotional ride",
    true
  ),
];

exports.getGames = function (req, res, next) {
  res.render("user/index", { games });
};

exports.uploadGames = function (req, res, next) {
  res.render("user/upload");
};

exports.about = function (req, res, next) {
  res.render("user/about");
};

exports.addGame = function (req, res, next) {
  var newGame = new Game(
    req.body.gameimage,
    req.body.gamename,
    req.body.gamedescription
  );

  adminController.addNewReviews(newGame);

  res.render("./user/index", { games });
};

exports.gameDetails = function (req, res, next) {
  var index = req.url.split("=")[1];
  res.render("user/gamedetails", { game: games[index], index: index });
};

exports.editGame = function (req, res, next) {
  const id = req.body.id;

  res.render("user/editgame", { game: games[id], id: id });
};

exports.updateGame = function (req, res, next) {
  const gamename = req.body.gamename;
  const gameimage = req.body.gameimage;
  const gamedescription = req.body.gamedescription;
  const id = req.body.submitid;

  games[id] = new Game(gameimage, gamename, gamedescription);

  res.render("user/index", { games });
};
