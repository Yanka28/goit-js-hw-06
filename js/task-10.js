function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const inputNum = document.querySelector('input')
// const createBtn = document.querySelector('button[data-create]')
// const destroyBtn = document.querySelector('button[data-destroy]')
// const divBox = document.querySelector('#box')

// // console.dir(inputNum);
// // console.dir(createBtn);
// // console.dir(destroyBtn);


// // console.log(`${size + 10}px`);
// function OnInput() {
//   let num = Number(inputNum.value)
//   // console.log(num);
//   return num
// }
 
// const createBoxes = (amount) => { 
//   const arr = []
//   let size = 30
//   for (let i = 0; i < amount; i += 1){
//     arr.push(`<div id="boxes""></div>`)
    
//   }
// // // divBox.append(...arr)
// console.log(arr);
// }

// inputNum.addEventListener('input', OnInput)
// let number = OnInput()
// console.log(number);

// // console.log(num);
// // createBoxes(OnInput)
// // // createBtn.addEventListener('click', createBoxes(OnInput))
 
