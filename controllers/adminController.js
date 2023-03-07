const Game = require("../model/gameModel");

const gameController = require("./gameController");

var games = [];

exports.getGames = () => {
  return games;
};

exports.addNewReviews = (game) => {
  games.push(game);
};

exports.adminLogin = (req, res, next) => {
  res.render("admin/login");
};

exports.loginAdmin = (req, res, next) => {
  res.render("admin/requests", { games });
};

exports.requestGameDetails = (req, res, next) => {
  var index = req.url.split("=")[1];
  res.render("admin/adminGameDetails", { game: games[index], index: index });
};

exports.acceptGame = (req, res, next) => {
  const game = games[req.body.accept];

  gameController.addGameThroughAdmin(game);
};

exports.rejectGame = (req, res, next) => {
  const index = games.indexOf(games[req.body.reject]);

  games.splice(index, 1);

  res.render("admin/requests", { games });
};

exports.removeGame = (index) => {
  games.splice(index, 1);
};
