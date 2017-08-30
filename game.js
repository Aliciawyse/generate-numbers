


//use function to generate random number between 1-9
function randomNumber(min, max) {
    return Math.floor((Math.random() * (max-min) + min));
}





//Upon click generate the random number
$("#theButton").click(function (){

    //generate a empty list
    var theRandomNumber = [];

    //generate random number 9 times and push to list
    for (var i = 0; i < 9 ; i++) {
        theRandomNumber.push(randomNumber(1,9));
    }

    //Join list so that it's a string with no spaces
    var onScreenNumber = theRandomNumber.join("");


    $("p").prepend("<div>" + onScreenNumber + "</div>");

});


