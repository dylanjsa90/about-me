var userName = prompt('Hello! Thanks for visiting, what is your name?');
alert('Welcome ' + userName + '! I\' going to ask you some questions please respond with yes or no.');
console.log('The user is named ' + userName);

var firstResponse = prompt('Do I live with any animals?').toLowerCase();
var firstAnswer = 'yes';
if (firstAnswer === firstResponse || firstResponse[0] === firstAnswer[0]) {
  alert('You are correct! ' + userName + ' I live with 1 cat.');
} else {
  alert('Bummer, you are wrong ' + userName + ' better luck next time.');
}

var secondResponse = prompt('Do I live in Washington?').toLowerCase();
var secondAnswer = 'yes';
if (secondResponse === secondAnswer || secondResponse[0] === secondAnswer[0]) {
  alert('You are correct ' + userName + ' I live in Seattle, Washington.');
} else {
  alert('Wrong! You should have read the bio better for clues ' + userName + '.');
}
