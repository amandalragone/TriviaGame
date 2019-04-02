$(document).ready(function() {

    var seconds = 30;
    var intervalId;
    // setTimeout(fourSeconds, 1000 * 4);


    var button = document.getElementById("start");
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;

    $(".question").hide();
    
    
    function decrement() {
    
        //  Decrease seconds by one.
        seconds--;
    
        //  Show the second remaining in the #time tag.
        $("#time").html("<h2>" + seconds + "</h2>");
    
        //  Once number hits zero...
        if (seconds === 0) {
    
          //  ...run the stop function.
          stop();
          timeUp();
        }
      }
    
      function stop() {
    
        clearInterval(intervalId);
      };

      function resetSeconds() {
        seconds = 30;
        $("#time").html("<h2>" + seconds + "</h2>");
        intervalId = setInterval(decrement, 1000);
        decrement();
      }

      function timeUp() {
          alert("Time's up!");
      };
    
      button.onclick = function(event) {

        $("#game").empty();
        $("#time").html("<h2>" + seconds + "</h2>");
        $(".question").first().show().addClass("question_asked").removeClass("question").appendTo("#game");
       
        clearInterval(intervalId);
        resetSeconds();
        
    };


    
    $(".answer").on("click", function(){
      stop();
      resetSeconds();
      $(".question_asked").hide();
      $(".question").first().show().removeClass("question").addClass("question_asked").appendTo("#game");
    
    });

    
    
    });