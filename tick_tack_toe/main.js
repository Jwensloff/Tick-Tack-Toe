// query selectors 
var gameBoardGrid = document.querySelector
// event listeners

// global variables 
var players = [];

// functions 

function createPlayerObject(player){
  return {
    player: player,
    wins: 0,
    turn: false,
    class: '',
  }
}

// if player.turn = false 
    // can't click a button. 

