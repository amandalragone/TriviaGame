$(document).ready(function() {

    var seconds = 30;
    var intervalId;

    var button = document.getElementById("start");
    var correctAnswers;
    var incorrectAnswers;
    var unansweredQuestions;

    $(".question").hide();
    $("#results").hide();

    function startGame() {

      correctAnswers = 0;
      incorrectAnswers = 0;
      unansweredQuestions = 0;


      // $("#game").empty();
      $("#time").html("<h2>Time Remaining: " + seconds + " Seconds</h2>");
     
      $(".question").first().show().addClass("question_asked").removeClass("question");

      clearInterval(intervalId);
      resetSeconds();

    }

    // function 

    //   setTimeout(fourSeconds, 1000 * 4);

    // }
    
    
    function decrement() {
    
        //  Decrease seconds by one.
        seconds--;
    
        //  Show the second remaining in the #time tag.
        $("#time").html("<h2>Time remaining: " + seconds + " Seconds</h2>");
    
        //  Once number hits zero...
        if (seconds === 0) {
    
          unansweredQuestions++;

          stop();

          resetSeconds();
    
          $(".question_asked").hide();
          $(".question").first().show().removeClass("question").addClass("question_asked");

          if (correctAnswers + incorrectAnswers + unansweredQuestions === 10) {
          results();
      };
        }
      }
    
      function stop() {
    
        clearInterval(intervalId);
      };

      function results () {
        stop();

        // $("#game").empty();
        $("#time").empty();
        $("#correctAnswers").text("Correct Answers: " + correctAnswers);
        $("#incorrectAnswers").text("Incorrect Answers: " + incorrectAnswers);
        $("#unansweredQuestions").text("Unanswered Questions: " + unansweredQuestions);
        $("#results").show();
      };

      function resetSeconds() {
        seconds = 30;
        $("#time").html("<h2>" + seconds + "</h2>");
        intervalId = setInterval(decrement, 1000);
        decrement();
      }
    
      button.onclick = function(event) {

      correctAnswers = 0;
      incorrectAnswers = 0;
      unansweredQuestions = 0;


      $("#game").empty();
      $("#time").html("<h2>Time Remaining: " + seconds + " Seconds</h2>");
      $(".question").first().show().addClass("question_asked").removeClass("question");

      clearInterval(intervalId);
      resetSeconds();
        
    };


    $(".correct").on("click", function(){
    
      correctAnswers++;

      stop();

      resetSeconds();
 

      $(".question_asked").hide();
      $(".question").first().show().removeClass("question").addClass("question_asked");


      if (correctAnswers + incorrectAnswers + unansweredQuestions === 10) {
        
        results();
      };
    });

    $(".incorrect").on("click", function(){
     
      incorrectAnswers++;

      stop();
      resetSeconds();
    
      $(".question_asked").hide();
      $(".question").first().show().removeClass("question").addClass("question_asked");

      if (correctAnswers + incorrectAnswers + unansweredQuestions === 10) {
        
        results();
      };

    });

    $("#startAgain").on("click", function(){
      
      $(".question_asked").addClass("question").hide();
      $(".question").removeClass("question_asked");
      $("#results").hide();


      startGame();




    })

    
    });