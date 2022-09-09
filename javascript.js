console.log("Hello World")

function getComputerChoice() {
    actionset = Array('Rock', 'Paper', 'Scissor')
    let x = Math.floor(Math.random() * 3)
    // console.log(x)
    return actionset[x]
  }

  function singleRound(playerSelection, computerSelection) {
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

// console.log(getComputerChoice())
