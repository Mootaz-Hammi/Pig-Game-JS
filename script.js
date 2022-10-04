"use strict";

var player1 = Number(document.getElementById("score--0").textContent);
var c1 = document.getElementById("current--0");
var currentPlayer1 = Number(c1.textContent);
var s1 = document.getElementById("score--0");
var scoreplayer1 = Number(s1.textContent);
// player 2
var player2 = Number(document.getElementById("score--1").textContent);
var c2 = document.getElementById("current--1");
var currentPlayer2 = Number(c2.textContent);
var s2 = document.getElementById("score--1");
var scoreplayer2 = Number(s2.textContent);
let p=1;



document.getElementById("roll").addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  document.getElementById("diceimg").style.visibility = "visible";

  switch (dice) {
    case 1:
      document.querySelector(".dice").src = "dice-1.png";
      

      break;
    case 2:
      document.querySelector(".dice").src = "dice-2.png";

      break;
    case 3:
      document.querySelector(".dice").src = "dice-3.png";

      break;
    case 4:
      document.querySelector(".dice").src = "dice-4.png";

      break;
    case 5:
      document.querySelector(".dice").src = "dice-5.png";

      break;
    case 6:
      document.querySelector(".dice").src = "dice-6.png";

      break;
  }
  if(p==1){
  if (dice != 1) {
    currentPlayer1 += dice;
    c1.textContent = currentPlayer1;
  } else {
    p1top2();
    p=2;
  }
}else {
  if (dice != 1) {
    currentPlayer1 =0;
    currentPlayer2 += dice;
    c2.textContent = currentPlayer2;
    
  } else {
    
    p2top1();
    p=1;
  }
}
  c1.textContent = currentPlayer1;
  c2.textContent = currentPlayer2;
  console.log(currentPlayer1);
});

document.getElementById("Hold").addEventListener("click", function () {
  
  if (p==1){
    scoreplayer1 += currentPlayer1;
    s1.textContent = scoreplayer1;
  p1top2();

  p=2;
  }else{
    scoreplayer2 += currentPlayer2;
    s2.textContent = scoreplayer2;
    
    p2top1()
  p=1;
}
  
});


function p1top2(){
 // scoreplayer1 += currentPlayer1;
  currentPlayer1 = 0;
  c1.textContent = 0;
 // s1.textContent = scoreplayer1;
  document.getElementById("player2zone").classList.add("player--active");
  document.getElementById("player1zone").classList.remove("player--active");

}
function p2top1(){
  currentPlayer2 =0;
  c2.textContent = 0;
  document.getElementById("player1zone").classList.add("player--active");
  document.getElementById("player2zone").classList.remove("player--active");

}


document.getElementById("newgame").addEventListener("click",function(){
  currentPlayer1 = 0;
  c1.textContent = 0;
  scoreplayer1 = 0;
  s1.textContent = 0 ;
  // player 2
  currentPlayer2 = 0;
  c2.textContent = 0;
  scoreplayer2 = 0;
  s2.textContent = 0 ;
  p=1;
  document.getElementById("player1zone").classList.add("player--active");
  document.getElementById("player2zone").classList.remove("player--active");
  document.getElementById("diceimg").style.visibility='hidden';
})