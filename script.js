let answer1 = document.getElementById("answer1");
let question1 = document.getElementById("question1");

let answer2 = document.getElementById("answer2");
let question2 = document.getElementById("question2");

let answer3 = document.getElementById("answer3");
let question3 = document.getElementById("question3");

let answer4 = document.getElementById("answer4");
let question4 = document.getElementById("question4");

let answer5 = document.getElementById("answer5");
let question5 = document.getElementById("question5");

let answer6 = document.getElementById("answer6");
let question6 = document.getElementById("question6");

let answer7 = document.getElementById("answer7");
let question7 = document.getElementById("question7");

let answer8 = document.getElementById("answer8");
let question8 = document.getElementById("question8");

let answer9 = document.getElementById("answer9");
let question9 = document.getElementById("question9");

let answer10 = document.getElementById("answer10");
let question10 = document.getElementById("question10");


let back = document.getElementById("back");
let next = document.getElementById("next");

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");
let card7 = document.getElementById("card7");
let card8 = document.getElementById("card8");
let card9 = document.getElementById("card9");
let card10 = document.getElementById("card10");

let stage = document.getElementById("stage");


// flip code below 
question1.addEventListener('click', swichA1);
question2.addEventListener('click', swichA2);
question3.addEventListener('click', swichA3);
question4.addEventListener('click', swichA4);
question5.addEventListener('click', swichA5);
question6.addEventListener('click', swichA6);
question7.addEventListener('click', swichA7);
question8.addEventListener('click', swichA8);
question9.addEventListener('click', swichA9);
question10.addEventListener('click', swichA10);

answer1.addEventListener('click', swichQ1);
answer2.addEventListener('click', swichQ2);
answer3.addEventListener('click', swichQ3);
answer4.addEventListener('click', swichQ4);
answer5.addEventListener('click', swichQ5);
answer6.addEventListener('click', swichQ6);
answer7.addEventListener('click', swichQ7);
answer8.addEventListener('click', swichQ8);
answer9.addEventListener('click', swichQ9);
answer10.addEventListener('click', swichQ10);


function swichA1() {
  question1.style.display="none";
  answer1.style.display="flex";
}
function swichA2() {
  question2.style.display="none";
  answer2.style.display="flex";
}
function swichA3() {
  question3.style.display="none";
  answer3.style.display="flex";
}
function swichA4() {
  question4.style.display="none";
  answer4.style.display="flex";
}
function swichA5() {
  question5.style.display="none";
  answer5.style.display="flex";
}
function swichA6() {
  question6.style.display="none";
  answer6.style.display="flex";
}
function swichA7() {
  question7.style.display="none";
  answer7.style.display="flex";
}
function swichA8() {
  question8.style.display="none";
  answer8.style.display="flex";
}
function swichA9() {
  question9.style.display="none";
  answer9.style.display="flex";
}
function swichA10() {
  question1.style.display="none";
  answer1.style.display="flex";
}


function swichQ1() {
  question1.style.display="flex";
  answer1.style.display="none";
}
function swichQ2() {
  question2.style.display="flex";
  answer2.style.display="none";
}
function swichQ3() {
  question3.style.display="flex";
  answer3.style.display="none";
}
function swichQ4() {
  question4.style.display="flex";
  answer4.style.display="none";
}
function swichQ5() {
  question5.style.display="flex";
  answer5.style.display="none";
}
function swichQ6() {
  question6.style.display="flex";
  answer6.style.display="none";
}
function swichQ7() {
  question7.style.display="flex";
  answer7.style.display="none";
}
function swichQ8() {
  question8.style.display="flex";
  answer8.style.display="none";
}
function swichQ9() {
  question9.style.display="flex";
  answer9.style.display="none";
}
function swichQ10() {
  question10.style.display="flex";
  answer10.style.display="none";
}




// back and next button code below

back.addEventListener("click", () => {
  if (getComputedStyle(card1).display === "flex") {
    card1.style.display = "none";
    card10.style.display = "flex";
    stage.innerHTML = 10;

  }
  else if (getComputedStyle(card2).display === "flex") {
    card1.style.display = "flex";
    card2.style.display = "none";
    stage.innerHTML = 1;
  }
  else if (getComputedStyle(card3).display === "flex") {
    card2.style.display = "flex";
    card3.style.display = "none";
    stage.innerHTML = 2;
  }
  else if (getComputedStyle(card4).display === "flex") {
    card3.style.display = "flex";
    card4.style.display = "none";
    stage.innerHTML = 3;
  }
  else if (getComputedStyle(card5).display === "flex") {
    card4.style.display = "flex";
    card5.style.display = "none";
    stage.innerHTML = 4;
  }
  else if (getComputedStyle(card6).display === "flex") {
    card5.style.display = "flex";
    card6.style.display = "none";
    stage.innerHTML = 5;
  }
  else if (getComputedStyle(card7).display === "flex") {
    card6.style.display = "flex";
    card7.style.display = "none";
    stage.innerHTML = 6;
  }
  else if (getComputedStyle(card8).display === "flex") {
    card7.style.display = "flex";
    card8.style.display = "none";
    stage.innerHTML = 7;
  }
  else if (getComputedStyle(card9).display === "flex") {
    card8.style.display = "flex";
    card9.style.display = "none";
    stage.innerHTML = 8;
  }
  else if (getComputedStyle(card10).display === "flex") {
    card9.style.display = "flex";
    card10.style.display = "none";
    stage.innerHTML = 9;
  }
});

next.addEventListener("click", () => {
  if (getComputedStyle(card1).display === "flex") {
    card1.style.display = "none";
    card2.style.display = "flex";
    stage.innerHTML = 2;
  }
  else if (getComputedStyle(card2).display === "flex") {
    card2.style.display = "none";
    card3.style.display = "flex";
    stage.innerHTML = 3;
  }
  else if (getComputedStyle(card3).display === "flex") {
    card3.style.display = "none";
    card4.style.display = "flex";
    stage.innerHTML = 4;
  }
  else if (getComputedStyle(card4).display === "flex") {
    card4.style.display = "none";
    card5.style.display = "flex";
    stage.innerHTML = 5
  }
  else if (getComputedStyle(card5).display === "flex") {
    card5.style.display = "none";
    card6.style.display = "flex";
    stage.innerHTML = 6;
  }
  else if (getComputedStyle(card6).display === "flex") {
    card6.style.display = "none";
    card7.style.display = "flex";
    stage.innerHTML = 7;
  }
  else if (getComputedStyle(card7).display === "flex") {
    card7.style.display = "none";
    card8.style.display = "flex";
    stage.innerHTML = 8;
  }
  else if (getComputedStyle(card8).display === "flex") {
    card8.style.display = "none";
    card9.style.display = "flex";
    stage.innerHTML = 9;
  }
  else if (getComputedStyle(card9).display === "flex") {
    card9.style.display = "none";
    card10.style.display = "flex";
    stage.innerHTML = 10;
  }
  else if (getComputedStyle(card10).display === "flex") {
    card10.style.display = "none";
    card1.style.display = "flex";
    stage.innerHTML = 1;
  }
});
