// Global Variables
// GETTERS
const letterButtons = document.querySelector('.leter');
const errors = document.getElementById('mistakes');
const maxErrors = document.getElementById('maxMistakes');
const prompt = document.querySelector('prompt');
const wordToGuess = document.querySelector('keyWord');
const alphabet = document.getElementById('alphabetLetters');
const playAgain = document.querySelector('playAgain');

// VARIABLES

const food = [
  'taco',
  'sushi',
  'spaghetti',
  'pizza',
  'burrito',
  'quesadilla',
  'ramen',
  'rice'
];
let mistakes = 0;
let maxMistakes = 6;
let currentGuesses = [];

// FUNCTIONS

const generateRandomWord = () => {
  chosenWord = food[Math.floor(Math.random() * food.length)];
};

// EVENT LISTENERS
