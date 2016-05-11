var correctAnswers = 0;
var userName = prompt('Hello! Thanks for visiting, what is your name?');
alert('Welcome ' + userName + '! I\'m going to ask you some questions.');
console.log('The user is named ' + userName);

var response;
var myAnswers = ['yes', 'yes', 'no', 'no', 'yes'];
var questions = ['Do I live with any animals?', 'Did I grow up in Washington?', 'Is ice cream my favorite dessert?',
'Have I been ski diving, bungee jumping and scuba diving?', 'Do I love snowboarding?'];
var myResponse = [', I live with a cat named Renly', ', I grew up on Bainbridge Island in Washington',
', My favorite dessert is panna cotta', ', I have been bungee jumping and sky diving but not scuba diving', ', I do love snowboarding'];

for (var i = 0; i < questions.length; i++) {
  response = prompt(questions[i]).toLowerCase();
  console.log(response);
  if (response === myAnswers[i] || response === myAnswers[i][0]) {
    alert('Correct! ' + userName + myResponse[i]);
    correctAnswers += 1;
  } else {
    alert('Wrong! ' + userName + myResponse[i]);
  }
}

var sixthAnswer = 26;
for (var i = 3; i >= 0; i--) {
  var sixthResponse = parseInt(prompt('How old am I?'));
  if (sixthResponse === sixthAnswer) {
    alert('I am 26, Great guess!');
    correctAnswers += 1;
    i = -1;
  }// else if (i = 0) {
//  }
  else if (sixthResponse > sixthAnswer) {
    alert('Wrong!, you guessed too high. You have ' + i + ' guesses remaining.');
  } else if (sixthResponse < sixthAnswer) {
    alert('Wrong!, you guessed too low. You have ' + i + ' guesses remaining,');
  }
}
