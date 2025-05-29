function startQuiz() {
    let question = "What is the largest organ in the human body?";
    let answer = prompt(question);
    if (answer.toLowerCase() === "skin") {
        alert("Correct! The skin is the largest organ.");
    } else {
        alert("Incorrect. Try again!");
    }
}
document.querySelectorAll('.organ').forEach(organ => {
    organ.addEventListener('mouseover', () => {
        document.getElementById('organ-info').textContent = "You are hovering over: " + organ.getAttribute('data-name');
    });
});
let score = 0;

function adaptiveQuiz() {
    let questions = [
        { question: "What is the largest organ?", answer: "Skin", difficulty: 1 },
        { question: "Where does hematopoiesis occur?", answer: "Bone marrow", difficulty: 2 }
    ];

    let currentQuestion = questions[Math.min(score, questions.length - 1)];
    let userAnswer = prompt(currentQuestion.question);

    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        score++;
        alert("Correct! Difficulty will increase.");
    } else {
        alert("Incorrect. Try again later.");
    }
}
function searchAnatomy() {
    let query = document.getElementById('searchBox').value;
    
    fetch(`/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
            let resultDiv = document.getElementById('results');
            resultDiv.innerHTML = data.map(item => `<p><b>${item.title}</b>: ${item.description}</p>`).join('');
        });
}
async function askChatbot() {
    let question = prompt("Ask a medical question:");
    
    let response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: { "Authorization": "Bearer YOUR_API_KEY", "Content-Type": "application/json" },
        body: JSON.stringify({ model: "gpt-4", prompt: question, max_tokens: 100 })
    });

    let data = await response.json();
    alert("AI Response: " + data.choices[0].text.trim());
}
let socket = new WebSocket("ws://localhost:8000/ws/quiz/");

socket.onmessage = function(event) {
    document.getElementById("quizArea").innerHTML = "New question: " + event.data;
};

function sendAnswer(answer) {
    socket.send(answer);
}
function showInfo(system) {
    let info = {
        skeletal: "The skeletal system includes the **skull, spine, ribs, and limbs**, protecting vital organs.",
        muscular: "Muscles are divided into **skeletal, smooth, and cardiac** types for different movements."
    };

    document.getElementById(system + "-info").innerHTML = info[system];
}









