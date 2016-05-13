var correctAnswers = 0;
var myAnswers = ['yes', 'yes', 'no', 'no', 'yes'];
var questions = ['Do I live with any animals?', 'Did I grow up in Washington?', 'Is ice cream my favorite dessert?',
'Have I been ski diving, bungee jumping and scuba diving?', 'Do I love snowboarding?'];
var myResponse = [', I live with a cat named Renly.', ', I grew up on Bainbridge Island in Washington.',
', My favorite dessert is panna cotta.', ', I have been bungee jumping and sky diving but not scuba diving.', ', I do love snowboarding.'];
var endLoop = false;
var seventhAnswers = ['ohio', ' california', ' illinois', ' montana'];
var guessesRemaining = 6;

// Prompt user for name and welcome/introduce them
var userName = prompt('Hello! Thanks for visiting, what is your name?');
alert('Welcome ' + userName + '! I\'m going to ask you some questions.');
console.log('The user is named ' + userName);

// Run the question game
for (var i = 0; i < questions.length; i++) {
  var response = firstFiveValidation(i);
  firstQuestionSet(response, i);
}
sixthQuestion();
seventhQuestion();
results();

// Validate proper input and re-prompt if not valid for first 5 questions
function firstFiveValidation(qNum) {
  var response  = prompt(questions[qNum]);
  while (!isNaN(response)) {
    alert('Not valid input');
    response = prompt(questions[qNum]);
  }
  return response;
}

// Alert user to results of the question asked
function firstQuestionSet(response, i) {
  if (response === myAnswers[i] || response === myAnswers[i][0]) {
    alert('Correct! ' + userName + myResponse[i]);
    correctAnswers += 1;
  } else {
    alert('Wrong! ' + userName + myResponse[i]);
  }
}

// Run the sixth question in the game
function sixthQuestion() {
  var sixthResponse;
  for (var i = 3; i >= 0; i--) {
    sixthResponse = sixthQuestionPrompt();
    console.log(sixthResponse);
    if (sixthResponse === 26) {
      alert('I am 26, Great guess!');
      correctAnswers += 1;
      i = -1;
    } else if (i === 0) {
      alert('Sorry you ran out of guesses, I am 26 yours old');
    } else if (sixthResponse > 26) {
      alert('Wrong!, you guessed too high. You have ' + i + ' guesses remaining.');
    } else if (sixthResponse < 26) {
      alert('Wrong!, you guessed too low. You have ' + i + ' guesses remaining.');
    }
  }
}

// Prompt user for the 6th question and validate user input, returns valid numeric value
function sixthQuestionPrompt() {
  var response = parseInt(prompt('How old am I?'));
  while(!response) {
    alert('Invalid Input please enter a number');
    response = parseInt(prompt('How old am I?'));
  }
  return response;
}

// Ask the seventh question in the game
function seventhQuestion() {
  var seventhResponse;
  while (endLoop === false) {
    seventhResponse = seventhQuestionValidate();
    for (var i = 0; i < seventhAnswers.length; i++) {
      if (seventhResponse === seventhAnswers[i]) {
        endLoop = true;
        correctAnswers += 1;
        alert('Correct! I have lived in ' + seventhAnswers + '.');
      }
    }
    if (endLoop === false) {
      guessesRemaining -= 1;
      alert('Wrong ' + userName + ' you have ' + guessesRemaining + ' guesses remaining.');
    }
    if (guessesRemaining === 0) {
      alert('You ran out of guesses, ' + userName + '. I have lived in ' + seventhAnswers);
      endLoop = true;
    }
  }
}

// Prompt, validate and return user input for seventh question
function seventhQuestionValidate() {
  var seventhResponse = prompt('What is another state I have lived besides Washington?').toLowerCase();
  while (!isNaN(seventhResponse)) {
    alert('Numeric values are not valid responses');
    seventhResponse = prompt('What is another state I have lived besides Washington?').toLowerCase();
  }
  return seventhResponse;
}

// Give the user their results based on number of correct answers
function results(){
  if (correctAnswers > 5) {
    alert('Execellent Job ' + userName + ', you got ' + correctAnswers + ' out of 7 questions correct!');
  } else if (correctAnswers <= 5 && correctAnswers > 3) {
    alert('Ehh... not bad ' + userName + ' you got ' + correctAnswers + ' out of 7 questions correct.');
  } else {
    alert('Sorry ' + userName + ' you only got ' + correctAnswers + ' out of 7 questions correct, better luck next time.');
  }
}
