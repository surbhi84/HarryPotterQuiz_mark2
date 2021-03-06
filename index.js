var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;

var qarray1 = [
  (q1 = {
    ques: "Who was Harry's godfather?\na) Vernon Dursley \nb) Dumbledore \nc) Sirius Black",
    ans: "c",
  }),
  (q2 = {
    ques: "Harry's eyes looked like?\n a) James Potter\n b) Lily evans\n c) Sirius Black",
    ans: "b",
  }),
  (q3 = {
    ques: "What was the name of harry's bestfriend?\n a) Neville \n b) Draco\n c) Ron",
    ans: "c",
  }),
  (q4 = {
    ques: "what is harry's owls name?\n a) Pigwigdeon\n b) Crookshanks\n c) Hedwig",
    ans: "c",
  }),
  (q5 = {
    ques: "In which year harry became the captain of the quidditch?\n a) 4rth\n b) 6th\n c) 5th",
    ans: "b",
  }),
  (q6 = {
    ques: "Why did voldemort wanted to kill harry?\n a) beacause of harry's parents\n b) because of a prophecy\n c) because harry was a powerful wizard",
    ans: "b",
  }),
  (q7 = {
    ques: "how many innocent lives were saved by harry and his friends in prisoner of the azkaban?\n a) 1\n b) 2\n c) 3",
    ans: "b",
  }),
];

var qarray2 = [
  (q1 = {
    ques: "Who wrote Harry Potter novels?",
    ans: "jk rowling",
  }),
  (q2 = {
    ques: "Who gave Harry Potter the lighting bolt mark?",
    ans: "voldemort",
  }),
  (q3 = {
    ques: "What are non-magic folks called?",
    ans: "muggle",
  }),
  (q4 = {
    ques: "Harry was sorted into which of the four houses?",
    ans: "gryffindor",
  }),
  (q5 = {
    ques: "who dropped Harry at his aunts house when he was one?",
    ans: "hagrid",
  }),
  (q6 = {
    ques: "Harry played quidditch with which role?",
    ans: "seeker",
  }),
  (q7 = {
    ques: "Was harry a muggle hater?",
    ans: "no",
  }),
];

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

function intro() {
  console.log(chalk.blue.bold("Welcome wizards to the HARRY POTTER QUIZ."));
  var a = name();
  while (a === "") {
    console.log(chalk.red("oh oh! you must enter a name"));
    var a = name();
    if (a === "") {
      continue;
    } else {
      break;
    }
  }

  console.log(
    chalk.blue.bold("\nHello " + a + "! These are the rules of the quiz.") +
      chalk.magenta.italic(
        "\n1. You get 3 points for each right answer.\n2. You lose 2 points for each wrong answer.\n3. You can only play until your score is above zero.\n4. Only enter a b or c in mcq's."
      )
  );

  choice();
}

function qna(q, a) {
  var userAnswer = readlineSync.question(chalk.cyan.bold("\n" + q));

  if (userAnswer.toLowerCase() === a.toLowerCase()) {
    console.log(chalk.green("Right answer! You get 3 points."));
    score = score + 3;
  } else {
    console.log(chalk.red("Wrong answer! You lose 2 points."));
    score = score - 2;
  }
  console.log(chalk.yellow.italic.bold("your score:" + score));
}

function qnadisplay(qarr) {
  for (i = 0; i < qarr.length; i++)
    if (score >= -10) {
      qna(qarr[i].ques, qarr[i].ans);
    } else {
      console.log(chalk.red.bold("\nYou can't play further"));
      break;
    }
}

intro();

console.log(
  chalk.blue.bold("\nyour FINAL SCORE is " + score) +
    chalk.yellow.bold("\nThank you for playing!")
);
