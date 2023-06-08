// query selectors 
var gameBoard = document.querySelector('.wrapper');

var activeTurnDisplay = document.querySelector('h3');

var pirateImage = document.createElement('img');
var ninjaImage = document.createElement('img');
// Set the source (src) attribute to your PNG image file
pirateImage.src = 'assets/pirate.png';
ninjaImage.src = 'assets/ninja.png';

// Append the <img> element as a child of the <h3> element
// heading.appendChild(image);


gameBoard.addEventListener('click', function(event) {
  if (currentPlayer === 'pirate'){
      pirate.moves.push(event.target.id)
      currentPlayer = 'ninja'
  } else {
    ninja.moves.push(event.target.id)
    currentPlayer = 'pirate'
  }
  console.log(currentPlayer) 
});

// global variables 
var allMovesPlayed = []

var pirate = createPlayerObject('pirate', '');
var ninja = createPlayerObject('ninja', 'O');
var currentPlayer = 'pirate'

// functions 

function createPlayerObject(player, token){
  return {
    id: player,
    token: token,
    wins: 0,
    turn: false,
    moves: [],
  }
}

function increaseWins(player){
  player.wins +=1
    return player
}

function updateGameBoard(cellNumber){
  allMovesPlayed.push(cellNumber)
  return allMovesPlayed
}

function addPlayerMoves(player, cellNumber){
  isTurn(player)
  if(allMovesPlayed.includes(cellNumber)) {
    return
  }
  if(currentPlayer.id === player){
    currentPlayer.moves.push(cellNumber)
  }
  joinAllMovesPlayed();
  togglePlayerTurn(player)
  togglePlayerTurnDisplay(player)
  return players 
}

function joinAllMovesPlayed(){
  allMovesPlayed = pirate.moves.concat(ninja.moves)
  return allMovesPlayed
}

function isTurn(player){
  currentPlayer.turn = true
  return players
}

function togglePlayerTurn(player){
  if(currentPlayer === 'ninja'){
    players.ninja.turn = false
    players.pirate.turn = true 
  } else {
    players.pirate.turn = false
    players.ninja.turn = true
  }
  return players
}

// if ninja.turn = true 
// click event -->
  // that means the ninja just played a move 
      // ninja.turn = false
      // pirate.turn = true 
      
// 'event'.


//  if one player.turn = true, other is false 
// if currentPlayer === ninja
      // currentPlayer.turn = true 
      // currentPlayer.turn = false 
// if currentPlayer === pirate 
      // currentPlayer.turn = true 

  
  // ninja.turn === true
    // pirate.turn = false
  // if pirate.turn === true
    // ninja.turn = false


    function togglePlayerTurnDisplay(player){
      activeTurnDisplay.innerText=''
      if(currentPlayer.turn === true){
        activeTurnDisplay.innerText= `It's ${player.token} turn`
      }
    }