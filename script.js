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
        //const winner = ;
        console.log(userChose);
        console.log(computerChose);
        console.log(winPlayer(userChose, computerChose))
        displayResult(winPlayer(userChose, computerChose));
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
        return `You win`;
    } else if (user === computer) {
        return `It's a Tie`;
    } else {
        return `Computer Wins`;
    }
}
    


const displayResult = (str) => {
    result.innerText = str;
}