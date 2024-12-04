const gameArea = document.getElementById('game-area');
const target = document.getElementById('target');
const startButton = document.getElementById('start-button');
const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('score');

let time = 30; // Game duration in seconds
let score = 0;
let timer;
let countdown;

function startGame() {
  score = 0;
  time = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;
  startButton.disabled = true;
  target.style.display = 'block';
  moveTarget();
  countdown = setInterval(updateTime, 1000);
}

function endGame() {
  clearInterval(countdown);
  target.style.display = 'none';
  startButton.disabled = false;
  alert(`Game Over! Your score: ${score}`);
}

function updateTime() {
  time--;
  timeDisplay.textContent = time;
  if (time <= 0) {
    endGame();
  }
}

function moveTarget() {
  const gameAreaRect = gameArea.getBoundingClientRect();
  const targetSize = target.offsetWidth;

  const maxX = gameAreaRect.width - targetSize;
  const maxY = gameAreaRect.height - targetSize;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}

target.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveTarget();
});

startButton.addEventListener('click', startGame);