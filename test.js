let rps = ["rock", "paper", "scissors"];
let rightInput = false;

while(rightInput == false){
    let HChoice = prompt("Rock? Paper? Scissors?").toLowerCase();
        if(HChoice == null){
            continue;
        }
        else if(rps.includes(HChoice)){
            rightInput = true;
        }
}