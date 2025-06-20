function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('player-choice').innerText = `You chose: ${capitalize(playerChoice)} 🧑`;
  document.getElementById('computer-choice').innerText = `Computer chose: ${capitalize(computerChoice)} 💻`;

  let winnerText = '';

  if (playerChoice === computerChoice) {
    winnerText = "🤝 It's a Draw!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    winnerText = "🎉 You Win!";
  } else {
    winnerText = "😞 Computer Wins!";
  }

  const winnerElement = document.getElementById('winner');
  winnerElement.classList.remove('show'); // reset animation
  void winnerElement.offsetWidth; // trigger reflow
  winnerElement.innerText = winnerText;
  winnerElement.classList.add('show');
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
