import { buttons } from "./data";
import { Button } from "./Button";

const keyboardContainer = document.createElement("div");
keyboardContainer.classList.add("keyboard_container");
const screen = document.createElement("textarea");
screen.classList.add("screen");
const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
keyboardContainer.append(screen, keyboard);
document.body.append(keyboardContainer);
const keyboardButtons = [];
let isCapsLockOn = false;
let activeValue = "firstValue";
let nextValue = "secondValue";
let keysPressed = {};

function createButtons() {
  buttons.forEach(item => {
    const keyboardButton = new Button(
      item.size,
      item.type,
      item.firstValue,
      item.secondValue,
      item.firstShift,
      item.secondShift,
      item.keyCode
    );
    keyboard.append(keyboardButton.generateButton());
    keyboardButtons.push(keyboardButton);
  });
}
createButtons();

let inputButtons = document.querySelectorAll(".button_type_input");
let inputDOMButtons = [];
for (let i = 0; i < inputButtons.length; i++) {
  inputDOMButtons.push(inputButtons[i]);
}

document.addEventListener("keydown", handleKeydown);
document.addEventListener("keyup", handleKeyup);
keyboard.addEventListener("click", handleClick);


function handleKeydown(event) {
  keysPressed[event.key] = event.key;

  if (keysPressed["Shift"] && keysPressed["Alt"]) {
    inputDOMButtons.forEach(domButton => {
      let keyboardButton = keyboardButtons.find(boardButton => {
        return boardButton[activeValue] == domButton.innerHTML;
      });
      domButton.innerHTML = keyboardButton[nextValue];
    });
    activeValue = nextValue;
    nextValue = activeValue === "firstValue" ? "secondValue" : "firstValue";
  }

  if (
    !keysPressed["Backspace"] &&
    !keysPressed["Delete"] &&
    !keysPressed["Tab"] &&
    !keysPressed["Enter"] &&
    !keysPressed["CapsLock"] &&
    !keysPressed["Shift"] &&
    !keysPressed["Control"] &&
    !keysPressed["Meta"] &&
    !keysPressed["Alt"] &&
    !keysPressed["ArrowUp"] &&
    !keysPressed["ArrowDown"] &&
    !keysPressed["ArrowLeft"] &&
    !keysPressed["ArrowRight"]
  ) {
    let keyboardButton = keyboardButtons.find(boardButton => {
      if (!isCapsLockOn) {
        return (
          boardButton.firstValue == keysPressed[event.key] ||
          boardButton.secondValue == keysPressed[event.key]
        );
      } 
      if (isCapsLockOn) {
        return (
          boardButton.firstValue.toUpperCase() == keysPressed[event.key] ||
          boardButton.secondValue.toUpperCase() == keysPressed[event.key]
        );
      } 
    });
    console.log(keyboardButton)
    let domButton = inputDOMButtons.find(button => {
      return (
        button.innerHTML == keyboardButton.firstValue ||
        button.innerHTML == keyboardButton.secondValue
      );
    });
    
    if (!isCapsLockOn) {
      screen.textContent += domButton.innerHTML
    } 
    if (isCapsLockOn) {
      screen.textContent += domButton.innerHTML.toUpperCase();
    }}

  if (keysPressed["Backspace"]) {
    screen.textContent = screen.textContent.slice(0, -1);
  }

  if (keysPressed["Delete"]) {
    screen.textContent =
    screen.textContent.slice(0, screen.selectionEnd) +
    screen.textContent.slice(screen.selectionEnd + 1);
  }
 
  if (keysPressed["Tab"]) {
    screen.textContent += "    ";
  }

  if (keysPressed["Enter"]) {
    screen.textContent += "\n";
  }

  if (keysPressed["CapsLock"]) {
    isCapsLockOn = !isCapsLockOn;
  }
}

export function handleKeyup(event) {
  delete keysPressed[event.key];
}

function handleClick(event) {

  if (event.target.dataset.type === "input" && !isCapsLockOn) {
    screen.textContent += event.target.textContent.toLowerCase();
  }

  if (event.target.dataset.type === "input" && isCapsLockOn) {
    screen.textContent += event.target.textContent.toUpperCase();
  }

  if (event.target.dataset.type === "system") {

    if (event.target.textContent === "Backspace") {
      screen.textContent = screen.textContent.slice(0, -1);
    }

    if (event.target.textContent === "Del") {
      screen.textContent =
        screen.textContent.slice(0, screen.selectionEnd) +
        screen.textContent.slice(screen.selectionEnd + 1);
    }

    if (event.target.textContent === "Tab") {
      screen.textContent += "    ";
    }

    if (event.target.textContent === "Enter") {
      screen.textContent += "\n";
    }

    if (event.target.textContent === "CapsLock") {
      isCapsLockOn = !isCapsLockOn;
    }
  }
  
}