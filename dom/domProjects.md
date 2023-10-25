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

