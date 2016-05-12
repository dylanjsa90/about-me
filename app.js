var correctAnswers = 0;
var userName = prompt('Hello! Thanks for visiting, what is your name?');
alert('Welcome ' + userName + '! I\'m going to ask you some questions.');
console.log('The user is named ' + userName);
var sixthAnswer = 26;
var response;
var myAnswers = ['yes', 'yes', 'no', 'no', 'yes'];
var questions = ['Do I live with any animals?', 'Did I grow up in Washington?', 'Is ice cream my favorite dessert?',
'Have I been ski diving, bungee jumping and scuba diving?', 'Do I love snowboarding?'];
var myResponse = [', I live with a cat named Renly.', ', I grew up on Bainbridge Island in Washington.',
', My favorite dessert is panna cotta.', ', I have been bungee jumping and sky diving but not scuba diving.', ', I do love snowboarding.'];
firstQuestionSet();
secondQuestionSet();
function firstQuestionSet()
{for (var i = 0; i < questions.length; i++) {
  response = prompt(questions[i]).toLowerCase();
  console.log(response);
  if (!isNaN(response)) {
    alert('Please enter yes/y for yes or no/n for no');
    response = prompt(questions[i].toLowerCase());
  }
  if (response === myAnswers[i] || response === myAnswers[i][0]) {
    alert('Correct! ' + userName + myResponse[i]);
    correctAnswers += 1;
  } else {
    alert('Wrong! ' + userName + myResponse[i]);
  }
}
}

function secondQuestionSet() {

  for (var i = 3; i >= 0; i--) {
  var sixthResponse = parseInt(prompt('How old am I?'));
  if (isNaN(sixthResponse)) {
    alert('Not valid input please enter a numeric value.');
    sixthResponse = parseInt(prompt('How old am I?'));
  }
  if (sixthResponse === sixthAnswer) {
    alert('I am 26, Great guess!');
    correctAnswers += 1;
    i = -1;
  } else if (i === 0) {
    alert('Sorry you ran out of guesses, I am 26 yours old');
  } else if (sixthResponse > sixthAnswer) {
    alert('Wrong!, you guessed too high. You have ' + i + ' guesses remaining.');
  } else if (sixthResponse < sixthAnswer) {
    alert('Wrong!, you guessed too low. You have ' + i + ' guesses remaining.');
  }
}

  var endLoop = false;
  var seventhAnswers = ['ohio', ' california', ' illinois', ' montana'];
  var guessesRemaining = 6;

  while (endLoop === false) {
    var seventhResponse = prompt('What is another state I have lived besides Washington?').toLowerCase();
    if (!isNaN(seventhResponse)) {
      alert('Numeric values are not valid responses');
      seventhResponse = prompt('What is another state I have lived besides Washington?').toLowerCase();
    }
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

    if (guessesRemaining === 0)
  {
      endLoop = true;
    }
  }
}
if (correctAnswers > 5) {
  alert('Execellent Job ' + userName + ', you got ' + correctAnswers + ' out of 7 questions correct!');
} else if (correctAnswers <= 5 && correctAnswers > 3) {
  alert('Ehh... not bad ' + userName + ' you got ' + correctAnswers + ' out of 7 questions correct.');
} else {
  alert('Sorry ' + userName + ' you only got ' + correctAnswers + ' out of 7 questions correct, better luck next time.');
}
