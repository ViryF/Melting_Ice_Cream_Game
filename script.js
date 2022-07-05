const sportWords = [
  'soccer',
  'baseball',
  'basketball',
  'football',
  'tennis',
  'track'
];
const foodWords = [
  'taco',
  'sushi',
  'spaghetti',
  'pizza',
  'burrito',
  'quesadilla'
];
const colorWords = ['blue', 'gray', 'black', 'red', 'pink', 'white'];
const musicWords = ['rock', 'country', 'classical', 'pop', 'rap', 'jazz'];

let mistakes = 0;
let maxMistakes = 6;

const letterButtons = document.getElementById('alphabetLetters');
const topicButtons = document.querySelector('topic');
const playAgain = document.querySelector('playAgain');
