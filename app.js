var userName = prompt('Hello! Thanks for visiting, what is your name?');
alert('Welcome ' + userName + '! I\' going to ask you some questions please respond with yes or no.');
console.log('The user is named ' + userName);

var firstResponse = prompt('Do I live with any animals?').toLowerCase();
var firstAnswer = 'yes';
console.log(firstResponse);
if (firstAnswer === firstResponse || firstResponse === firstAnswer[0]) {
  alert('You are correct! ' + userName + ' I live with one cat named Renly.');
} else {
  alert('Bummer, you are wrong ' + userName + ' I live with a cat named Renly.');
}

var secondResponse = prompt('Do I live in Washington?').toLowerCase();
var secondAnswer = 'yes';
console.log('The user answered ' + secondResponse);
if (secondResponse === secondAnswer || secondResponse === secondAnswer[0]) {
  alert('You are correct ' + userName + ' I live in Seattle, Washington.');
} else {
  alert('Wrong! You should have read the bio better for clues ' + userName + '.');
}

var thirdResponse = prompt('Is ice cream my favorite dessert?').toLowerCase();
var thirdAnswer = 'no';
console.log('The user answered ' + thirdResponse);
if (thirdResponse === thirdAnswer || thirdResponse === thirdAnswer[0]) {
  alert('Good guess, ' + userName + ' my favorite dessert is panna cotta.');
} else {
  alert('Nice try but ice cream is not my favorite dessert ' + userName + ', better luck next time.');
}

var fourthResponse = prompt('Have I been ski diving, bungee jumping and scuba diving?').toLowerCase();
var fourthAnswer = 'no';
console.log('The user answered ' + fourthResponse);
if (fourthResponse === fourthAnswer || fourthResponse === fourthAnswer[0]) {
  alert('You are correct ' + userName + ', I have been sky diving and bungee jumping but not scuba diving.');
} else {
  alert('Wrong! I have never been scuba diving.');
}

var fifthResponse = prompt('Do I love snowboarding?').toLowerCase();
var fifthAnswer = 'yes';
console.log('The user answered ' + fifthResponse);
if (fifthResponse === fifthAnswer || fifthResponse === fifthAnswer[0]) {
  alert('You are correct ' + userName + ', I do love snowboarding.');
} else {
  alert('You are wrong, ' + userName + ', I do love snowboarding');
}
