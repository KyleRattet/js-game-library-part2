// add scripts

$(document).on('ready', function() {
  $('#add-new-game-form').hide();

  $('#submit-new-library').hide();
  showLibrary();

});


// choose a library drop down, shows form, shows games in the library
$('#pick-a-library').on('click', 'a', function () {
  $('#all-the-games').html('');
  $('#add-new-game-form').show();

  for (var i = 0; i < allLibraries.length; i++) {
    if ($(this).attr('id')  === allLibraries[i].title) {
      allLibraries[i].render();
      allLibraries[i].renderAllGames();
    }
  }

});


//add new library button
$('#add-new-library').on('click', function () {
  $('#submit-new-library').show();
  $('#add-new-game-form').hide();
  $('#new-library-name').val('');
  $('#all-the-games').html('');
  $('#game-library-name').html('');

  // create form, get value from form
  // $('#pick-a-library').append($('#new-library-name').val());
  //add new library value to the choose a library drop down
});

//submit new libray button click, create new library instance
$('#submit-new-library').on('submit', function () {
  $('#pick-a-library').html('');
  $('#add-new-game-form').hide();
   var newLibraryName = $('#new-library-name').val();
   var newLibrary = new GameLibrary (newLibraryName);

   allLibraries.push(newLibrary);

   showLibrary();
   $('#submit-new-library').hide();







   // $('#pick-a-library').append(
   //    '<li><a href="#" id="'+allLibraries[i].title+'">'+allLibraries[i].title+'</a></li>')


});

//submit new game form button click
$('form').on('submit', function (event){
  event.preventDefault();
  $('#all-the-games').html('');

  var gameName = $('#game-name').val();
  //create new game instance
  var newGame = new Game(gameName);

  for (var i = 0; i < allLibraries.length; i++) {
    if ( $('#game-library-name').html() === allLibraries[i].title) {
      allLibraries[i].render();
      allLibraries[i].addGame(newGame);
      allLibraries[i].renderAllGames();
    }
  }

  $('#game-name').val('');

});
