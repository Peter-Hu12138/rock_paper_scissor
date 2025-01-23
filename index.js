function getComputerChoice(){
    let num = Math.random() * 3;
    
    if(num < 1){
        return("rock");
    }
    else if(num < 2){
        return("paper");
    }
    else{
        return("scissors");
    }

}



console.log("Hello world")