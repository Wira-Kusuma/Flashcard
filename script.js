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
const totalCards = 10; // Total cards

for (let i = 1; i <= totalCards; i++) {
  const question = document.getElementById(`question${i}`);
  const answer = document.getElementById(`answer${i}`);

  question.addEventListener("click", function() {
    question.classList.add("hide");
    answer.classList.add("show");
  });

  answer.addEventListener("click", function() {
    answer.classList.remove("show");
    question.classList.remove("hide");
  });
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

// edit flashcard 

function changeToEdit() {
  document.getElementById("mainContent").style.display="none";
  document.getElementById("editCard").style.display="flex";
}