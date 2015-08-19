

//function to loop through all libraries, grabs the library title
function showLibrary () {

  for (var i = 0; i < allLibraries.length; i++) {

    //add to the dom
    $('#pick-a-library').append(
      '<li><a href="#" id="'+allLibraries[i].title+'">'+allLibraries[i].title+'</a></li>'
    );
  }
}


//generate UUID for new game, tag for being able to delete
function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}
