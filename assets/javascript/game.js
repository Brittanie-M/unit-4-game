$( document ).ready (function() {
    var Random = Math.floor(Math.random() * 127 + 35)
    
    $('#computerGuess').text(Random);
   
    var num1 = Math.floor(Math.random() * 12 + 1)
    var num2 = Math.floor(Math.random() * 12 + 1)
    var num3 = Math.floor(Math.random() * 12 + 1)
    var num4 = Math.floor(Math.random() * 12 + 1)
    
    var userTotal = 0; 
    var wins = 0;
    var losses = 0;

  $('#wins').text(wins);
  $('#losses').text(losses);
  
  function reset() {
        Random = Math.floor(Math.random() * 127 + 35);
        console.log(Random)
        $('#computerGuess').text(Random);
        num1 = Math.floor(Math.random() * 12 + 1);
        num2 = Math.floor(Math.random() * 12 + 1);
        num3 = Math.floor(Math.random() * 12 + 1);
        num4 = Math.floor(Math.random() * 12 + 1);
        userTotal = 0;
        $('#total').text(userTotal);
        } 
  
  function yay(){
  alert("You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  
  function loser(){
  alert ("You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  
    $('#one').on ('click', function() {
      userTotal = userTotal + num1;
      console.log("New userScore = " + userTotal);
      $('#total').text(userTotal); 
            
          if (userTotal == Random){
            yay();
          }
          else if (userTotal > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function() {
      userTotal = userTotal + num2;
      console.log("New userScore= " + userTotal);
      $('#total').text(userTotal); 
          if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function() {
      userTotal = userTotal + num3;
      console.log("New userScore= " + userTotal);
      $('#total').text(userTotal);
  
            if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function() {
      userTotal = userTotal + num4;
      console.log("New userScore= " + userTotal);
      $('#total').text(userTotal); 
        
            if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 
  
  