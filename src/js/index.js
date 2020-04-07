import { buttons } from "./data";
import { Button } from "./Button";

const keyboardHeading = document.createElement("h1");
keyboardHeading.textContent = "Virtual keyboard for Windows OS";

const keyboardDescription = document.createElement("p");
keyboardDescription.classList.add("keyboard_description");
keyboardDescription.textContent =
  "To change language press ShiftLeft + AltLeft";

const keyboardContainer = document.createElement("div");
keyboardContainer.classList.add("keyboard_container");

const screen = document.createElement("textarea");
screen.classList.add("screen");

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
keyboardContainer.append(
  keyboardHeading,
  keyboardDescription,
  screen,
  keyboard
);
document.body.append(keyboardContainer);

let isCapsLockOn = false;
let activeValue = sessionStorage.getItem("activeValue") || "firstValue";
let nextValue = sessionStorage.getItem("nextValue") || "secondValue";
let keysPressed = {};
let keyboardButtonsPressed = {};
let domButtonsPressed = {};

const keyboardButtons = [];
function createButtons() {
  buttons.forEach(item => {
    const keyboardButton = new Button(
      item.size,
      item.type,
      item.firstValue,
      item.secondValue,
      item.firstShift,
      item.secondShift,
      item.keyCode,
      activeValue
    );
    keyboard.append(keyboardButton.generateButton());
    keyboardButtons.push(keyboardButton);
  });
}
createButtons();

let allButtons = document.querySelectorAll(".button");
let allDOMButtons = [];
for (let i = 0; i < allButtons.length; i++) {
  allDOMButtons.push(allButtons[i]);
}

document.addEventListener("keydown", handleKeydown);
document.addEventListener("keyup", handleKeyup);
keyboard.addEventListener("click", handleClick);
keyboard.addEventListener("mousedown", addClickAnimation);
keyboard.addEventListener("mouseup", removeClickAnimation);

function handleKeydown(event) {
  keysPressed[event.code] = event.code;
  keyboardButtonsPressed[event.code] = keyboardButtons.find(boardButton => {
    return boardButton.keyCode == keysPressed[event.code];
  });
  domButtonsPressed[event.code] = allDOMButtons.find(domButton => {
    return domButton.classList.contains(event.code);
  });
  domButtonsPressed[event.code].classList.add("button_active");

  if (keysPressed["ShiftLeft"] && keysPressed["AltLeft"]) {
    allDOMButtons.forEach(domButton => {
      let keyboardButton = keyboardButtons.find(boardButton => {
        return boardButton[activeValue] == domButton.innerHTML;
      });
      domButton.innerHTML = keyboardButton[nextValue];
    });
    activeValue = nextValue;
    sessionStorage.setItem("activeValue", `${activeValue}`);
    nextValue = activeValue === "firstValue" ? "secondValue" : "firstValue";
    sessionStorage.setItem("nextValue", `${nextValue}`);
  }

  if (
    !keysPressed["Backspace"] &&
    !keysPressed["Delete"] &&
    !keysPressed["Tab"] &&
    !keysPressed["Enter"] &&
    !keysPressed["CapsLock"] &&
    !keysPressed["ShiftLeft"] &&
    !keysPressed["ShiftRight"] &&
    !keysPressed["ControlLeft"] &&
    !keysPressed["ControlRight"] &&
    !keysPressed["MetaLeft"] &&
    !keysPressed["AltLeft"] &&
    !keysPressed["AltRight"]
  ) {
    if (!isCapsLockOn) {
      screen.textContent += domButtonsPressed[event.code].innerHTML;
    }
    if (isCapsLockOn) {
      screen.textContent += domButtonsPressed[
        event.code
      ].innerHTML.toUpperCase();
    }
  }

  if (keysPressed["Backspace"]) {
    if (screen.selectionStart === 0) {
      screen.setSelectionRange(screen.value.length, screen.value.length)
    }
    let pos = screen.selectionStart - 1;
    screen.textContent =
      screen.textContent.slice(0, screen.selectionStart - 1) +
      screen.textContent.slice(screen.selectionStart);
      screen.setSelectionRange(pos, pos)
  }

  if (keysPressed["Delete"]) {
    if (screen.selectionStart === 0) {
      screen.setSelectionRange(screen.value.length, screen.value.length)
    }
    let pos = screen.selectionStart;
    screen.textContent =
      screen.textContent.slice(0, screen.selectionStart) +
      screen.textContent.slice(screen.selectionStart + 1);
      screen.setSelectionRange(pos, pos)
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

function handleKeyup(event) {
  domButtonsPressed[event.code].classList.remove("button_active");
  delete keysPressed[event.code];
  delete keyboardButtonsPressed[event.code];
  delete domButtonsPressed[event.code];
}

function handleClick(event) {
  if (
    (event.target.dataset.type === "input" ||
      event.target.dataset.type === "input-system") &&
    !isCapsLockOn
  ) {
    screen.textContent += event.target.textContent.toLowerCase();
  }

  if (
    (event.target.dataset.type === "input" ||
      event.target.dataset.type === "input-system") &&
    isCapsLockOn
  ) {
    screen.textContent += event.target.textContent.toUpperCase();
  }

  if (event.target.textContent === "Backspace") {
    if (screen.selectionStart === 0) {
      screen.setSelectionRange(screen.value.length, screen.value.length)
    }
    let pos = screen.selectionStart - 1;
    screen.textContent =
      screen.textContent.slice(0, screen.selectionStart - 1) +
      screen.textContent.slice(screen.selectionStart);
      screen.setSelectionRange(pos, pos)
  }

  if (event.target.textContent === "Del") {
    if (screen.selectionStart === 0) {
      screen.setSelectionRange(screen.value.length, screen.value.length)
    }
    let pos = screen.selectionStart;
    screen.textContent =
      screen.textContent.slice(0, screen.selectionStart) +
      screen.textContent.slice(screen.selectionStart + 1);
      screen.setSelectionRange(pos, pos)
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

function addClickAnimation() {
  if (event.target.classList.contains("button")) {
    event.target.classList.add("button_active");
  }
}

function removeClickAnimation() {
  if (event.target.classList.contains("button")) {
    event.target.classList.remove("button_active");
  }
}
