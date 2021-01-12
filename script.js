const quizData = [
    {
        question: 'What stand for HTML?',
        a: 'Hypertext markup Language',
        b: 'Hypertype markup Language',
        c: 'Hypertext machine Language',
        d: 'None of these',
        correct:'a'
    }, {
        question: 'Who is the prime minister of India?',
        a: 'Rahul Gandhi',
        b: 'Narendra Modi',
        c: 'Amit Shah',
        d: 'Priyanka Gandhi',
        correct: 'b'
    }, {
        question: 'Who was the first president of india?',
        a: 'Lal Bahadur Sastri',
        b: 'Sardar Pater',
        c: 'Dr. Rajendra Prasad',
        d: 'Pt. Jawahar lal Nehru',
        correct: 'c'
    }, {
        question: 'Who is the ceo of tesla motors?',
        a: 'Bill Gates',
        b: 'albert pabolo',
        c: 'Elon Musk',
        d: 'Jeff Besos',
        correct:'c'
    }, {
        question: 'Which was the most used programming language in 2020?',
        a: 'Java',
        b: 'c++',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    }
]
const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll(".answer");
const questionE1 = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected(){
    let answer = undefined;
    answerE1s.forEach((answerE1) => {
        if (answerE1.checked) {
            answer = answerE1.id;
        }
    });
    return answer;
}
function deselectAnswers() {
    answerE1s.forEach((answerE1) => {
        answerE1.checked = false;
    });
}
submitBtn.addEventListener("click", () => {

    const answer = getSelected();
    if (answer) {
        if (answer == quizData[currentQuiz].correct) {
            score++;
        }
        deselectAnswers();
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} 
            questions.</h2><button onclick = "location.reload()">Try Again</button>`;
        }
    }
});