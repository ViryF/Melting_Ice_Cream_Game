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

let answer = '';
let mistakes = 0;
let maxMistakes = 6;
let currentGuess = [];
let wordStatus = null;

const errors = document.getElementById('mistakes');
errors.innerHTML = mistakes;
const maxErrors = document.getElementById('maxMistakes');
maxErrors.innerHTML = maxMistakes;
const keyWord = document.querySelector('.keyWord');
keyWord.innerHTML = wordStatus;

// FUNCTIONS

const spaceCount = () => {
  for (let i = 0; i < chosenWord.length; i++) {
    let myDiv = document.createElement('div');
    wordToGuess.appendChild(myDiv);
    let mySpan = document.createElement('span');
    let myDiv1 = document.createElement('div');
    mySpan.innerHTML = chosenWord.at(i);
    myDiv1.innerHTML = '_';
    myDiv.appendChild(mySpan);
    myDiv.appendChild(myDiv1);
    myDiv.setAttribute('class', 'container');
    mySpan.classList.add('hidden');
    myDiv1.setAttribute('class', 'underline');
  }
};

const generateRandomWord = () => {
  chosenWord = food[Math.floor(Math.random() * food.length)];
};

generateRandomWord();
console.log(chosenWord);
spaceCount();

const checkWin = () => {
  if (wordStatus === chosenWord.length) {
    document.querySelector('.keyWord').innerHTML = 'Congratulations! You Won!!';
  }
};

const makeGuess = (evt) => {
  let currentGuess = evt.currentTarget.innerText.toLowerCase();
  if (chosenWord.includes(currentGuess)) {
    let spanTags = document.querySelectorAll('.hidden');
    spanTags.forEach((element) => {
      if (element.innerText === currentGuess) {
        element.classList.remove('hidden');
      }
    });
  } else {
    updateMistakeCount();
    disappearIceCream();
  }
  console.log(chosenWord.includes(currentGuess));
};

// EVENT LISTENERS

alphabetList.forEach((element) => {
  element.addEventListener(
    'click',
    (evt) => makeGuess(evt, chosenWord.innerText),
    { once: true }
  );
});
