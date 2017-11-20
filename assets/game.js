// stopwatch js as used in class activity
var counter = 30


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

var triviaQuestions = ["Where is my pen", "Are you alive",]
var triviaAnswers = [["in my pocket", "in my hand"],["no I'm not", "Yes I am"]]

function pickQuestions () {



  
  
}

pickQuestions();



