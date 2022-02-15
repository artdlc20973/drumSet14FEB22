// DETECTING BUTTON PRESS
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  let buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);
});
}

// DETECTING KEYBOARD PRESS
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
});

function makeSound(key){
  switch (key){
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
      
      default: console.log(buttonInnerHTML)
  }
}


// let audio = new Audio("sounds/tom-1.mp3");
//   audio.play();


// // calculator exercise
// function add(num1, num2) {
//   return num1 + num2;
// }
// function subtract(num1, num2) {
//   return num1 - num2;
// }
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// function divide(num1, num2) {
//   return num1 / num2;
// }
// function calculator(num1, num2, operator){
//   return operator(num1, num2);
// }
// PLAY SOUND IN JAVASCRIPT*************
// var audio = new Audio('audio_file.mp3');
// audio.play();

// // CONSTRUCTOR FUNCTION example
// function HouseKeeper (yrsOfExp, name, cleaningRepertoire){
//   this.yrsOfExp = yrsOfExp;
//   this.name = name;
//   this.cleaningRepertoire = cleaningRepertoire;
//   this.clean = function() {
//     alert("Cleaning in progress...");
//   }
// }
