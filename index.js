//NPM Packages imported
var readlineSync = require('readline-sync');
const chalk = require('chalk');

//Asking name of the player and greeting them
var userName = readlineSync.question("May I have your name?\n");
console.log("----------------------------");
console.log(chalk.yellow(`Hello ${userName}!
Welcome to the Harry Potter Quiz Game.`));
console.log("----------------------------");

//Rules
console.log(chalk.blue(
  `RULES
  1. Every right answer gives you 10 points.
  2. Every wrong answer deducts 4 points.`
));
console.log("----------------------------");
console.log("Let's start...");

//Initial Score
var score = 0;

//Function for getting questions & answers
function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("Woaahh!!! You are right."));
    score = score + 10;
    console.log("Your current score is: " + score);
    console.log("----------------------------"); 
  }
  else{
    console.log(chalk.red("Oops! That's the wrong answer."));
    score = score - 4;
    console.log("Your current score is: " + score);
    console.log("----------------------------"); 
  }
}

//Array of questions
var questions = [
  {
    question: `What was the name of Harry's owl?
    a: Hedwig
    b: Fibbie
    c: Snov\n`,
    answer: "a"
  },
  {
    question: `Which among these spells did Ron Weasley had some trouble mastering in his first year at Hogwarts?
    a: Wingardium Leviosa
    b: Expelliarmus
    c: Petrificus Totalus\n`,
    answer: "a"
  },
  {
    question: `What was the real name of "Lord Voldermort"?
    a: Tom Liddrel
    b: Tom Viddle
    c: Tom Riddle\n`,
    answer: "c"
  },
  {
    question: `Who was "The Half Blood Prince"?
    a: Albus Dumbledore
    b: Severus Snape
    c: Sirius Black\n`,
    answer: "b"
  },
  {
    question: `What house was Voldermort in at Hogwarts?
    a: Godric Gryffindor
    b: Rowena Ravenclaw
    c: Salazar Slytherin\n`,
    answer: "c"
  }
];

//Making the function run every time using for loop
for (var i=0; i<questions.length; i++){
var currentQuestion = questions[i];
play(currentQuestion.question, currentQuestion.answer);
};

//Final score
console.log(chalk.whiteBright.bold("Your final score is " + score + "."));
console.log("----------------------------");

//End message
console.log("Tweet your score screenshot to me at: " + chalk.bgBlueBright("@WhoPriyam"));
console.log("And get your name added in the leaderboard...")
console.log("----------------------------");

//Leaderboard Array
var highScore = [
  {
    name: "Priyam",
    score: 50
  },
  {
    name: "Ayush",
    score: 36
  },
  {
    name: "Priyanshu",
    score: 36
  },
  {
    name: "Abhiraj",
    score: 22
  }
  {
    name: "Hitesh",
    score: 36
  }
];

//Consoling the scores using for loop
console.log(chalk.bgGreenBright("LEADERBOARD"));
for(var i=0; i<highScore.length; i++){
  console.log(highScore[i].name, ":", highScore[i].score)
}