// query selectors 
var gameBoardGrid = document.querySelector
// event listeners

// global variables 
var gameBoard = [];



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

// if player.turn = false 
    // can't click a button. 

