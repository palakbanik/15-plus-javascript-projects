const quizData = [
    {
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    },
];

const question = document.querySelector("#question");
const inputs = document.querySelectorAll(".options");

let idx = 0;
const loadQuiz = () => {
    const data = quizData[idx];

    question.textContent = `${idx + 1}) ${data.question}`;

    inputs[0].nextElementSibling.textContent = data.a;
    inputs[1].nextElementSibling.textContent = data.b;
    inputs[2].nextElementSibling.textContent = data.c;
    inputs[3].nextElementSibling.textContent = data.d;
};

loadQuiz();

const getAns = () => {
    inputs.forEach((input) => {
        if (input.checked) {
            console.log("yes");
        } else {
            console.log("no");
        }
    });
};

const quizSubmit = () => {
    const ans = getAns();
};
