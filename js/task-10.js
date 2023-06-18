function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector('input')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const divBox = document.querySelector('#box')

console.dir(inputNum);
// console.dir(createBtn);
// console.dir(destroyBtn);
console.log(inputNum.value);

// console.log(`${size + 10}px`);