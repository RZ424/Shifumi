const choices = ['Pierre', 'Feuille', 'Ciseaux'];
const maxScore = 3;

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

const playerScoreDiv = document.querySelector('.player-score');
const computerScoreDiv = document.querySelector('.computer-score');
const roundDiv = document.querySelector('.round');
const playerChoiceDiv = document.querySelector('.user-choice');
const computerChoiceDiv = document.querySelector('.computer-choice');
const roundResultDiv = document.querySelector('.round-result');
const finalResultDiv = document.querySelector('.final-result');
const countdownDiv = document.querySelector('.countdown');
const restartButton = document.getElementById('restart-button');

restartButton.classList.add('hidden');

function choiceListener() {
    const choiceButtons = document.querySelectorAll('.choice-button');
    choiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (playerScore < maxScore && computerScore < maxScore) {
                playRound(button.id);
            }
        });
    });
}

function checkWinner() {
    if (playerScore === maxScore) {
        finalResultDiv.textContent = "Tu as gagné la partie !";
        restartButton.classList.remove('hidden');
    } else if (computerScore === maxScore) {
        finalResultDiv.textContent = "L'ordi a gagné !";
        restartButton.classList.remove('hidden');
    }
};

function playRound(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    playerChoiceDiv.textContent = "Votre choix :";
    computerChoiceDiv.textContent = "Choix de l'ordi :"
    roundResultDiv.textContent = "Résultat du tour :"

    setTimeout(() => {
        countdownDiv.classList.remove('hidden');
        countdownDiv.textContent = "Shi..";
    }, 250);

    setTimeout(() => countdownDiv.textContent = "Fu..", 500);

    setTimeout(() => countdownDiv.textContent = "Mi !", 750);

    setTimeout(() => {
        countdownDiv.classList.add('hidden');

        playerChoiceDiv.textContent = `Votre choix : ${playerChoice}`;
        computerChoiceDiv.textContent = `Choix de l'ordi : ${computerChoice}`;
        roundCount++;
        roundDiv.textContent = `Nombre de tour : ${roundCount}`;

        let roundResult = ''

        if (playerChoice === computerChoice) {
            roundResult = "Egalité !"
        } else if (
            (playerChoice === "Pierre" && computerChoice === "Ciseaux") ||
            (playerChoice === "Feuille" && computerChoice === "Pierre") ||
            (playerChoice === "Ciseaux" && computerChoice === "Feuille")
        ) {
            playerScore++;
            roundResult = "Vous gagnez ce tour !";
        } else {
            computerScore++;
            roundResult = "L'ordi gagne ce tour !";
        }

        playerScoreDiv.textContent = `Votre score : ${playerScore}`;
        computerScoreDiv.textContent = `Score de l'ordi : ${computerScore}`;
        roundResultDiv.textContent = `Résultat du tour : ${roundResult}`;

        checkWinner();
    }, 1000);
};

function replay() {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    
    restartButton.classList.add('hidden');

    playerScoreDiv.textContent = "Votre score :";
    computerScoreDiv.textContent = "Score de l'ordi :";
    roundDiv.textContent = "Nombre de tour :";
    playerChoiceDiv.textContent = "Votre choix :";
    computerChoiceDiv.textContent = "Choix de l'ordi :";
    roundResultDiv.textContent = "Résultat du tour :";
    finalResultDiv.textContent = "Résultat final :";
    countdownDiv.textContent = "Prêt...";
}

restartButton.addEventListener('click', replay);

choiceListener();



