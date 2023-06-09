// query selectors 
var gameBoard = document.querySelector('.wrapper');

var displayPlayerTurn = document.querySelector('h3');

// event listeners
gameBoard.addEventListener('click', function(event) {
  togglePlayerTurn(event)
});

window.addEventListener('load', displayFirstTurn)

// global variables 
var pirateImg = '<img class="current-player-image" src="assets/pirate.png" alt="Skull and swords" />' 
var ninjaImg = '<img class="current-player-image" src="assets/ninja.png" alt="Ninja silhouette" />'

var gameBoard = [1, 2, 3, 
                 4, 5, 6, 
                 7, 8, 9];

var pirate = createPlayerObject('pirate', pirateImg);
var ninja = createPlayerObject('ninja', ninjaImg);
var currentPlayer = 'pirate';

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

function increaseWins(player){
  player.wins +=1
    return player
}

function joinAllMovesPlayed(){
  allMovesPlayed = pirate.moves.concat(ninja.moves)
  return allMovesPlayed
}

// CAN BE REFACTORED
function togglePlayerTurn(event){
  // if(allMovesPlayed.includes(event.target.id)) {
  //   return
  // }
  if (currentPlayer === 'pirate'){
    pirate.moves.push(event.target.id)
    currentPlayer = 'ninja'
  } else {
    ninja.moves.push(event.target.id)
    currentPlayer = 'pirate'
  }
  console.log(currentPlayer)
  joinAllMovesPlayed();
  togglePlayerTurnDisplay(currentPlayer)
  // checkForWin(currentPlayer)
}

function togglePlayerTurnDisplay(currentPlayer){
  displayPlayerTurn.innerText=''
  if(currentPlayer === 'pirate'){
    return displayPlayerTurn.innerHTML = `It's ${pirateImg} turn`
  } 
    return displayPlayerTurn.innerHTML = `It's ${ninjaImg} turn`
}

// function checkForWin(currentPlayer){
//   var possibleWins = [
//                       [1,2,3],
//                       [4,5,6],
//                       [7,8,9],
//                       [1,4,7],
//                       [2,5,8],
//                       [3,6,9],
//                       [1,5,9],
//                       [3,5,7]
//                       ];
//   for (var i = 0; i < possibleWins.length; i++) {
//     if (currentPlayer.moves.includes(possibleWins[i])) {
//       return `The ${currentPlayer.id}'s win this round.`
//     }
//  }
// }
    //check current moves for currentPlayer
      //iterate through array of arrays
          //if includes winning moves
              // 'current player won the game'





