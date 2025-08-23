// index.js
import { generateRandomNumber } from './randomgenerated.js';
import { validateGuess } from './validation.js';

const maxAttempts = 5;
let targetNumber;
let attemptsLeft;

const guessForm = document.getElementById('guess-form');
const inputField = document.getElementById('user-input');
const messageEl = document.getElementById('message');
const attemptsEl = document.getElementById('attempts');
const resetButton = document.getElementById('reset-button');

function initGame() {
  targetNumber = generateRandomNumber();
  attemptsLeft = maxAttempts;
  inputField.value = '';
  messageEl.textContent = 'Digite um número entre 1 e 100.';
  attemptsEl.textContent = `Tentativas restantes: ${attemptsLeft}`;
  inputField.disabled = false;
  resetButton.style.display = 'none';
}

guessForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const userGuess = parseInt(inputField.value, 10);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageEl.textContent = '⚠️ Por favor, insira um número válido entre 1 e 100.';
    return;
  }

  const result = validateGuess(userGuess, targetNumber, attemptsLeft);
  messageEl.textContent = result.message;
  attemptsLeft--;

  attemptsEl.textContent = `Tentativas restantes: ${attemptsLeft}`;

  if (result.gameOver) {
    inputField.disabled = true;
    resetButton.style.display = 'inline';
  }

  inputField.value = '';
});

resetButton.addEventListener('click', initGame);

window.onload = initGame;
