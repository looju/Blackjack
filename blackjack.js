//
// let cards = [firstcard, secondcard];
// let sum = firstcard + secondcard;

let cards = [];
let firstcard = randomNumber();
let secondcard = randomNumber();
let thirdcard= randomNumber();
var sum;
var sum2=firstcard+secondcard+thirdcard;
let blackjackvalue = false; // checks for blackjack value
let isalive = true; //to check if the user can play only when the game is true
let gamestate = document.getElementById("message"); // get the gamestate
let startEl= document.getElementById("start"); //holding the start
let sumEl = document.getElementById("sum"); //holding the sum
let newcardEl = document.getElementById("newcard"); // holding the new card
let cardEl = document.getElementById("card"); //holding the card
let playerEl = document.getElementById("Player"); //holding the player details
function randomNumber() {
  let jacknumbers = Math.floor(Math.random() * 14) + 1; //produces random numbers between 1 and 13
  // to be used by first and second card
  if (jacknumbers === 1) {
    return 11;
  } //these if conditions are for setting the ace card to either 1 or 11
  else if (jacknumbers > 10) {
    return 10;
  } else {
    return jacknumbers;
  }
  // let number=5;
  // return number
}

function start() {
  // let firstcard = randomNumber();
  // let secondcard = randomNumber();
  if(isalive ===true )
   cards = [firstcard, secondcard];
   sum = [firstcard + secondcard];
  rendergamestate();
} //when this is called, it triggers the rendergamestate function



function rendergamestate() {
   for (i = 0; i < cards.length; i += 1) {
   cardEl.innerText+= " "+cards[i] ;
  //using the for loop to display the card contents
  sumEl.innerText = "sum:" + " " + sum;
}
}


function newcard(){
  cards2=[firstcard,secondcard,thirdcard];
  sum2=[firstcard+secondcard+thirdcard];
  newcardrender();
}
  function newcardrender(){
    for (i=0; i<cards.length; i+= 1) {
    cardEl.innerText = "cards:" + firstcard + " "+secondcard + " "+thirdcard;
    sumEl.innerText="sum:"+" "+sum2;
  }
 }

startEl.addEventListener("click", function(){
  if (sum <= 20) {
     gamestate.textContent = "Do you want to draw a new card?";
     isalive = true;
     blackjackvalue = false;
   } 
  })

 newcardEl.addEventListener("click", function(e) { 
    if (sum2 === 21) {
       gamestate.innerText = "Blackjack!";
       isalive = false;
       cleardom()
     }
   else if(sum2>=21){
    gamestate.innerText = "You are out of the game!";
    isalive = false;
    blackjackvalue = false
   }

})

function cleardom(){
  for(i=0; i<100; i++) {    
    cardEl.innerText = "cards:"+" ";
    sumEl.innerText = "sum:"+" ";
  }
}
 
