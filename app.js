const game = () => {
    let myScore = 0;
    let cScore = 0;


    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const myHand = document.querySelector('.my-hand');
        const computerHand = document.querySelector('.computer-hand');

        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach((options) => {
            options.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);

                compareHands(this.textContent, computerChoice);

                myHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () => {
        const mScore = document.getElementById('my-score');
        const computerScore = document.getElementById('computer-score');
        mScore.textContent = myScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const drawText = document.getElementById('draw');
        const myWinner = document.getElementById('my-winner');
        const computerWinner = document.getElementById('computer-winner');

        if (playerChoice === computerChoice) {
            drawText.style.display = "block";
            myWinner.style.display = "none";
            computerWinner.style.display = "none"
            return;
        }   else {
            drawText.style.display = "none";
        }

        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                myWinner.style.display = "block";
                computerWinner.style.display = "none";
                myScore++;
                updateScore();
                return;
            }   else {
                computerWinner.style.display = "block";
                myWinner.style.display = "none";
                cScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                myWinner.style.display = "block";
                computerWinner.style.display = "none";
                myScore++;
                updateScore();
                return;
            }   else {
                computerWinner.style.display = "block";
                myWinner.style.display = "none";
                cScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                myWinner.style.display = "block";
                computerWinner.style.display = "none";
                myScore++;
                updateScore();
                return;
            }   else {
                computerWinner.style.display = "block";
                myWinner.style.display = "none";
                cScore++;
                updateScore();
                return;
            }
        }
        
    }
playMatch();
};

game();