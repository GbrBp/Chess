"use strict";

var chess = require("chessboard-engine");

var game = new chess.Game();

var res = game.move({
  from: "a2",
  to: "a4",
  rules: true,
  test: false
});

console.log(game.print());
console.log(res);

console.log(game.getTargets("a7"));
console.log(game);
