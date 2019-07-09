// create a game with 4 cristal images that generates random number.
// Display a random number between 19 and 120.
// Each cristal should have a random hidden value assigned to it between 1-12.
// The value that each cristal holds should be displayed when clicked and added to the value of the next cristal of the users choice.
// If the value of the cristal is === that of the random number the than increment the value of the win counter
// If the value is greater than the random number decrement the lost counter. 
// The game should reset and generate a new random number when the game is completed.

var result;
var win = 0;
var loss = 0;
var exNum = 0;

guessThisNumber = Math.floor(Math.random() * 101) + 19;

$("#randomNum").html("Guess this number: " + guessThisNumber); 

for(var i = 0; i < 4; i++){

    var someNum = Math.floor(Math.random() * 11) + 1;
    // console.log(someNum);
   
    var crystalCounter  = $("<div>");
  
        crystalCounter.attr({"class": "crystalCounter", "numInBox": someNum });

        crystalCounter.html(someNum);
 
   $(".crystalBox").append(crystalCounter);
 
}

$(".crystalCounter").on("click", function(){

    var boxGenNum = parseInt($(this).attr("numInBox"));
 
    exNum = exNum + boxGenNum;
     console.log(exNum);

     if(exNum > guessThisNumber){
        //  console.log("you loose");
        loss --;
        $("#loss").html("loss :" + loss);
        
    }
    else if(exNum === guessThisNumber){
        // console.log("you won");
        win ++;
        $("#win").html("win :" + win);

    }  
});