console.log("Hello World")

function getComputerChoice() {
    actionset = Array('Rock', 'Paper', 'Scissor')
    let x = Math.floor(Math.random() * 3)
    console.log(x)
    return actionset[x]
  }

console.log(getComputerChoice())
