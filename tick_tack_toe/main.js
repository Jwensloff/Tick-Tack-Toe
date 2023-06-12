// query selectors 
var gameBoardGrid = document.querySelector('.wrapper');
var displayPlayerTurn = document.querySelector('h2');
var pirateWins = document.querySelector('.pirate-wins');
var ninjaWins = document.querySelector('.ninja-wins');
var gameBoardCells = document.querySelectorAll('.cell');

// event listeners
gameBoardGrid.addEventListener('click', function(event) {
  if (gameBoard[parseInt(event.target.id)] === parseInt(event.target.id)) {
    if(allowClick === false){
      return;
    }
    updateGameBoard(event);
    checkForWinCondition();
  }
});

// global variables 
var pirateImg = '<img class="current-player-image" src="assets/pirate.png" alt="Skull and swords" />';
var ninjaImg = '<img class="current-player-image" src="assets/ninja.png" alt="Ninja silhouette" />';

var pirate = createPlayerObject('pirate', pirateImg, pirateWins);
var ninja = createPlayerObject('ninja', ninjaImg, ninjaWins);

var gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var currentPlayer = pirate;
var startingPlayer = pirate;
var allowClick = true;

// functions 

function createPlayerObject(player, token, htmlElement){
  return {
    id: player,
    token: token,
    numWinsDisplay: htmlElement,
    wins: 0,
  }
}

function increaseWins(currentPlayer){
  currentPlayer.wins +=1;

  currentPlayer.numWinsDisplay.innerText = '';
  currentPlayer.numWinsDisplay.innerText = `${currentPlayer.wins} wins`;

  return currentPlayer;
}

function togglePlayerTurn(){
  currentPlayer = (currentPlayer === pirate) ? ninja : pirate; 
  togglePlayerTurnDisplay();
}

function togglePlayerTurnDisplay(){
  displayPlayerTurn.HTML='';
  if(currentPlayer === pirate){
    return displayPlayerTurn.innerHTML = `It's ${pirateImg} turn`;
  } 
    return displayPlayerTurn.innerHTML = `It's ${ninjaImg} turn`;
}

function updateGameBoard(event){
  for (var i = 0; i < gameBoard.length; i++){
    if(parseInt(event.target.id) === gameBoard[i]){
      gameBoard.splice(i, 1, currentPlayer.id);
    }
  }
  addPlayerTokenToGameBoard(event);
  return gameBoard;
}

function addPlayerTokenToGameBoard(event){
  event.target.innerHTML = currentPlayer.token;
}

function announceWinnerAndEndGame(){
  allowClick = false;
  displayPlayerTurn.innerHTML = '';
  displayPlayerTurn.innerHTML = `The ${currentPlayer.id}'s have won this battle.`;
  increaseWins(currentPlayer);
  setTimeout(resetBoard, 4000);
}

// 
function checkForWinCondition(){   
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
      announceWinnerAndEndGame();
      return;
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
      announceWinnerAndEndGame();
      return;
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
      announceWinnerAndEndGame();
      return;
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
      announceWinnerAndEndGame();
      return; 
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
      announceWinnerAndEndGame();
      return; 
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
      announceWinnerAndEndGame();
      return; 
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
      announceWinnerAndEndGame();
      return; 
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
      announceWinnerAndEndGame();
      return; 
  } if(checkForDraw() === false){
      togglePlayerTurn(currentPlayer);
    }
}

function checkForDraw(){
  var count = 0; 

  for (var i = 0; i < gameBoard.length; i++){
    if (gameBoard.includes(i)) {
      count += 1;
    } 
  } 
  
  if (count === 0){
    displayPlayerTurn.innerHTML = `It's a draw.`;
    setTimeout(resetBoard, 4000);
    return true;
  } else {
    return false;
  }
}

function resetBoard(){
  gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  for (var i = 0; i < gameBoardCells.length; i++){
    gameBoardCells[i].innerHTML='';
  }

  startingPlayer = (startingPlayer === pirate) ? ninja : pirate; 
  currentPlayer = startingPlayer;
  allowClick = true;
  togglePlayerTurnDisplay();
}