const Questions = [{
    q: "What you prefer most?",
    a: [{ text: "Trouser", isCorrect: true },
    { text: "Skirt", isCorrect: true },
    { text: "Shorts", isCorrect: true },
    { text: "Jeans", isCorrect: true }
    ]
 
},
{
    q: "Which Brand you liked the most?",
    a: [{ text: "Tolkio Talkies", isCorrect: true },
    { text: "Sassafras", isCorrect: true},
    { text: "Street 9", isCorrect: true },
    { text: "Roadster", isCorrect: true }
    ]
 
},
{
    q: "Which beauty product you usually use?",
    a: [{ text: "Lipstick", isCorrect: true },
    { text: "Eye-liner", isCorrect: true },
    { text: "Compact", isCorrect: true },
    { text: "Tint", isCorrect: true }
    ]
 
}

]
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        document.getElementById("para").remove()
        loadScore();
       let btn2= document.getElementById("btn2");
       btn2.addEventListener('click',function()
        { 
              window.location.href = "myshop.html";
        });

    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}