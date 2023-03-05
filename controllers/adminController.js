const Game = require("../model/gameModel");

var games = [];

exports.addNewReviews = (game) => {
  games.push(game);

  console.log(games);
};

exports.adminLogin = (req, res, next) => {
  res.render("admin/login");
};

exports.loginAdmin = (req, res, next) => {
  res.render("user/index", { games });
};
