const quizData = [{
    question: 'what is the most used programming language?',
    a: 'java',
    b: 'javascripts',
    c: 'python',
    d: 'C',
    correct: 'a'


}, {
    question: 'what does HTML stands for?',
    a: 'hpertext markup language',
    b: 'how to meet ladies',
    c: 'how to my lies',
    d: 'how knows',
    correct: 'a'

}, {
    question: 'who is the pesident of usa?',
    a: 'Jeff bezoz',
    b: 'Elon musk',
    c: 'Dolnald trump',
    d: 'Barack',
    correct: 'c'
}, {
    qustion: 'how old is dennis?',
    a: '23',
    b: '45',
    c: '11',
    d: '21',
    correct: 'd'
}];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit');

let currentQuiz = 0;
//let answer = undefined;
let score = 0;

loadQuiz();


function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitbtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            //TODO see result
            //alert("you finished get yourself a lemon")
            quiz.innerHTML = `<h2>you answered correctly at${score}/${quizData.length}questions.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }

    }

});