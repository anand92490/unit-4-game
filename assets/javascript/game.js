// create a game with 4 cristal images that generates random number.
// Display a random number between 19 and 120.
// Each cristal should have a random hidden value assigned to it between 1-12.
// The game should reset and generate a new random number when the game is completed.
// The value that each cristal holds should be displayed when clicked and added to the value of the next cristal of the users choice.
// If the value of the cristal is === that of the random number the than increment the value of the win counter
// If the value is greater than the random number decrement the lost counter. 

var result;
var win;
var loss;

guessThisNumber = Math.floor(Math.random() * 101) + 19;
//  

$("#randomNum").html("Guess this number: " + guessThisNumber); 
for(var i = 0; i < 4; i++){

    var someNum = Math.floor(Math.random() * 11) + 1;
    // console.log(someNum);
   
    var crystalCounter  = $("<div>");
  
        crystalCounter.attr({"class": "crystalCounter", "numInBox": someNum });

 
   $(".crystalBox").append(crystalCounter);
 
}
