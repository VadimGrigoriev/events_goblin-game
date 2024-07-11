import '../css/style.css';
import Game from '../components/Game/Game';
import imageCharacter from '../assets/goblin.png';

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game(1000, imageCharacter);
});
