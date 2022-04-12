// score,questions,choices 초기화
let score = 0;

let questions = [
  "What is 2 + 6?",
  "What is 2 * 3?",
  "What is 3 - 7?",
  "What is 9 / 9?",
  "What is 4 % 3?",
];

let choices = [
  {
    answer: 3,
    choice1: "7",
    choice2: "9",
    choice3: "8",
    choice4: "10",
  },
  {
    answer: 2,
    choice1: "5",
    choice2: "6",
    choice3: "23",
    choice4: "222",
  },
  {
    answer: 1,
    choice1: "-4",
    choice2: "4",
    choice3: "0",
    choice4: "10",
  },
  {
    answer: 3,
    choice1: "81",
    choice2: "0",
    choice3: "1",
    choice4: "18",
  },
  {
    answer: 4,
    choice1: "12",
    choice2: "0",
    choice3: "7",
    choice4: "1",
  },
];


//그래프 진척률
let meter = [20, 40, 60, 80, 100];


//Element Declarations for dom elements
let scoreElement = document.querySelector(".score");
let meterElement = document.querySelector(".meter");
let questionPElement = document.querySelector(".question-p");
let firstContainer = document.querySelector(".first-container");
let secondContainer = document.querySelector(".second-container");
let bodyElement = document.querySelector("body");
let childElement = document.querySelector(".child");
let questionElement = document.querySelector(".question");
let choiceElement = document.querySelector(".choices");

let i = 0;

//Function to be called to update the questions
function updatePage() {
  
    //퀴즈가 끝나면
  if (i > 4) {
    console.log("end");
    firstContainer.parentNode.removeChild(firstContainer);
    secondContainer.parentNode.removeChild(secondContainer);
    bodyElement.innerHTML = `
        <h1 class="result" style="color: #32502E;">Total score: ${score}</h1>
        <a href="quiz.html"><button class="start-btn" style="font-family: 'Grape Nuts', cursive;" >Play Again</button></a>
      `;
    return;
  }
  questionPElement.innerHTML = `Question ${i + 1}/5`;
  meterElement.setAttribute("value", meter[i]);
  scoreElement.innerHTML = score;
  questionElement.innerHTML = questions[i];
  choiceElement.innerHTML = `
    <div class="parent">
        <div class="child1" onclick="checkAnswer(${choices[i].answer}, 1)"><div class="child-inner">A</div>${choices[i].choice1}</div>
        <div class="child2" onclick="checkAnswer(${choices[i].answer}, 2)"><div class="child-inner">B</div>${choices[i].choice2}</div>
        <div class="child3" onclick="checkAnswer(${choices[i].answer}, 3)"><div class="child-inner">C</div>${choices[i].choice3}</div>
        <div class="child4" onclick="checkAnswer(${choices[i].answer}, 4)"><div class="child-inner">D</div>${choices[i].choice4}</div>
    </div>
`;

  i++;
}

//Function to check the answer. It has 2 parameters, the answer for the question and the number of clicked choice
function checkAnswer(ans, clicked) {
  // 정답일 때
  if (ans === clicked) {
    console.log("Correct");
    let choiceElement = document.querySelector(`.child${ans}`);
    console.log(choiceElement);
    choiceElement.style.backgroundColor = "#BFD8B8";
    score++;
    scoreElement.innerHTML = score;
  } else { //오답일 때
    console.log("Wrong");
    let choiceElement = document.querySelector(`.child${clicked}`);
    choiceElement.style.backgroundColor = "red";
  }

  //Timeout to wait for the background color to change before the page updates
  setTimeout(function () {
    updatePage();
  }, 1000);
}