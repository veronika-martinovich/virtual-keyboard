export class Button {

  constructor(size, type, firstValue, secondValue, firstShift, secondShift, keyCode) {
    this.size = size;
    this.type = type;
    this.firstValue = firstValue;
    this.secondValue = secondValue;
    this.firstShift = firstShift;
    this.secondShift = secondShift;
    this.keyCode = keyCode;
  }

  generateButton() {
    let button = document.createElement('div');
    button.classList.add('button');
    button.classList.add(`button_size_${this.size}`);
    button.classList.add(`button_type_${this.type}`);
    if (this.type === 'system') button.classList.add(`${this.keyCode}`);
    button.setAttribute('data-type', this.type);
    button.innerHTML = this.firstValue;
    return button;
  }

}