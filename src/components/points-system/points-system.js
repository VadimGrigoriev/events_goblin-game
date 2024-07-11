export default class PointsSystem {
  constructor(container) {
    if (typeof container === 'string') {
      container = document.querySelector(container);
    }
    this.container = container;
    this.attempts = 5;
    this.points = 0;

    this.updatePointsAndAttempts = this.updatePointsAndAttempts.bind(this);

    this.container.addEventListener('click', this.updatePointsAndAttempts);

    this.updateStatsTable();
  }

  checkCells(e) {
    const { target } = e;
    const parentTarget = target.closest('.cell');
    return !!parentTarget.querySelector('.character');
  }

  removeImg() {
    const img = document.querySelector('.character');
    img.remove();
  }

  updatePointsAndAttempts(e) {
    if (this.attempts !== 0) {
      const boolValue = this.checkCells(e);
      if (boolValue) {
        this.points++;
        this.removeImg();
      } else {
        this.attempts--;
      }
      this.updateStatsTable();
    }
  }

  updateStatsTable() {
    if (this.attempts >= 0) {
      const statsTable = document.querySelector('.stats-table');
      statsTable.querySelector('.attempts').textContent = this.attempts;
      statsTable.querySelector('.points').textContent = this.points;
    }
  }
}
