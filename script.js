const allBtns = [...document.getElementsByClassName("btn")];
let userChose = null;
let computerChose = null;
const playerCh = document.getElementById("playerCh")
const result = document.getElementById("result")

const compChoice = document.getElementById("compChoice");

allBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        userChose = btn.innerText;

        display(userChose);
        computerChose = generateComputerChoice();
        const winner = winPlayer(userChose, computerChose);
        displayResult(winner);
    });
});

const display = (str) => {
    playerCh.innerText = str;
}

const generateComputerChoice = () => {
    const choice = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random()*choice.length);
    const compChose = choice[randomIndex];
    compChoice.innerText = compChose;
    return compChose;
};

const winPlayer = (user, computer) => {
    if (
        (user === "Rock" &&  computer === "Scissors") || 
        (user === "Paper" &&  computer === "Rock") ||
        (user === "Scissors" &&  computer === "Paper")
    ) {
        return `<button class = "btn btn-transparent text-warning border border-warning px-5 py-3">
                    You Win
                </button>`;
    } else if (user === computer) {
        return `<button class = "btn btn-transparent text-warning border border-warning px-5 py-3">
                    It's a Tie
                </button>`;
    } else {
        return  `<button class = "btn btn-transparent text-warning border border-warning px-5 py-3">
                    Computer Wins
                </button>`;
    }    
}
    


const displayResult = (str) => {
    result.innerHTML = str;
}