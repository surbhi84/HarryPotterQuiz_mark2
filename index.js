var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;

function name() {
  var userName = readlineSync.question(
    chalk.magenta("TELL me your name..and i'll let you know the rules!")
  );
  return userName;
}

function choice() {
  console.log(
    chalk.red.italic.bold(
      "\nHere you get two choices:\n1. MCQ's \n2. Input type questions"
    )
  );

  var choice = readlineSync.question(
    chalk.blue.bold(
      "\nEnter your choice in numerals for the questions to reveal!"
    )
  );

  if (choice == 1) {
    qnadisplay(qarray1);
  } else if (choice == 2) {
    qnadisplay(qarray2);
  } else {
    console.log("invalid choice");
  }
}
