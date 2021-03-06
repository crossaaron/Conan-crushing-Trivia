
var timer = 30
var triviaQuestions = []
var triviaAnswers = []
var count = 0
var correctAnswers = 0;
var incorrectAnswers = 0;

//basic questions //
var questionArray = {
  questions: [{
    prompt: "That Which Does Not Kill Us, Makes Us Stronger",
    answers: ["True", "False",]
    }, {
    prompt: "Fire and Wind come from the sky... From the Gods of the Sky",
    answers: ["True", "False"]
    }, {
    prompt: "Krum Who lives in the Earth is Conans God",
    answers: ["True","False"]
    }, {
    prompt: "The Gods Forgot the Secret of Steel and Left it on the Battlefield",
    answers: ["True","False"]
    }, {
    prompt: "No one in this world can you trust... not women, not beasts,  only steel ",
    answers: ["True", "False"]
    }]
};

// //fades out start jumbotron//
window.onload = function gameStart() {
  // little last minute music because its Conan
  $(document).ready(function() {
    $("#my_audio").get(0).play();
  });

  $("#start").click(function() {
    $('#startScreen').fadeOut(500,function(){
      $('#gameWrapper').fadeIn(500, getQuestion);
      $('#gameContainer').css('visibility', 'visible');
      timerWrapper();
    });  
      $('#submitButton').append('<button id="submitClick">Submit Answers</button>');
      
      $("#submitClick").on('click', function() {
        alert("You got " + correctAnswers + " correct!");
        $('#gameWrapper').fadeOut(500,function(){
          $('#startScreen').fadeIn(500,);
          location.reload();
        });
      });   
  });
}


// //need a way to space out "divs" so they can be formatted
function getQuestion() {
  for (var i = 0; i < questionArray.questions.length; i++) {
  triviaQuestions.push(questionArray.questions[i].prompt);
  triviaAnswers.push(questionArray.questions[i].answers); 
  };
  $("#triviaQuestions" + count).append(triviaQuestions[count]);
  $("#triviaAnswers" + count).append("<input type='radio' name='0' id='userInput' data-search='0'/>" + triviaAnswers[count][0]);
  $("#triviaAnswers" + count).append("<input type='radio' name='1' id='userInput' data-search='1'/>" + triviaAnswers[count][1]);
//tracking which radio button is clicked  
  $('#triviaAnswers'+ count).on('click', '#userInput', function() {
    var x = $(this).data("search");
    if (x == "0") {
      correctAnswers++;
    }
    if (x == "1") {
      incorrectAnswers++;
    } 
   });

  count++;
  if (count < 6) {
    getQuestion();
  }
  
};


//submit button click to get score
    



//better clock setup than all of stopwatch code// 
function timerWrapper() {
  var theClock = setInterval(thirtySeconds, 1000);
  function thirtySeconds() {
    if (timer === 0) {
      clearInterval(theClock);
      alert ("TIME'S UP!!");
      alert ("You got " + correctAnswers + " right!");
      location.reload();
    }
    if (timer > 0) {
      timer--;
    }
    $("#timer").text(timer);
    ;
  }
}






