export default class Board {
  constructor() {
    this.size = this.setSize();
    this.init(this.size);
  }

  init(size) {
    const field = document.createElement('div');
    for (let i = 0; i < size * size; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.setAttribute('id', i);
      field.append(cell);
    }
    field.className = 'field';
    const body = document.querySelector('body');
    body.append(field);
    field.style.setProperty('--side', size);
  }

  setSize() {
    let size = 0;
    do { size = +prompt('Выберете величину стороны поля, от 2 до 8', 8); }

    while (size < 2 || size > 8 || Number.isInteger(size) === false || typeof size !== 'number');
    return size;
  }
}
