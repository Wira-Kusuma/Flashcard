let answer = document.getElementById("answer");
let question = document.getElementById("question");

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

document.getElementById("flip").addEventListener('click', flip)

function flip() {

    if (answer.style.display === "none" ) {
        question.style.display="none";
        answer.style.display="flex";
    }
    else {
        question.style.display="flex";
        answer.style.display="none";
    }

    //toggle

    // question.classList.add("show");
    // answer.classList.add("hide");

    // question.classList.toggle("hide");
    // question.classList.toggle("show");

    // answer.classList.toggle("show");
    // answer.classList.toggle("hide");
}


back.addEventListener("click", () => {
  if (getComputedStyle(card1).display === "flex") {
    card1.style.display = "none";
    card10.style.display = "flex";
  }
  else if (getComputedStyle(card2).display === "flex") {
    card1.style.display = "flex";
    card2.style.display = "none";
  }
  else if (getComputedStyle(card3).display === "flex") {
    card2.style.display = "flex";
    card3.style.display = "none";
  }
  else if (getComputedStyle(card4).display === "flex") {
    card3.style.display = "flex";
    card4.style.display = "none";
  }
  else if (getComputedStyle(card5).display === "flex") {
    card4.style.display = "flex";
    card5.style.display = "none";
  }
  else if (getComputedStyle(card6).display === "flex") {
    card5.style.display = "flex";
    card6.style.display = "none";
  }
  else if (getComputedStyle(card7).display === "flex") {
    card6.style.display = "flex";
    card7.style.display = "none";
  }
  else if (getComputedStyle(card8).display === "flex") {
    card7.style.display = "flex";
    card8.style.display = "none";
  }
  else if (getComputedStyle(card9).display === "flex") {
    card8.style.display = "flex";
    card9.style.display = "none";
  }
  else if (getComputedStyle(card10).display === "flex") {
    card9.style.display = "flex";
    card10.style.display = "none";
  }
});

next.addEventListener("click", () => {
  if (getComputedStyle(card1).display === "flex") {
    card1.style.display = "none";
    card2.style.display = "flex";
  }
  else if (getComputedStyle(card2).display === "flex") {
    card2.style.display = "none";
    card3.style.display = "flex";
  }
  else if (getComputedStyle(card3).display === "flex") {
    card3.style.display = "none";
    card4.style.display = "flex";
  }
  else if (getComputedStyle(card4).display === "flex") {
    card4.style.display = "none";
    card5.style.display = "flex";
  }
  else if (getComputedStyle(card5).display === "flex") {
    card5.style.display = "none";
    card6.style.display = "flex";
  }
  else if (getComputedStyle(card6).display === "flex") {
    card6.style.display = "none";
    card7.style.display = "flex";
  }
  else if (getComputedStyle(card7).display === "flex") {
    card7.style.display = "none";
    card8.style.display = "flex";
  }
  else if (getComputedStyle(card8).display === "flex") {
    card8.style.display = "none";
    card9.style.display = "flex";
  }
  else if (getComputedStyle(card9).display === "flex") {
    card9.style.display = "none";
    card10.style.display = "flex";
  }
  else if (getComputedStyle(card10).display === "flex") {
    card10.style.display = "none";
    card1.style.display = "flex";
  }
});
