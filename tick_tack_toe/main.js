// query selectors 
var gameBoardGrid = document.querySelector('.wrapper');
var displayPlayerTurn = document.querySelector('h3');

// event listeners
gameBoardGrid.addEventListener('click', function(event) {
  if (gameBoard[parseInt(event.target.id)] === event.target.id) {
    addPlayerTokenToGameBoard(event);
    updateGameBoard(event);
    checkForWinCondition();
    togglePlayerTurn(currentPlayer);
  }
});

window.addEventListener('load', displayFirstTurn)

// global variables 
var pirateImg = '<img class="current-player-image" src="assets/pirate.png" alt="Skull and swords" />' 
var ninjaImg = '<img class="current-player-image" src="assets/ninja.png" alt="Ninja silhouette" />'

var gameBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

var pirate = createPlayerObject('pirate', pirateImg);
var ninja = createPlayerObject('ninja', ninjaImg);
var currentPlayer = pirate;

// functions 

function createPlayerObject(player, token){
  return {
    id: player,
    token: token,
    isTurn: false,
    wins: 0,
    moves: [],
  }
}

function displayFirstTurn(){
  displayPlayerTurn.innerHTML = ''
  displayPlayerTurn.innerHTML = `It's ${pirateImg} turn`
}

function increaseWins(currentPlayer){
  currentPlayer.wins +=1
    return currentPlayer
}

function togglePlayerTurn(){
  if (currentPlayer === pirate){
    currentPlayer = ninja
  } else {
    currentPlayer = pirate
  }
  togglePlayerTurnDisplay();
}

function togglePlayerTurnDisplay(){
  displayPlayerTurn.HTML=''
  if(currentPlayer === pirate){
    return displayPlayerTurn.innerHTML = `It's ${pirateImg} turn`
  } 
    return displayPlayerTurn.innerHTML = `It's ${ninjaImg} turn`
}

function updateGameBoard(event){
  for(var i = 0; i < gameBoard.length; i++){
    if(event.target.id === gameBoard[i]){
      gameBoard.splice(i, 1, currentPlayer.id)
    }
  }
  return gameBoard
}

function addPlayerTokenToGameBoard(event){
  event.target.innerHTML = currentPlayer.token
}

function checkForWinCondition(){
  var id = currentPlayer.id

  if (gameBoard[0] === id && 
      gameBoard[1] === id && 
      gameBoard[2] === id) {
        console.log(`The ${id}'s have won this battle!`)
  } else if (gameBoard[3] === id && 
             gameBoard[4] === id && 
             gameBoard[5] === id) {
      console.log(`The ${id}'s have won this battle!`)
  } else if (gameBoard[6] === id && 
             gameBoard[7] === id && 
             gameBoard[8] === id) {
      console.log(`The ${id}'s have won this battle!`)
  } else if (gameBoard[0] === id && 
             gameBoard[3] === id && 
             gameBoard[6] === id) {
         console.log(`The ${id}'s have won this battle!`)
  } else if (gameBoard[1] === id && 
             gameBoard[4] === id && 
             gameBoard[7] === id) {
          console.log(`The ${id}'s have won this battle!`)
  } else if (gameBoard[2] === id && 
             gameBoard[5] === id && 
             gameBoard[8] === id) {
       console.log(`The ${id}'s have won this battle!`)
  } else if (gameBoard[0] === id && 
             gameBoard[4] === id && 
             gameBoard[8] === id) {
  console.log(`The ${id}'s have won this battle!`)
  } else if (gameBoard[0] === id && 
             gameBoard[4] === id && 
             gameBoard[8] === id) {
    console.log(`The ${id}'s have won this battle!`)
  }
  return
}