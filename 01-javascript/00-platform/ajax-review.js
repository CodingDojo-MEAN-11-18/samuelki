// assuming you have jQuery
$(document).ready(function(){
    var favoritePokemon;
    // the given link is for Bulbasaur's information
    $.get("https://pokeapi.co/api/v2/pokemon/1/", function(data){     
        favoritePokemon = data.name;
    });
    console.log("Got my favorite Pokemon", favoritePokemon);      // Predict the output!
});       
// Output: Got my favorite Pokemon undefined

// assuming you have jQuery
$(document).ready(function(){
    var favoritePokemon;
    // the given link is for Bulbasaur's information
    $.get("https://pokeapi.co/api/v2/pokemon/1/", function(data){ 
    	favoritePokemon = data.name;
	console.log("Got my favorite Pokemon", favoritePokemon);      // Predict the output!
    });
}); 
// Output: Got my favorite Pokemon bulbasaur


var secondFavorite;
// let's use setTimeout to simulate an API call that takes 0 seconds to complete
setTimeout(function(){ secondFavorite = "charmander"; }, 0);
console.log("Got my second favorite", secondFavorite);
// Output: Got my second favorite undefined