const choice = ["rock", "paper", "scissors"]


function capitalize (string) {
    let auxString = string.toLowerCase();
    let firstChar = auxString[0].toUpperCase();
    let newString = firstChar + auxString.slice(1);

    return newString


}
function getName() {
    let name = prompt("What\'s your name?");
    if (name === null) {
        name = "player";
    }
    return capitalize(name)
}

function getRounds() {
    let round = prompt("Up to what score do you want to play?");
    if (round === null || isNaN(round)) {
        round = 5;
        alert("Highest score will be set to 5");
    }
    return round
}

function updateBoard(name, playerScore, computerScore) {
    let textBoard = document.querySelector("#table-score").innerText = `${name} ${playerScore} vs ${computerScore} Computer`
}

function updateRound(round) {
    let textBoard = document.querySelector("#round-score").innerText = `Round ${round}`
}

function random(max, min) {
    const rand = Math.random();
    const result = Math.floor(rand * ((max - min)+1)); 
    return result
}

function computerPlay() {
    return choice[random(choice.length, 1)]
}

function caseInsensitive(string) {
    return string.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    const player = caseInsensitive(playerSelection);
    const computer = caseInsensitive(computerSelection);

    const draw = (player == computer)
    const win = (player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper")
    const lose = !win
    
    if(draw) {
        return `Draw! Both draw ${player}. Play again`
    }
    else if (win) {
        return `You won! ${player} beats ${computer}`            
        }
    else {
        return `You lose! ${computer} beats ${player}`
    }
}   

function playRoundBtn(playerSelection, computerSelection) {
    const player = caseInsensitive(playerSelection);
    const computer = caseInsensitive(computerSelection);

    const draw = (player == computer)
    const win = (player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper")
    const lose = !win

    let parentNode = document.querySelector(".results");
    if (parentNode.childElementCount != 0) {
        parentNode.removeChild(parentNode.lastElementChild);
    }
    
    if(draw) {
        let para = document.createElement("p");
        para.innerText = `It's a tie! Both draw ${capitalize(playerSelection)}. Play again`;
        parentNode.appendChild(para);
    }
    else if (win) {
        let para = document.createElement("p");
        para.innerText = `You won! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
        parentNode.appendChild(para);
        return i++;          
        }
    else {
        let para = document.createElement("p");
        para.innerText = `You lost! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
        parentNode.appendChild(para);
        return j++;
    }

}

function imagePlayer(playerSelection) {
    let image = document.querySelector("#player-selection");
    if (image.childElementCount != 0) {
        image.removeChild(image.lastElementChild);
    }

    if(playerSelection == "rock") {
        let selection = document.createElement("img");
        selection.src = "Rock.jpg";
        image.appendChild(selection);
    } else if (playerSelection == "paper") {
        let selection = document.createElement("img");
        selection.src = "Paper.jpg";
        image.appendChild(selection);
    } else if (playerSelection == "scissors") {
        let selection = document.createElement("img");
        selection.src = "Scissors.jpg";
        image.appendChild(selection);
    }

}

function imageComputer(computerSelection) {
    let image = document.querySelector("#computer-selection");
    if (image.childElementCount != 0) {
        image.removeChild(image.lastElementChild);
    }

    if(computerSelection == "rock") {
        let selection = document.createElement("img");
        selection.src = "Rock.jpg";
        image.appendChild(selection);
    } else if (computerSelection == "paper") {
        let selection = document.createElement("img");
        selection.src = "Paper.jpg";
        image.appendChild(selection);
    } else if (computerSelection == "scissors") {     
        let selection = document.createElement("img");
        selection.src = "Scissors.jpg";
        image.appendChild(selection);
    }

}


function checkScore(i, j, rounds) {
    if(j == rounds || i == rounds) {
        if (i > j) {
            alert(`You won! Congrats!`);
            alert("The game will reset automatically");
            resetGame();
        } else {
            alert(`You lost! Try again!`);
            alert("The game will reset automatically");
            resetGame();
        } 
    }

}

function game(playerSelection, computerSelection, name, rounds) {
    r++;
    updateRound(r);
    playRoundBtn(playerSelection, computerSelection);
    imagePlayer(playerSelection);
    imageComputer(computerSelection);
}

function resetGame() {
    let image1 = document.querySelector("#player-selection");
    if (image1.childElementCount != 0) {
        image1.removeChild(image1.lastElementChild);
    }

    let image2 = document.querySelector("#computer-selection");
    if (image2.childElementCount != 0) {
        image2.removeChild(image2.lastElementChild);
    }

    let parentNode = document.querySelector(".results");
    if (parentNode.childElementCount != 0) {
        parentNode.removeChild(parentNode.lastElementChild);
    }

    updateBoard(name, 0, 0);
    updateRound(0);
    playerSelection = "";
    computerSelection = "";
    i = 0;
    j = 0;
    r = 0;
}

/* function game() {
    let playerScore = 0; 
    let computerScore = 0;

    const numOfRounds = prompt("How many rounds do you want to play?", 5)
    let selection;

    for (let i = 0; i < numOfRounds; i++) {
        selection = prompt("Rock, Paper, Scissors?");
        let results = playRound(selection, computerPlay());
        if (results.indexOf('won') != -1 ) {
            alert(results);
            ++playerScore;
            alert(`The actual score is: Player ${playerScore} vs Computer ${computerScore}`);
        } else if (results.indexOf('lose') != -1) {
            alert(results);
            ++computerScore;
            alert(`The actual score is: Player ${playerScore} vs Computer ${computerScore}`);
        } else {
            alert(results);
            alert(`The actual score is: Player ${playerScore} vs Computer ${computerScore}`)
        }

    }

    if (playerScore > computerScore) {
        alert(`You won ${playerScore} out of ${numOfRounds}, congrats!`);
    } else if (playerScore < computerScore) {
        alert(`You lost ${computerScore} out of ${numOfRounds}, try again!`);
    } else {
        alert(`You were tied, try again!`);
    }      
}
 */


// Falta! animacion imagenes, FONDO!!


// error al actualizar puntuacion al usar R vs P (antes funcionaba bien)
// Initilization of the game
const name = getName();
const rounds = getRounds();
let playerSelection;
let computerSelection;
let i = 0;
let j = 0;
let r = 0;

document.addEventListener("DOMContentLoaded", function() {
    updateBoard(name, 0, 0);
    updateRound(0);

    let rockButton = document.querySelector("#Rock");
    let paperButton = document.querySelector("#Paper");
    let scissorsButton = document.querySelector("#Scissors");

    rockButton.addEventListener("click", function() {
        playerSelection = "rock";
        computerSelection = computerPlay();
        game(playerSelection, computerSelection, name, rounds);
        updateBoard(name, i, j);
        checkScore(i,j,rounds);
    });
    paperButton.addEventListener("click", function() {
        playerSelection = "paper";
        computerSelection = computerPlay();
        game(playerSelection, computerSelection, name, rounds);
        updateBoard(name, i, j);
        checkScore(i,j,rounds);
    });
    scissorsButton.addEventListener("click", function() {
        playerSelection = "scissors";
        computerSelection = computerPlay();
        game(playerSelection, computerSelection, name, rounds);
        updateBoard(name, i, j);
        checkScore(i,j,rounds);
    });


})

document.addEventListener("keydown", function(e){
    if (e.keyCode == "82") {
        playerSelection = "rock";
        computerSelection = computerPlay();
        game(playerSelection, computerSelection, name, rounds);
        updateBoard(name, i, j);
        checkScore(i,j,rounds);
    } else if (e.keyCode == "80") {
        r++;
        updateRound(r);
        playerSelection = "paper";
        computerSelection = computerPlay();
        playRoundBtn(playerSelection, computerSelection);
        updateBoard(name, i, j);
        imagePlayer(playerSelection);
        imageComputer(computerSelection);
        checkScore(i,j,rounds);
    } else if (e.keyCode == "83") {
        r++;
        updateRound(r);
        playerSelection = "scissors";
        computerSelection = computerPlay();
        playRoundBtn(playerSelection, computerSelection);
        updateBoard(name, i, j);
        imagePlayer(playerSelection);
        imageComputer(computerSelection);
        checkScore(i,j,rounds);
    } else {
        playerSelection = undefined;
        return;
    }
});






// Inteto de agregar boton ademas a la selección
/* const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");

rockButton.addEventListener("click", PlayerSelection = "rock")
paperButton.addEventListener("click", PlayerSelection = "paper")
scissorsButton.addEventListener("click", PlayerSelection = "scissors") */





/* let i = 0;
function checkPlayer(i, playerSelection) {
    while(i < 5) {
        if(playerSelection == undefined) {
            setTimeout(checkPlayer(i, playerSelection), 50);
        } else {
            i++;
            console.log(i);
            console.log(playerSelection);
            playerSelection = undefined;
        }

    }

}

checkPlayer(i, playerSelection); */

// TENGO QUE EN REALIDAD HACER QUE SE JUEGUE HASTA QUE ALGUIEN LLEGUE A X PUNTOS POR EJEMPLO, PODRIA MODIFICAR ESO.
// Revisar que es un constructor y que es un instanceof 


/*
pseudoCode 
ok Prompt the name
ok Prompt the number of rounds up to which i wnat to play
ok poner la venta con el tablero junto al nombre del jugardor y la computer
ok establecer la arena (de hecho aca debiese aparecer las instrucciones antes)__
    de empezar
See the window with three buttons on the bottom to press with key of kbd
Visualizar el nombre del participante en la pagina
    revisar que el nombre quepa dentro del box, sino agregar una restriccion__
        al nombre
    
Specify somewhere(en la bajada) que puede ser jugado con teclado o apretando
empezar a jugar cuando empiece a apretar la primera vez
mostrar la ronda en la que va
actualizar el tablero de resultados
guardar los resultados en algun lado 
al momento de apretar, que desaparezcan las instrucciones y aparezcan las__
    imagenes de piedra papel tijera
jugar hasta que haya algun ganador claro
establecer el ganador y ver si quiere jugar de nuevo



*/


/* var something=999;
var something_cachedValue=something;

function doStuff() {
    if(something===something_cachedValue) {//we want it to match
        setTimeout(doStuff, 50);//wait 50 millisecnds then recheck
        return;
    }
    something_cachedValue=something;
    //real action
}

doStuff(); */