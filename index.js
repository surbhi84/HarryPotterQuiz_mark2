var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;

function name() {
  var userName = readlineSync.question(
    chalk.magenta("TELL me your name..and i'll let you know the rules!")
  );
  return userName;
}
