window.onload = function() {
  $("#start").on("click", stopwatch.start);
};

// Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var clockRunning = false;

var stopwatch = {

  time: 30,
  lap: 1,

  reset: function() {

    stopwatch.time = 30;
    stopwatch.lap = 1;

    // "#stopwatch" div to "00:00."
    $("#stopwatch").text("00:30");

    
  },
  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },

  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#stopwatch").text(converted);
    if (stopwatch.time === 0 ) {
      alert ("TIME EXPIRED");
      stopwatch.stop ();
      stopwatch.reset();
    }
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};