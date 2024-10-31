console.log("Hello World");

let rps = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let cc = rps[Math.floor(Math.random() * rps.length)];
    
    return (cc);
}

function getHumanChoice(hc){
    let rightInput = false;

    while(rightInput == false){
        let HChoice = prompt("Rock? Paper? Scissors?").toLowerCase();
        
        if(HChoice == null){
            continue;
        }

        if(rps.includes(HChoice)){
            rightInput = true;
            return HChoice;
        }
    }
}

function Winner(hc, cc){
    if(
        (hc == "rock" && cc == "scissors") ||
        (hc == "scissors" && cc == "paper") ||
        (hc == "paper" && cc == "rock")
      ){
        return "Human";
      }
    else if (hc == cc){
        return "Tie";
    }
    else {
        return "Computer";
    }
}

function playRound (hc, cc){
    const result = Winner(hc, cc);

    if (result == "Human"){
        return `You win! ${hc} beats ${cc}`
    }
    else if (result == "Computer"){
        return `You lose! ${cc} beats ${hc}`
    }
    else{
        return "It's a tie!"
    }
}

function playGame(){
    let scoreHuman = 0;
    let scoreComputer = 0;

    console.log("Round start");
    for (let i = 0; i < 5; i++){
        let hc = getHumanChoice();
        let cc = getComputerChoice();

        console.log(playRound(hc, cc));

        if(Winner(hc, cc) == "Human"){
            scoreHuman++;
        }
        else if(Winner(hc, cc) == "Computer"){
            scoreComputer++;
        }

        console.log("--new round--");
    }

    console.log("Game over");
    console.log("Final score is " + scoreHuman + " : " + scoreComputer)

    if(scoreHuman > scoreComputer){
        console.log("You win!");
    }
    else{
        console.log("You lose!");
    }
}

playGame()