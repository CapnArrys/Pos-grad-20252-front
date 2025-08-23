export function validateGuess(userGuess, targetNumber, attemptsLeft) {
  let message = '';
  let correct = false;
  let gameOver = false;

  if (userGuess === targetNumber) {
    message = 'Winner Winner Chicken Dinner!';
    correct = true;
    gameOver = true;
  } else if (userGuess < targetNumber) {
    message = 'O número é maior.';
  } else {
    message = 'O número é menor.';
  }

  if (!correct && attemptsLeft - 1 === 0) {
    message = `Você perdeu! O número era ${targetNumber}.`;
    gameOver = true;
  }

  return {
    message,
    correct,
    gameOver
  };
}
