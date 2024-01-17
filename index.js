// my variables
const rockbtn = document.getElementById("rock");
const sicssorsbtn = document.getElementById("sicssors");
const paperbtn = document.getElementById("paper");
const playerOptions = [rockbtn, paperbtn, sicssorsbtn];
const cpuOptions = ['rock', 'paper', 'scissors']

// game logics
function game () {
    let playerScore = 0;
    let cpuScore = 0;
    playGame();


function playGame () {
    playerOptions.forEach(option => {
        const choiceNum = math.floor(Math.random() *3);
        const computerChoice = cpuOptions[choiceNum]

        // to check winner
        winner(this.innerText, computerChoice)
    
    })
}

function winner(player,cpu) {
    const result = document.querySelector('.result')
    player = player.toLowerCase();
    cpu = cpu.toLowerCase();

    if (player =='rock') {
        if (cpu == 'paper') {
            result.textContent = 'Computer Won';
        } else {
            result.textContent = 'Player Won';
        }
    }
    else if (player=='siccsors') {
        if (cpu == 'paper') {
            result.textContent ='Player Won';
        } else {
            result.textContent= "Computer Won";
        }
    }
    else if (player == 'rock') {
        if (cpu == 'sicssors') {
            result.textContent = 'Player Won';
        } else {
            result.textContent = 'Computer Won';
        }
    }
}

function gameOver(playerOptions) {
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');
    const chooseMove = document.querySelector('.move');

    playerOptions.forEach(option => {
        option.style.display = 'none';
    })
    chooseMove.innerText = 'Game Over!'
    
    if (playerScore > cpuScore) {
        result.style.fontsize = '2rem';
        result.innerText = 'You Won the Game!'
        result.Style.color = 'white';
    }
     else if (playerScore < cpuScore) {
        result.style.fontsize = '2rem';
        result.innerText = 'You Lost The Game!';
        result.style.color = 'white';
     }
     else {
        result.style.fontsize = '2rem';
        result.innerText = 'Tie!';
        result.style.color = 'white';
     }
     reloadBtn.innerText = 'Restart';
     reloadBtn.style.display = 'flex';
     reloadBtn.addEventListener('click', () =>{
        window.location.reload();
     })

}

playGame();
}

game();