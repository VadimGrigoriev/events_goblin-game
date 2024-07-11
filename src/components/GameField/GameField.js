export default class GameField {
  constructor() {
    this.fieldSIze = 4;
    this.container = null;
    this.createField();
  }

  createContainer() {
    const fieldContainer = document.createElement('div');
    fieldContainer.classList.add('field-container');
    document.body.appendChild(fieldContainer);
  }

  createField() {
    this.createContainer();
    this.container = document.querySelector('.field-container');
    for (let index = 0; index < this.fieldSIze ** 2; index++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.container.appendChild(cell);
    }
  }
}
