const allBtns = [...document.getElementsByClassName("btn")];
let userChose = null;
const playerCh = document.getElementById("playerCh")
const result = document.getElementById("result")

const compChoice = document.getElementById("compChoice");

allBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        userChose = btn.innerText;

        display(userChose);

        const computerChose = generateComputerChoice();
        const winner = winPlayer(userChose, computerChose);

        displayResult(winner);
    });
});

const display = (str) => {
    playerCh.innerText = str;
}

const generateComputerChoice = () => {
    const choice = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random()*choice.length);
    const computerChose = choice[randomIndex];
    compChoice.innerHTML = computerChose;

    return computerChose;
};

const winPlayer = (user, computer) => {
    if (user === computer){
        return `It's a Tie`
    }else if (
        (user === "Rock" &&  computer === "Scissors") || 
        (user === "Paper" &&  computer === "Rock") ||
        (user === "Scissors" &&  computer === "Paper")
    ) {
        return `You win`
    }else{
        return `Computer Wins`
    }
    
}

const displayResult = (resultText) => {
    result.innerText = resultText;
}

