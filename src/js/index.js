import { buttons } from './data';
import { Button } from './Button';

const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard_container');
const screen = document.createElement('textarea');
screen.classList.add('screen');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
keyboardContainer.append(screen, keyboard);
document.body.append(keyboardContainer);

function createButtons() {
  buttons.forEach(item => {
    const keyboardButton = new Button(item.size, item.type, item.firstValue, item.secondValue, item.firstShift, item.secondShift, item.keyCode);
    keyboard.append(keyboardButton.generateButton());
  })
}

createButtons();

document.addEventListener('keydown', function(event) {
  if (event.code == 'ShiftLeft' && event.code == 'ControlLeft') {
    alert('yes');
  }

  if (event.code == 'ShiftLeft') {
    console.log('yes');
  }

})

