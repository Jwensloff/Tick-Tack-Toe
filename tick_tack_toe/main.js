// query selectors 
// var gameBoardGrid = document.querySelector
// event listeners

// global variables 
var allMovesPlayed = []

var pirate = createPlayerObject('pirate', 'X');
var ninja = createPlayerObject('ninja', 'O');
var players = {pirate, ninja}

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
  if(allMovesPlayed.includes(cellNumber)) {
    return
  }
  if(players[player].id == player){
    players[player].moves.push(cellNumber)
  }
  joinAllMovesPlayed();
  return players 
}

function joinAllMovesPlayed(){
  allMovesPlayed = pirate.moves.concat(ninja.moves)
  return allMovesPlayed
}


// create a function that keeps track of game board 
  // iterate through game board? 
  // should game booard be the array that holds objects?

