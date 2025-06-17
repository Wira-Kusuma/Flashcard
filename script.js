let back = document.getElementById("back");
let next = document.getElementById("next");

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

// when click this code run and change display to edit
function changeToEdit() {
  document.getElementById("mainContent").style.display="none";
  document.getElementById("editCard").style.display="flex";
}

// to send input from text area to flashcard
function saveEditCard() {
  const eq = [];
  for (let i = 1; i <= 10; i++) {
    eq[i] = document.getElementById(`eq${i}`).value;
    document.getElementById(`q${i}`).innerText = eq[i];
  }

  const ea = [];
  for (let i = 1; i <= 10; i++) {
    ea[i] = document.getElementById(`ea${i}`).value;
    document.getElementById(`a${i}`).innerText = ea[i];
  }

  // save to localStorage
  localStorage.setItem("eq", JSON.stringify(eq));
  localStorage.setItem("ea", JSON.stringify(ea));

  document.getElementById("mainContent").style.display = "flex";
  document.getElementById("editCard").style.display = "none";
}

// to clear all value in text area
function clearEditCard() {
  for (let i = 1; i <= 10; i++) {
    document.getElementById(`eq${i}`).value=`question${i}`;
  }
  for (let i = 1; i <= 10; i++) {
    document.getElementById(`ea${i}`).value=`answer${i}`;
  }
}

function loadEditCard() {
  // take data from localstorage
  const eq = JSON.parse(localStorage.getItem("eq") || "[]");
  const ea = JSON.parse(localStorage.getItem("ea") || "[]");

  for (let i = 1; i <= 10; i++) {
    if (eq[i] !== undefined) {
      document.getElementById(`eq${i}`).value = eq[i];
      document.getElementById(`q${i}`).innerText = eq[i];
    }
    if (ea[i] !== undefined) {
      document.getElementById(`ea${i}`).value = ea[i];
      document.getElementById(`a${i}`).innerText = ea[i];
    }
  }
}

// run when open
window.onload = loadEditCard;