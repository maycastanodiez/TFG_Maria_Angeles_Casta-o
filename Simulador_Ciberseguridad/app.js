let scenarios = [];
let selectedScenarios = [];
let currentQuestion = 0;
let score = 0;

document.getElementById("startButton").addEventListener("click", () => {
  const num = parseInt(document.getElementById("numQuestions").value) || 10;
  selectedScenarios = allScenarios.sort(() => 0.5 - Math.random()).slice(0, num);
  scenarios = selectedScenarios;
  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("quizContainer").classList.remove("hidden");
  showQuestion();
});

document.getElementById("nextButton").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < scenarios.length) {
    showQuestion();
  } else {
    showFinalResults();
  }
});

function showQuestion() {
  const q = scenarios[currentQuestion];
  document.getElementById("questionText").textContent = q.question;

  const optionsList = document.getElementById("optionsList");
  optionsList.innerHTML = "";

  q.options.forEach((option, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => handleAnswer(index);
    li.appendChild(btn);
    optionsList.appendChild(li);
  });

  document.getElementById("feedback").textContent = "";
  document.getElementById("nextButton").classList.add("hidden");
}

function handleAnswer(selectedIndex) {
  const q = scenarios[currentQuestion];
  const feedback = document.getElementById("feedback");
  if (selectedIndex === q.correct) {
    feedback.textContent = "✅ Correcto. " + q.explanation;
    score++;
  } else {
    feedback.textContent = "❌ Incorrecto. " + q.explanation;
  }
  document.getElementById("nextButton").classList.remove("hidden");
}

function showFinalResults() {
  const result = {
    date: new Date().toLocaleString(),
    score: score,
    total: scenarios.length
  };

  let history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  history.push(result);
  localStorage.setItem("quizHistory", JSON.stringify(history));

  let message = "";
  if (score >= scenarios.length * 0.85) {
    message = "⭐ Excelente nivel de concienciación. ¡Enhorabuena!";
  } else if (score >= scenarios.length * 0.6) {
    message = "⚠️ Nivel aceptable, pero conviene repasar algunas situaciones.";
  } else {
    message = "❌ Atención: necesitas reforzar conceptos básicos de seguridad.";
  }

  document.getElementById("quizContainer").innerHTML = `
    <h2>¡Simulación completada!</h2>
    <p>Has acertado <strong>${score}</strong> de <strong>${scenarios.length}</strong> preguntas.</p>
    <p>${message}</p>
    <button onclick="location.reload()">🔁 Repetir simulación</button>
  `;
}
