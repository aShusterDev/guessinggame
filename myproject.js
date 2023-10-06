


function setup(){
    var attempts=parseInt(prompt("Enter the amount of attempts you need :"))
    var number=Math.floor(Math.random()*20)+1;
    check(attempts , number );
}


/*function show(){
    document.getElementById("outputObj").innerHTML="number is" + range;
}*/

function check(attempts , number){

    guessedRight=false;
    for(i=attempts;i>0;i--){
 var guess=parseInt(prompt("Enter Your Guess :"));
 if(guess==number){
   guessedRight=true;
    alert("YOU WON!"); 
    namelist();
     break;
 }

 else { 
    alert("You Guessed wrong!"+"\n" + "You have " + (i-1) + " more guesses.");
}

}

if(guessedRight==false){
document.getElementById("outputObj").innerHTML="Sorry! you ran out of attempts, your guess is wrong";}
else {
    document.getElementById("outputObj").innerHTML="Congratulations! You guessed the number."
}



}


function namelist(){
    var name = prompt("Please Enter your Name:");
    var list=document.getElementById("list");
    list.innerHTML= list.innerHTML +"\n" + "-" + name ;

}