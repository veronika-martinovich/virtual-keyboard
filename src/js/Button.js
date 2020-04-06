export class Button {

  constructor(size, type, firstValue, secondValue, firstShift, secondShift, keyCode, activeValue) {
    this.size = size;
    this.type = type;
    this.firstValue = firstValue;
    this.secondValue = secondValue;
    this.firstShift = firstShift;
    this.secondShift = secondShift;
    this.keyCode = keyCode;
    this.activeValue = activeValue;
  }

  generateButton() {
    let button = document.createElement('div');
    button.classList.add('button');
    button.classList.add(`button_size_${this.size}`);
    button.classList.add(`button_type_${this.type}`);
    button.classList.add(`${this.keyCode}`);
    button.setAttribute('data-type', this.type);
    button.innerHTML = this[this.activeValue];
    return button;
  }
}
