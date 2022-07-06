// Global Variables
// GETTERS
const prompt = document.querySelector('.prompt');
const wordToGuess = document.querySelector('.keyWord');
const playAgain = document.querySelector('.playAgain');
let alphabetList = document.querySelectorAll('.letters');

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
