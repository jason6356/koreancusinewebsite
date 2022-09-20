//This script will run after the document is fully laoded

document.addEventListener('DOMContentLoaded', function() {

    //Display error message for the search bar not being implemented yet
    console.log('hello world');
    searchBarError();

});


//Display error message for the search bar not being implemented yet
function searchBarError(){

    var searchBar = document.querySelector('#searchDishField');

    searchBar.addEventListener('keyup', function onEvent(e){

        if(e.keyCode == 13)
            alert('The search feature is currently not implemented yet.!');

    })

}

