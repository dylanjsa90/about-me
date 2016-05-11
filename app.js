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

// if (response[0] === answer[0] || response[0] === answer[0][0]) {
//   alert('You are correct! ' + userName + ' I live with a cat named Renly.');
// } else {
//   alert('You are wrong ' + userName + ' I live with a cat named Renly.');
// }
//
// if (secondResponse === secondAnswer || secondResponse === secondAnswer[0]) {
//   alert('You are correct ' + userName + ' I live in Seattle, Washington.');
// } else {
//   alert('Wrong! You should have read the bio better for clues ' + userName + '.');
// }
//
// if (thirdResponse === thirdAnswer || thirdResponse === thirdAnswer[0]) {
//   alert('Good guess, ' + userName + ' my favorite dessert is panna cotta.');
// } else {
//   alert('Nice try but ice cream is not my favorite dessert ' + userName + ', better luck next time.');
// }
//
// if (fourthResponse === fourthAnswer || fourthResponse === fourthAnswer[0]) {
//   alert('You are correct ' + userName + ', I have been sky diving and bungee jumping but not scuba diving.');
// } else {
//   alert('Wrong! I have never been scuba diving.');
// }
//
// if (fifthResponse === fifthAnswer || fifthResponse === fifthAnswer[0]) {
//   alert('You are correct ' + userName + ', I do love snowboarding.');
// } else {
//   alert('You are wrong ' + userName + ', I do love snowboarding');
// }

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
