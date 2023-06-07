// query selectors 
// var gameBoardGrid = document.querySelector
// event listeners

// global variables 
var gameBoard = [];
var pirate = createPlayerObject('one', 'X');
var ninja = createPlayerObject('two', 'O');


// functions 

function createPlayerObject(player, token){
  return {
    id: player,
    token: token,
    wins: 0,
    turn: false,
    class: '',
  }
}

function increaseWins(player){
  player.wins +=1
    return player
}

// if player.turn = false 
    // can't click a button. 

