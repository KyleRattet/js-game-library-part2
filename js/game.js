//Game Constructor

function Game (title, genre) {
  this.title = title;
  this.genre = genre;
  this.uuid = generateUUID();
}

//Game Methods
// Game.prototype.createElement = function () {
//   var $element = $('<div>'+this.title+'</div>');
//   return $element;
// };


