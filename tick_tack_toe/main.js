// query selectors 
// var gameBoardGrid = document.querySelector
// event listeners

// global variables 
var gameBoard = [
                  {cellNumber: 1, open:false},
                  {cellNumber: 2, open:false},
                  {cellNumber: 3, open:false},
                  {cellNumber: 4, open:false},
                  {cellNumber: 5, open:false},
                  {cellNumber: 6, open:false},
                  {cellNumber: 7, open:false},
                  {cellNumber: 8, open:false},
                  {cellNumber: 9, open:false}
                ]
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

function createGameBoard(){

}
// create a function that keeps track of game board 
  // iterate through game board? 
  // should game booard be the array that holds objects?

