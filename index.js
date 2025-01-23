function getComputerChoice(){
    let num = Math.random() * 3;
    
    if(num < 1){
        return("R")
    }
    else if(num < 2){
        return("P")
    }
    else{
        return("S")
    }
}

function getHumanChoice(){
    let choice = prompt(`Hey, give your choice:
        "1" for Rock
        "2" Paper
        "3" Scissor:`)
    if(choice == "1" || choice == "rock"){
        return "R"
    }
    else if(choice == "2" || choice == "paper"){
        return "P"
    }
    else{
        return "S"
    }
}
function playGame(){
    function playRound(){
        const choices = ["R", "S", "P"]
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        const humanIndex = choices.indexOf(humanChoice)
        console.log(`you choice ${humanChoice}, computer choice: ${computerChoice}`)
        if(humanChoice == computerChoice){
            console.log("tie")
        }
        else if(choices[(humanIndex + 1) % 3] == computerChoice){
            console.log("you win")
            human_score += 1
        }
        else{
            console.log("you lose")
            computer_score += 1
        }
    }
    let human_score = 0
    let computer_score = 0
    for(let i = 0; i < 5; i++){
        playRound()
    }
    console.log(`Your score: ${human_score} Computer score: ${computer_score}`)
}


// function playRoundTesting(humanChoice, computerChoice){
//     const choices = ["R", "S", "P"]
//     const humanIndex = choices.indexOf(humanChoice)
//     console.log(`you choice ${humanChoice}, computer choice: ${computerChoice}`)
//     if(humanChoice == computerChoice){
//         console.log("tie")
//     }
//     else if(choices[(humanIndex + 1) % 3] == computerChoice){
//         console.log("you win")
//         human_score += 1
//     }
//     else{
//         console.log("you lose")
//         computer_score += 1
//     }
// }




playGame()
