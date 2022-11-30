let questions = [
  {
    "question": "Wer hat HTML erfunden?",
    "answer_1": "Robbie Williams",
    "answer_2": "Lady  Gaga",
    "answer_3": "Tim Berners-Lee",
    "answer_4": "Justin Bieber",
    "right_answer": 3
  },



  {
    "question": "Welches Attribut kann NICHT für Textarea verwenden?",
    "answer_1": "ready only",
    "answer_2": "max",
    "answer_3": "from",
    "answer_4": "spellcheck",
    "right_answer": 1


  },


  {
    "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut tittle aus?",
    "answer_1": "a[title]{...}",
    "answer_2": "a > title {...}",
    "answer_3": "a.title{...}",
    "answer_4": "a=tittle {...}",
    "right_answer": 1
  },

  {
    "question": "Wie definiert man in JavaScript eine variable?",
    "answer_1": "let 100 = rate;",
    "answer_2": "100 = let rate;",
    "answer_3": "rate = 100;",
    "answer_4": "let rate = 100;",
    "right_answer": 4
  },

  {
    "question": "Was ist ein Byte?",
    "answer_1": "Teil der Hardware",
    "answer_2": "Eine Maßeeinheit für Datenmengen",
    "answer_3": "Programmiersprache",
    "answer_4": "Ein Bildbearbeitungsprogramm",
    "right_answer": 2
  },

  {
    "question": "Was bedeutet die Abkürzung IT?",
    "answer_1": "Intelligenztest",
    "answer_2": " Informationstechnologie",
    "answer_3": "Informatik und Technik",
    "answer_4": "Integrationstaktik",
    "right_answer": 2
  },

  {
    "question": "Wofür steht das Kürzel HTML?",
    "answer_1": "Hyperlink Method Language",
    "answer_2": "Hyperscript Manual Language",
    "answer_3": "Hyperfront Mix Language",
    "answer_4": "Hypertext Markup Language",
    "right_answer": 4
  },


];

let rightQuestions = 0;
let currentQuestion = 0;

function init() {
  document.getElementById('all-questions').innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {

  if (currentQuestion >= questions.length) {
    // TDO: Show End Screen
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none'; 

    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;  //Wie viele Fragen man Richtig hat
    document.getElementById('header-image').src = './img/trophy.png';

  } else {

 

  let question = questions[currentQuestion];

  document.getElementById('question-number').innerHTML = currentQuestion + 1;
  document.getElementById('questiontext').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];

    }
}


function answer(selection) {
  let question = questions[currentQuestion];
  console.log('Selected answer is', selection)
  let selectedQuestionNumber = selection.slice(-1);
  console.log('selectedQuestionNumber is ', selectedQuestionNumber);
  console.log('Current question is ', question['right_answer']);


  let idOfRightAnswer = `answer_${question['right_answer']}`;

  if (selectedQuestionNumber == question['right_answer']) { //Richtige Frage beantwortet
    console.log('Richtige Antwort!!');
    document.getElementById(selection).parentNode.classList.add('bg-success');
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');

  }
  document.getElementById('next-button').disabled = false;

}

function nextQuestion() {
  currentQuestion++; // z.B von 0 auf 1
  showQuestion();

  document.getElementById('next-button').disabled = true;

  resetAnswerButtons();
  showQuestion();

}

function resetAnswerButtons() {
  document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
  document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success');
  document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success');
  document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}
