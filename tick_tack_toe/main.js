// query selectors 
var gameBoard = document.querySelector('.wrapper');

var activeTurnDisplay = document.querySelector('h3');



gameBoard.addEventListener('click', function(event) {
  togglePlayerTurn(event)
});

// global variables 
var allMovesPlayed = []

var pirate = createPlayerObject('pirate', 'X');
var ninja = createPlayerObject('ninja', 'O');
var currentPlayer = 'pirate'

// functions 

function createPlayerObject(player, token){
  return {
    id: player,
    token: token,
    wins: 0,
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

function joinAllMovesPlayed(){
  allMovesPlayed = pirate.moves.concat(ninja.moves)
  return allMovesPlayed
}

function togglePlayerTurn(event){
  if(allMovesPlayed.includes(event.target.id)) {
    return
  }
  if (currentPlayer === 'pirate'){
    pirate.moves.push(event.target.id)
    currentPlayer = 'ninja'
  } else {
    ninja.moves.push(event.target.id)
    currentPlayer = 'pirate'
  }
  console.log(currentPlayer)
  joinAllMovesPlayed();
}




// var pirateImg = '<img src="assets/pirate.png" alt="Skull and swords" />' 
// var ninjaImg = '<img src="assets/ninja.png" alt="Ninja silhouette" />'
    
//     function togglePlayerTurnDisplay(currentPlayer){
//       activeTurnDisplay.innerText=''
//       if(currentPlayer === 'pirate'){
//         return activeTurnDisplay.innerText= 'It\'s' + pirateImg + 'turn'
//       } 
//        return activeTurnDisplay.innerText= 'It\'s' + ninjaImg + 'turn'

//     }