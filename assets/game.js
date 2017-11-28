
var timer = 30
var triviaQuestions = []
var triviaAnswers = []
var count = 0

//basic questions //
var questionArray = {
  questions: [{
    prompt: "Where is my Pen?",
    answers: ["In my pocket", "In my hand",]
    }, {
    prompt: "Are you Alive?",
    answers: ["yes", "no"]
    }]
};

// //fades out start jumbotron//
window.onload = function() {
  $("#start").click(function() {
    $('#startScreen').fadeOut(500,function(){
      $('#gameWrapper').fadeIn(500, getQuestion);
timerWrapper();
getQuestion();
      
      

    });
  });

}


// //need a way to space out "divs" so they can be formatted
function getQuestion() {
  for (var i = 0; i < questionArray.questions.length; i++) {
  triviaQuestions.push(questionArray.questions[i].prompt);
  triviaAnswers.push(questionArray.questions[i].answers); 
//   };
  $("#triviaQuestions" + count).append(triviaQuestions[count]);
  $("#triviaAnswers" + count).append("<input type='radio' name='0' id='userInput' data-search='0'/>" + triviaAnswers[count][0]);
  $("#triviaAnswers" + count).append("<input type='radio' name='0' id='userInput' data-search='1'/>" + triviaAnswers[count][1]);
//tracking which radio button is clicked
  $('#triviaAnswers'+ count).on('click', '#userInput',function() {
    var x = $(this).data("search");
    console.log(this);
});
  count++;
  if (count < 2) {
    getQuestion();
  }
}
};

//better clock setup than all of stopwatch code// 
function timerWrapper() {
  theClock = setInterval(thirtySeconds, 1000);
  function thirtySeconds() {
    if (timer === 0) {
      clearInterval(theClock);
      alert ("TIME'S UP!!");
    }
    if (timer > 0) {
      timer--;
    }
    $("#timer").html(timer);
    ;
  }
}
//trying to collect data





