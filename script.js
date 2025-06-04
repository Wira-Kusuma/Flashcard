let answer = document.getElementById("answer");
let question = document.getElementById("question");


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
}