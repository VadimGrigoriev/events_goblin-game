export default function getRandomEmptyCell() {
  const cells = document.querySelectorAll('.cell');
  const emptyCells = [...cells].filter((cell) => cell.childElementCount === 0);
  const randomCell = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomCell];
}
