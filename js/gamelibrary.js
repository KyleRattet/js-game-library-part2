//create an array of all libraries that are created
var allLibraries = [];


//Game Library Constructor
function GameLibrary (title) {
  this.title = title;
  this.games= [];
}



///Game Library Methods

//render gamelibrary name
GameLibrary.prototype.render = function() {
  $('#game-library-name').html(this.title);
};


//add new game into library
GameLibrary.prototype.addGame = function(game) {
  this.games.push(game);
};


// Delete Game from Library
// GameLibrary.prototype.deleteGame = function(game) {
//   var index = this.games.indexOf(game);

//   if (index > -1) {
//     this.games.splice(index,1);
//   }

//   return this.games;
// };

//show all games on DOM from this library
GameLibrary.prototype.renderAllGames = function() {
  for (var i = this.games.length - 1; i >= 0; i--) {
    $('#all-the-games')
    .append('<p>Game Name: '+this.games[i].title+ "  " +'<input id="delete" type="button" value="test">'+'</p>');
  }
};


//Game Instance
// var zelda = new Game("Zelda", "Adventure");
// var marioKart = new Game("MarioKart", "Racing");
// var scrabble = new Game("Scrabble", "Intellectual");
// var monopoly = new Game("Monopoly", "Multi-Player");

// //library instances
// var videoLibrary = new GameLibrary ("Video-Games");
// var boardLibrary = new GameLibrary ("Board-Games");
// videoLibrary.games.push(zelda);
// videoLibrary.games.push(marioKart);
// boardLibrary.games.push(scrabble);
// boardLibrary.games.push(monopoly);
// //push created libraries into all libraries array
// allLibraries.push(videoLibrary);
// allLibraries.push(boardLibrary);
