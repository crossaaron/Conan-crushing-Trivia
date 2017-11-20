// stopwatch js as used in class activity
var counter = 30
var questionArray = ["Where is my pen? ", "Are you alive? "]
var answerArray = [["in my pocket", "in my hand"],["no I'm not", "Yes I am"]]
var questionCounter = 0

window.onload = function() {
  timerWrapper();
};

function timerWrapper() {
  theClock = setInterval(thirtySeconds, 1000);
  function thirtySeconds() {
    if (counter === 0) {
      clearInterval(theClock);
      alert ("TIME'S UP!!");
    }
    if (counter > 0) {
      counter--;
    }
    $("#timer").html(counter);
  }
}

function generateQuestions() {
  $("#questions").text(questionArray[questionCounter]);
  $("#answers").text(answerArray[questionCounter][0] + " " + answerArray[questionCounter][1]);
}

function quesAnswSelector() {
  if (questionCounter < 7) {
  questionCounter++;
  generateQuestions();
  }
}

generateQuestions();






