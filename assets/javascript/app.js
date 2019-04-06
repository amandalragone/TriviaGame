$(document).ready(function() {

    var images = ["new-york-city.jpg", "gilmore-girls.jpg", "jensen-ackles.jpg", "aladdin.jpg", "voldemort.jpg", "ring.jpg", "snow-white.jpg", "thor.jpg", "phoebe-ross.jpg", "martin-freeman.jpg"];
    var answers = ["New York", "A single mother and her daughter.", "Jensen Ackles", "crystal clear", "Tom Marvolo Riddle", "in the darkness bind them.", "Snow White and the Seven Dwarfs", "Thor", "Phoebe and Ross.", "Martin Freeman"];

    var seconds = 30;
    var intervalId;

    var button = document.getElementById("start");
    var correctAnswers;
    var incorrectAnswers;
    var unansweredQuestions;
    var questionCount;

    //To start the game, everything except for the H1 and the Start button will be hidden.

    $(".question").hide();
    $("#results").hide();

    //This function will be called whenever the Start button is pressed at the beginning of the game, or when "Start Over" is pressed in the results screen.

    function startGame() {

      $("#game").empty();

      questionCount = 0;
      correctAnswers = 0;
      incorrectAnswers = 0;
      unansweredQuestions = 0;

      $("#time").html("<h2>Time Remaining: " + seconds + " Seconds</h2>");
     
      $(".question").first().show().addClass("question_asked").removeClass("question");

      clearInterval(intervalId);
      resetSeconds();

    }

    //This function will stop the Interval.

    function stop() {
    
      clearInterval(intervalId);
    };

    //This function will reset seconds to 30.

    function resetSeconds() {
      seconds = 30;
      $("#time").html("<h2>" + seconds + "</h2>");
      intervalId = setInterval(decrement, 1000);
      decrement();
    }
    
    //This function indicates by how many seconds the Interval will decrease.

    function decrement() {
    
        //  Decrease seconds by one.
        seconds--;
    
        //  Show the seconds remaining in the #time tag.
        $("#time").html("<h2>Time remaining: " + seconds + " Seconds</h2>");
    
        //  If seconds hits zero...
        if (seconds === 0) {
    
          //...run the questionStatus function.

          questionStatus("unanswered");
          

        }
      }

      //This function will run whenever the user clicks an answer, or whenever seconds = 0.

      function questionStatus(answerChosen) {

        //Question displayed will be hidden and Interval will stop.
        questionCount++;
        $(".question_asked").hide();
        stop();

        //Function will analyze if an answer was selected and, if so, which one. Then, it will diplay the question status based on that. It will also increase the count of either correct answers, incorrect answers, or unanswered questions.

          if (answerChosen === "correct") {

            var status = `
            <div>
            <h3>You're right!</h3>
            <img src='assets/images/${images[questionCount - 1]}' width=250 height=250>
            </div>
            `

            $("#game").html(status);
            correctAnswers++;

          } else if (answerChosen === "incorrect") {

            var status = `
            <div>
            <h3>Nope!</h3>
            <p>The correct answer was: ${answers[questionCount - 1]}</p>
            <img src='assets/images/${images[questionCount - 1]}' width=250 height=250>
            </div>
            `

            $("#game").html(status);
            
            incorrectAnswers++;

          } else {

            var status = `
            <div>
            <h3>Time's up!</h3>
            <p>The correct answer was: ${answers[questionCount - 1]}</p>
            <img src='assets/images/${images[questionCount - 1]}' width=250 height=250>
            </div>
            `

            $("#game").html(status);
            unansweredQuestions++;

          }

        //After 4 seconds, either next question or results screen will show up.

        setTimeout(function() {
            
          $("#game").empty();
          $(".question").first().show().removeClass("question").addClass("question_asked");
          resetSeconds();
  
            if (correctAnswers + incorrectAnswers + unansweredQuestions === 10) {
                    
              results();
          
            };
  
        }, 4000);


      }
    
     //This is the function that shows the results screen after all questions have been displayed to the user.

      function results () {
        stop();

        $("#time").empty();
        $("#correctAnswers").text("Correct Answers: " + correctAnswers);
        $("#incorrectAnswers").text("Incorrect Answers: " + incorrectAnswers);
        $("#unansweredQuestions").text("Unanswered Questions: " + unansweredQuestions);
        $("#results").show();
      };

      
    //When the start button is clicked, the startGame function will run.
      button.onclick = function(event) {

      startGame();
        
    };

    //Each time a span is clicked, the code will analyze which class is associated to that span. Then, the questionSttus function will run based on the spanClass.

    $("span").click(function(){

      var spanClass = $(this).attr("class");
      console.log(spanClass);
      questionStatus(spanClass);
  

    })

    //If the user presses Start Over, the "question_asked" class will be removed from all elements and the class "question" will be restored. Then, the startGame function will run.


    $("#startAgain").on("click", function(){
      
      $(".question_asked").addClass("question").hide();
      $(".question").removeClass("question_asked");
      $("#results").hide();


      startGame();




    })

    
    });