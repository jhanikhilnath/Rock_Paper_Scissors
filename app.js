{
	startGame();
	function startGame() {
		let button = document.querySelectorAll('.select button');
		let pScore = 0;
		let cScore = 0;

		button.forEach(function (sup) {
			sup.addEventListener('click', function () {
				let message = document.querySelector('.match p');
				let playerHand = document.querySelector('.player-hand');
				let computerHand = document.querySelector('.comp-hand');
				let choices = ['rock', 'paper', 'scissors'];
				let computerNumber = Math.floor(Math.random() * 3);
				let computerChoice = choices[computerNumber];
				let playerChoice = this.textContent.toLowerCase();
				let computerScore = document.querySelector('.computer-score p');
				let playerScore = document.querySelector('.player-score p');
				///////// Image Changing
				playerHand.src = './assets/' + playerChoice + '.png';
				computerHand.src = './assets/' + computerChoice + '.png';
				if (playerChoice === computerChoice) {
					// pScore++;
					// cScore++;
					// playerScore.textContent = pScore;
					// computerScore.textContent = cScore;
					message.textContent = 'Its a Draw';
				}
				if (playerChoice === 'rock') {
					if (computerChoice === 'scissors') {
						pScore++;
						playerScore.textContent = pScore;
						message.textContent = 'Player Scored!!';
					}
					if (computerChoice === 'paper') {
						cScore++;
						computerScore.textContent = cScore;
						message.textContent = 'Computer Scored!!';
					}
				}
				if (playerChoice === 'scissors') {
					if (computerChoice === 'paper') {
						pScore++;
						playerScore.textContent = pScore;
						message.textContent = 'Player Scored!!';
					}
					if (computerChoice === 'rock') {
						cScore++;
						computerScore.textContent = cScore;
						message.textContent = 'Computer Scored!!';
					}
				}
				if (playerChoice === 'paper') {
					if (computerChoice === 'rock') {
						pScore++;
						playerScore.textContent = pScore;
						message.textContent = 'Player Scored!!';
					}
					if (computerChoice === 'scissors') {
						cScore++;
						computerScore.textContent = cScore;
						message.textContent = 'Computer Scored!!';
					}
				}

				console.log(playerChoice, computerChoice);
			});
		});
	}
}
