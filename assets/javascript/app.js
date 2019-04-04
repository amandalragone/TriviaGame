$(document).ready(function() {

    var seconds = 30;
    var intervalId;
    // setTimeout(fourSeconds, 1000 * 4);


    var button = document.getElementById("start");
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;

    var isThisCorrect = false;
    var isThisIncorrect = false;

    $(".question").hide();
    $("#results").hide();
    
    
    function decrement() {
    
        //  Decrease seconds by one.
        seconds--;
    
        //  Show the second remaining in the #time tag.
        $("#time").html("<h2>" + seconds + "</h2>");
    
        //  Once number hits zero...
        if (seconds === 0) {
    
          unansweredQuestions++;

          stop();
          resetSeconds();
    
          $(".question_asked").hide();
          $(".question").first().show().removeClass("question").addClass("question_asked").appendTo("#game");

          if (correctAnswers + incorrectAnswers + unansweredQuestions === 10) {
          stop();
          $("#game").empty();
          $("#time").empty();
          $("#correctAnswers").append(correctAnswers);
          $("#incorrectAnswers").append(incorrectAnswers);
          $("#unansweredQuestions").append(unansweredQuestions);
          $("#results").show().appendTo("#game");
      };
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
    
      button.onclick = function(event) {

        $("#game").empty();
        $("#time").html("<h2>" + seconds + "</h2>");
        $(".question").first().show().addClass("question_asked").removeClass("question").appendTo("#game");
       
        clearInterval(intervalId);
        resetSeconds();
        
    };


    $(".correct").on("click", function(){
    
      correctAnswers++;

      stop();
      resetSeconds();
    
      $(".question_asked").hide();
      $(".question").first().show().removeClass("question").addClass("question_asked").appendTo("#game");


      if (correctAnswers + incorrectAnswers + unansweredQuestions === 10) {
        
        stop();
        $("#game").empty();
        $("#time").empty();
        $("#correctAnswers").append(correctAnswers);
        $("#incorrectAnswers").append(incorrectAnswers);
        $("#unansweredQuestions").append(unansweredQuestions);
        $("#results").show().appendTo("#game");
      };
    });

    $(".incorrect").on("click", function(){
     
      incorrectAnswers++;

      stop();
      resetSeconds();
    
      $(".question_asked").hide();
      $(".question").first().show().removeClass("question").addClass("question_asked").appendTo("#game");

      if (correctAnswers + incorrectAnswers + unansweredQuestions === 10) {
        
        stop();
        $("#game").empty();
        $("#time").empty();
        $("#correctAnswers").append(correctAnswers);
        $("#incorrectAnswers").append(incorrectAnswers);
        $("#unansweredQuestions").append(unansweredQuestions);
        $("#results").show().appendTo("#game");
      };

    });


    
    
    });