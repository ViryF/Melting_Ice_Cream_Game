// Global Variables
// GETTERS
const prompt = document.querySelector('.prompt');
const playAgainButton = document.querySelector('.playAgain');
const alphabetLetters = document.querySelector('#alphabetletters');

// VARIABLES
const imgSrcArray = [
  'images/0.png',
  'images/1.png',
  'images/2.png',
  'images/3.png',
  'images/4.png',
  'images/5.png',
  'images/6.png'
];
const food = [
  'taco',
  'sushi',
  'spaghetti',
  'pizza',
  'burrito',
  'quesadilla',
  'soup',
  'rice'
];

let chosenWord = '';
let mistakes = 0;
let maxMistakes = 6;
let currentGuess = [];
let wordStatus = null;
const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const errors = document.getElementById('mistakes');
errors.innerHTML = mistakes;
const maxErrors = document.getElementById('maxMistakes');
maxErrors.innerHTML = maxMistakes;
const keyWord = document.querySelector('.keyWord');
keyWord.innerHTML = wordStatus;
const pic = document.querySelector('#iceCreamPic');

// FUNCTIONS

const spaceCount = () => {
  for (let i = 0; i < chosenWord.length; i++) {
    let myDiv = document.createElement('div');
    keyWord.appendChild(myDiv);
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
spaceCount();

const createAlphabet = () => {
  alphabetLetters.innerHTML = '';
  alphabet.forEach((letter) => {
    let div = document.createElement('div');
    div.classList.add('letters');
    div.innerText = letter;
    div.addEventListener('click', (evt) => makeGuess(evt), { once: true });
    alphabetLetters.appendChild(div);
  });
};
createAlphabet();

let alphabetList = document.querySelectorAll('.letters');

const checkWin = () => {
  if (wordStatus === chosenWord.length) {
    alphabetLetters.innerHTML = '';
    document.querySelector('.keyWord').innerHTML = 'Congratulations! You Won!!';
  }
};

const gameOver = () => {
  if (mistakes === 6) {
    alphabetLetters.innerHTML = '';
    document.querySelector(
      '.keyWord'
    ).innerHTML = `You Lost!! The answer was ${chosenWord}`;
  }
};

const updateMistakeCount = () => {
  if (mistakes < maxMistakes) {
    mistakes++;
    errors.innerText = mistakes;
    pic.setAttribute('src', imgSrcArray[mistakes]);
  } else {
    gameOver();
  }
};

const makeGuess = (evt) => {
  let currentGuess = evt.target.innerText.toLowerCase();
  if (chosenWord.includes(currentGuess)) {
    let spanTags = document.querySelectorAll('.hidden');
    spanTags.forEach((element) => {
      if (element.innerText === currentGuess) {
        wordStatus++;
        element.classList.remove('hidden');
        evt.currentTarget.classList.add('hidden');
        checkWin();
      }
    });
  } else {
    evt.currentTarget.classList.add('hidden');
    updateMistakeCount();
    gameOver();
  }
};

const resetGame = () => {
  createAlphabet();
  mistakes = 0;
  errors.innerText = mistakes;
  currentGuess = [];
  wordStatus = null;
  keyWord.innerHTML = '';
  pic.setAttribute('src', imgSrcArray[0]);
  generateRandomWord();
  spaceCount();
};

// EVENT LISTENERS

playAgainButton.addEventListener('click', resetGame);
