const questions = [
  {
    question: "Qual é a função principal do JavaScript?",
    answers: [
      "Manipular dados no banco de dados",
      "Estilizar elementos HTML",
      "Controlar a lógica e comportamento da página web",
      "Executar operações matemáticas",
    ],
    correct: 2,
  },
  {
    question: "O que é uma variável em JavaScript?",
    answers: [
      "Um tipo de dado primitivo",
      "Um operador lógico",
      "Um contêiner para armazenar valores",
      "Uma função de loop",
    ],
    correct: 2,
  },
  {
    question: "Como se declara uma variável em JavaScript?",
    answers: [
      "let myVar = 10;",
      "const myVar = 'Hello';",
      "var myVar = true;",
      "set myVar = 5;",
    ],
    correct: 0,
  },
  {
    question: "O que é uma função em JavaScript?",
    answers: [
      "Um operador condicional",
      "Um tipo de dado numérico",
      "Um bloco de código reutilizável",
      "Uma expressão regular",
    ],
    correct: 2,
  },
  {
    question: "Qual é a diferença entre '==' e '===' em JavaScript?",
    answers: [
      "Ambos comparam valores e tipos",
      "O '==' compara apenas valores, o '===' compara valores e tipos",
      "O '===' compara apenas valores, o '==' compara valores e tipos",
      "Nenhuma diferença, ambos são equivalentes",
    ],
    correct: 1,
  },
  {
    question: "O que é o DOM em JavaScript?",
    answers: [
      "Um formato de dados para armazenar objetos",
      "Um modelo de objeto para representar documentos HTML",
      "Uma linguagem de programação",
      "Um método de criptografia",
    ],
    correct: 1,
  },
  {
    question: "Como se faz um loop 'for' em JavaScript?",
    answers: [
      "for (let i = 0; i < 5; i++)",
      "loop (i = 0; i < 5; i++)",
      "while (i = 0; i < 5; i++)",
      "for (i = 0; i < 5)",
    ],
    correct: 0,
  },
  {
    question: "O que é JSON em JavaScript?",
    answers: [
      "Um método de criptografia",
      "Um formato de dados para troca de informações",
      "Uma biblioteca de gráficos",
      "Um tipo de dado primitivo",
    ],
    correct: 1,
  },
  {
    question: "Qual é a finalidade do operador 'typeof' em JavaScript?",
    answers: [
      "Comparar tipos de dados",
      "Retornar o tipo de dado de uma variável",
      "Criar uma variável do tipo 'typeof'",
      "Executar uma operação matemática",
    ],
    correct: 1,
  },
  {
    question: "O que é o evento 'click' em JavaScript?",
    answers: [
      "Uma função de loop",
      "Um método de estilização",
      "Um evento que ocorre quando um elemento é clicado",
      "Um tipo de dado numérico",
    ],
    correct: 2,
  },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corrects = new Set();
const totalQuestions = questions.length;
const showTotalScore = document.querySelector("#score span");
showTotalScore.textContent = `${corrects.size} out of ${totalQuestions}`;

for (const item of questions) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.question;

  for (let answer of item.answers) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = answer;
    dt.querySelector("input").setAttribute(
      "name",
      `question-${questions.indexOf(item)}`
    );
    dt.querySelector("input").value = item.answers.indexOf(answer);
    dt.querySelector("input").onchange = (event) => {
      const isCorrect = event.target.value == item.correct;

      corrects.delete(item);
      if (isCorrect) {
        corrects.add(item);
      }

      showTotalScore.textContent = `${corrects.size} out of ${totalQuestions}`;
    };

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  quiz.appendChild(quizItem);
}
