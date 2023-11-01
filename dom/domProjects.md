# Dom Projects

[All Projects Links(stackBlitz)](https://stackblitz.com/edit/dom-project-chaiaurcode-3ekrtq?file=index.html,1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.css)

## Project1 (Color Changer)

```Javascript
//first we need to talk about events
//like onclick event
const buttons = document.querySelectorAll('.button');
const buttonsList = [...buttons];

console.log(buttons);
const body = document.querySelector('body');

buttons.forEach((buttons) => {
  console.log(buttons);
  buttons.addEventListener('click', (e) => {
  
    body.style.backgroundColor =e.target.id
  });
});


``````

## Project 2 (BMI Generator)

```javascript

//so bmi = (weight)/(heigh in meter* height in meter)

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if (height ==='' || height < 0 || isNaN(height)) {
    result.innerHTML = `please enter valid heigh`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please enter valid weight`;
  }else{
    const bmi = (weight)/((height*height)/10000)
    result.innerHTML = bmi
  }
});
``````

## Project 3(Digital Clock)

```Javascript
const clock=document.querySelector("#clock")


setInterval(()=>{
  const time = new Date().toLocaleTimeString();
  clock.innerHTML = time;
},1000)

```
## Project 4(Guess the number)

```javascript
let random = Math.floor(Math.random() * 100) + 1;

const currentGuess = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const previousGuess = document.querySelector('.guesses');
let guessesRemaining = document.querySelector('.lastResult');
const ans = document.querySelector('.lowOrHi');

let prevGuesses = [];
let playGame = true;
let numGuesses = 1;

const ele = document.createElement('Button');
const resultPara = document.querySelector('.resultParas');

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    let val = parseInt(currentGuess.value);
    console.log(val);
    validateValue(val);
  });
} else {
  startGame();
}

function validateValue(val) {
  //function for validation of the entered current value
  if (isNaN(val)) {
    alert('Please put a Number');
  } else if (val < 1) {
    alert('please put a number greater than 0');
  } else if (val > 100) {
    alert('please put a number less than 100');
  } else {
    prevGuesses.push(val);
    if (numGuesses === 11) {
      displayGuess(val);
      displayMessage(`Game is over .Random Number ${random}`);

      endGame();
    } else {
      displayGuess(val);
      checkGuess(val);
    }
  }
}

function checkGuess(val) {
  if (val === random) {
    displayMessage(`you won `);
  } else if (val < random) {
    displayMessage(`Your guess is too low`);
  } else {
    displayMessage(`your guess is too high`);
  }
}
function displayGuess(val) {
  currentGuess.value = '';
  previousGuess.innerHTML += `${val}  `;
  numGuesses++;
  guessesRemaining.innerHTML = `${11 - numGuesses}`;
}
function displayMessage(string) {
  ans.innerHTML = string;
}
function endGame() {
  currentGuess.value = '';
  currentGuess.setAttribute('disabled', '');

  ele.innerHTML = 'Start New Game';
  ele.setAttribute('id', 'newgame');
  resultPara.appendChild(ele);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButtton = document.querySelector('#newgame');
  newGameButtton.addEventListener('click', () => {
    currentGuess = '';
    prevGuesses = [];
    numGuesses = 1;
    currentGuess.removeAttribute('disabled');
    random = Math.floor(Math.random() * 100) + 1;
    playGame = true;
  });
}


```
## Project 5(Press a Key)

```Javascript
document.addEventListener('keydown', (e) => {
  document.querySelector('.key').innerHTML = `<table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>`;
});


```

##Project 6 (Changing Colors)

```Javascript
const hexString = '0123456789ABCDEF';

let hexColor = () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexString[Math.floor(Math.random() * 16 + 1)];
  }
  return color;
};

let changeColor;

document.querySelector('#start').addEventListener('click', (e) => {
  if (changeColor == null) {
    changeColor = setInterval(() => {
      document.querySelector('body').style.background = hexColor();
    }, 100);
  }
});

document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(changeColor);
  changeColor = null;
});

```