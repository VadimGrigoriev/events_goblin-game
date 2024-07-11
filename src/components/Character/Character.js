export default class Character {
  constructor(imageCharacter) {
    this.characterEl = document.createElement('img');
    this.characterEl.src = imageCharacter;
    this.characterEl.classList.add('character');
  }

  getElement() {
    return this.characterEl;
  }
}
