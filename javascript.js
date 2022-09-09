console.log("Hello World")

function getComputerChoice() {
    actionset = Array('Rock', 'Paper', 'Scissor')
    let x = Math.floor(Math.random() * 3)
    // console.log(x)
    return actionset[x]
  }

  function playRound(playerSelection, computerSelection) {
    actionset = Array('Rock', 'Paper', 'Scissor')
    playerIndex = actionset.findIndex(x => x.toLowerCase() == playerSelection.toLowerCase())
    computerIndex = actionset.findIndex(x => x.toLowerCase() == computerSelection.toLowerCase())

    if (computerIndex - playerIndex == 1 || (computerIndex == 0 && playerIndex == 2)) {
        return "You Lose!"
    } else if (computerIndex == playerIndex) {
        return "Tie!"
    } else {
        return "You Win!"
    }
  }

  function game(){
    playerScore = 0
    computerScore = 0

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt()
        computerSelection = getComputerChoice()
        console.log('computer option', computerSelection)
        if (playRound(playerSelection, computerSelection) == "You Lose!") {
            computerScore ++
        } else if (playRound(playerSelection, computerSelection) == "You Win!") {
            playerScore ++
        } 
      }
    
    console.log('player_score', playerScore)
    console.log('computerScore', computerScore)
  }
