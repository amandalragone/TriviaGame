$(document).ready(function() {

    var seconds = 30;
    var intervalId
    setTimeout(fourSeconds, 1000 * 4);
    
    
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

      function timeUp() {
          alert("Time's up!");
      };
    

    
    
    });