function userChoice(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = getResult(choice, computerChoice);

    displayResult(result, choice, computerChoice);
}

function getResult(user, computer) {
    if (user === computer) {
        return 'It\'s a tie!';
    } else if ((user === 'rock' && computer === 'scissors') ||
               (user === 'paper' && computer === 'rock') ||
               (user === 'scissors' && computer === 'paper')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function displayResult(result, user, computer) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `${result} You chose ${user}, computer chose ${computer}.`;
}
