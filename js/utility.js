

//function to loop through all libraries, grabs the library title
function showLibrary () {

  for (var i = 0; i < allLibraries.length; i++) {

    //add to the dom
    $('#pick-a-library').append(
      '<li><a href="#" id="'+allLibraries[i].title+'">'+allLibraries[i].title+'</a></li>'
    );
  }
}
