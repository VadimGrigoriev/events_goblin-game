import GameField from '../GameField/GameField';
import getRandomEmptyCell from '../../utils/random-cell';
import Character from '../Character/Character';
import PointsSystem from '../points-system/points-system';

export default class Game {
  constructor(intervalTime, imageCharacter) {
    this.intervalTime = intervalTime;
    this.intervalId = null;
    this.gameField = new GameField();
    this.character = new Character(imageCharacter);
    this.pointsSustem = new PointsSystem('.field-container');

    this.placeCharacterToRandomCell = this.placeCharacterToRandomCell.bind(this);

    this.movementCharacter();
  }

  placeCharacterToRandomCell() {
    const cell = getRandomEmptyCell();
    cell.appendChild(this.character.getElement());
  }

  movementCharacter() {
    this.intervalId = setInterval(() => {
      if (this.pointsSustem.attempts === 0) {
        clearInterval(this.intervalId);
        return;
      }
      this.placeCharacterToRandomCell();
    }, this.intervalTime);
  }
}
