document.querySelector("button").addEventListener("click", gradeQuiz);
let timesTaken = localStorage.getItem("timesTaken") || 0;
document.getElementById("timesTaken").textContent = timesTaken;

let q1Div = document.getElementById("q1Choices");
for (let i = q1Div.children.length - 1; i > 0; i--) {
    let k = Math.floor(Math.random() * (i + 1));
    q1Div.appendChild(q1Div.children[k]);
}

function gradeQuiz() {
    let score = 0;


    let q1Selected = document.querySelector("input[name=q1]:checked");
    if (q1Selected && q1Selected.value == "Sacramento") {
        document.getElementById("feedback1").style.display = "block";
        document.getElementById("feedbackWrong1").style.display = "none";
        score += 20;
    } else {
        document.getElementById("feedback1").style.display = "none";
        document.getElementById("feedbackWrong1").style.display = "block";
    }

    let q2userAnswer = document.getElementById("q2").value.trim().toLowerCase();
    if (q2userAnswer == "puerto rico") {
        document.getElementById("feedback2").style.display = "block";
        document.getElementById("feedbackWrong2").style.display = "none";
        score += 20;
    } else {
        document.getElementById("feedback2").style.display = "none";
        document.getElementById("feedbackWrong2").style.display = "block";
    }

    let q3userAnswer = document.getElementById("q3").value;
    if (q3userAnswer == "0") {
        document.getElementById("feedback3").style.display = "block";
        document.getElementById("feedbackWrong3").style.display = "none";
        score += 20;
    } else {
        document.getElementById("feedback3").style.display = "none";
        document.getElementById("feedbackWrong3").style.display = "block";
    }

    let q4userAnswer = document.getElementById("states").value;
    if (q4userAnswer == "West Virginia") {
        document.getElementById("feedback4").style.display = "block";
        document.getElementById("feedbackWrong4").style.display = "none";
        score += 20;
    } else {
        document.getElementById("feedback4").style.display = "none";
        document.getElementById("feedbackWrong4").style.display = "block";
    }

    let alaska = document.querySelector("input[value='Alaska']").checked;
    let hawaii = document.querySelector("input[value='Hawaii']").checked;
    let california = document.querySelector("input[value='California']").checked;
    let oregon = document.querySelector("input[value='Oregon']").checked;

    if (alaska && hawaii && !california && !oregon) {
        document.getElementById("feedback5").style.display = "block";
        document.getElementById("feedbackWrong5").style.display = "none";
        score += 20;
    } else {
        document.getElementById("feedback5").style.display = "none";
        document.getElementById("feedbackWrong5").style.display = "block";
    }




    document.getElementById("score").textContent = "Your score: " + score + " / 100";
    if (score > 80) {
        document.getElementById("congrats").style.display = "block";
    } else {
        document.getElementById("congrats").style.display = "none";
    }
    timesTaken++;
    localStorage.setItem("timesTaken", timesTaken);
    document.getElementById("timesTaken").textContent = timesTaken;
}
