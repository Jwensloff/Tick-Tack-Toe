// query selectors 
var gameBoardGrid = document.querySelector('.wrapper');
var displayPlayerTurn = document.querySelector('h3');
var pirateWins = document.querySelector('.pirate-wins');
var ninjaWins = document.querySelector('.ninja-wins');
var gameBoardCells = document.querySelectorAll('.cell')


// event listeners
gameBoardGrid.addEventListener('click', function(event) {
  if (gameBoard[parseInt(event.target.id)] === parseInt(event.target.id)) {
    updateGameBoard(event);
    checkForWinCondition();
  }
});

window.addEventListener('load', displayFirstTurn)

// global variables 
var pirateImg = '<img class="current-player-image" src="assets/pirate.png" alt="Skull and swords" />' 
var ninjaImg = '<img class="current-player-image" src="assets/ninja.png" alt="Ninja silhouette" />'

var gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var pirate = createPlayerObject('pirate', pirateImg, pirateWins);
var ninja = createPlayerObject('ninja', ninjaImg, ninjaWins);
var currentPlayer = pirate;
var startingPlayer = pirate;

// functions 

function createPlayerObject(player, token, htmlElement){
  return {
    id: player,
    token: token,
    numWinsDisplay: htmlElement,
    wins: 0,
  }
}

function displayFirstTurn(){
  displayPlayerTurn.innerHTML = ''
  displayPlayerTurn.innerHTML = `It's ${pirateImg} turn`
}

function increaseWins(currentPlayer){
  currentPlayer.wins +=1

  currentPlayer.numWinsDisplay.innerText = ''
  currentPlayer.numWinsDisplay.innerText = `${currentPlayer.wins} wins`

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
    if(parseInt(event.target.id) === gameBoard[i]){
      gameBoard.splice(i, 1, currentPlayer.id)
    }
  }
  addPlayerTokenToGameBoard(event)
  return gameBoard
}

function addPlayerTokenToGameBoard(event){
    event.target.innerHTML = currentPlayer.token
}

function announceWinnerAndEndGame(){
  displayPlayerTurn.innerHTML = ''
  displayPlayerTurn.innerHTML = `The ${currentPlayer.id}'s have won this battle.`
  increaseWins(currentPlayer)
  setTimeout(resetBoard, 3000)
}

function checkForWinCondition(){

  var id = currentPlayer.id
   
  if (gameBoard[0] === id && 
      gameBoard[1] === id && 
      gameBoard[2] === id) {
      announceWinnerAndEndGame()
      return
  } else if (gameBoard[3] === id && 
             gameBoard[4] === id && 
             gameBoard[5] === id) {
              announceWinnerAndEndGame()
              return true 
  } else if (gameBoard[6] === id && 
             gameBoard[7] === id && 
             gameBoard[8] === id) {
              announceWinnerAndEndGame()
              return true 
  } else if (gameBoard[0] === id && 
             gameBoard[3] === id && 
             gameBoard[6] === id) {
              announceWinnerAndEndGame()
              return true 
  } else if (gameBoard[1] === id && 
             gameBoard[4] === id && 
             gameBoard[7] === id) {
              announceWinnerAndEndGame()
              return true 
  } else if (gameBoard[2] === id && 
             gameBoard[5] === id && 
             gameBoard[8] === id) {
              announceWinnerAndEndGame()
              return true 
  } else if (gameBoard[0] === id && 
             gameBoard[4] === id && 
             gameBoard[8] === id) {
              announceWinnerAndEndGame()
              return true
  } else if (gameBoard[2] === id && 
             gameBoard[4] === id && 
             gameBoard[6] === id) {
              announceWinnerAndEndGame()
              return true
  }
  
   if(checkForDraw() === false){
    togglePlayerTurn(currentPlayer);
   }
}

function checkForDraw(){
  var count = 0 

  for (var i = 0; i < gameBoard.length; i++){
    if(gameBoard.includes(i)) {
      count += 1
    } 
  } 
  if (count === 0){
    displayPlayerTurn.innerHTML = `It's a draw.`
    setTimeout(resetBoard, 3000)
    return true
  } else {
    return false
  }
}

function resetBoard(){
  console.log('hi')
  gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  for (var i = 0; i<gameBoardCells.length; i++){
    gameBoardCells[i].innerHTML=''
  }

startingPlayer = (startingPlayer===pirate) ? ninja : pirate 
currentPlayer = startingPlayer
togglePlayerTurnDisplay()
}