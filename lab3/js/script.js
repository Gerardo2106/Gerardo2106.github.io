
document.querySelector("button").addEventListener("click", gradeQuiz);

//<label><input type="radio" name="q1" value="font-color"> font-color </label>


// shuffleQ1Choices();
// function shuffleQ1Choices(){

//     let q1Choices = ["font-color", "color", "text-color", "color-text"];

//     for (let i of q1Choices) {
//         let radioElement = document.createElement("input");
//         radioElement.type = "radio";
//         radioElement.name = "q1";
//         radioElement.value = i;

//         let labelElement = document.createElement("label");
//         labelElement.textContent = i;

//         labelElement.prepend(radioElement);
//         labelElement.prepend(" ");

//         document.querySelector("#q1ChoicesDiv").append(labelElement);

//          console.log(labelElement); 
//     } 

// }


function gradeQuiz() {
    let feedback1 = document.getElementById("feedback1");
    let feedbackWrong1 = document.getElementById("feedbackWrong1");

    let feedback2 = document.getElementById("feedback2");
    let feedbackWrong2 = document.getElementById("feedbackWrong2");

    let feedback3 = document.getElementById("feedback3");
    let feedbackWrong3 = document.getElementById("feedbackWrong3");

    let q1userAnswer = document.querySelector("input[name=q1]:checked").value;
    let q2userAnswer = document.querySelector('input[name="q2"]').value;
    let q3userAnswer = document.querySelector('input[name="q3"]').value;

    if (q1userAnswer == "color") {
        feedbackWrong1.style.display = "none";
        feedback1.style.display = "block";
    } else {
        feedback1.style.display = "none"
        feedbackWrong1.style.display = "block";
    }
    if (q2userAnswer == "yes") {
        feedbackWrong2.style.display = "none";
        feedback2.style.display = "block";
    } else {
        feedback2.style.display = "none"
        feedbackWrong2.style.display = "block";
    }

    if (q3userAnswer == "3") {
        feedbackWrong3.style.display = "none";
        feedback3.style.display = "block";
    } else {
        feedback3.style.display = "none"
        feedbackWrong3.style.display = "block";
    }
}
