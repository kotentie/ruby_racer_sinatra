$(document).ready(function(){

  $('#start_button').click(playGame());

});

function playGame(){

  $('#start_button').keyup(function(event){
    if(event.which == 87)
    {
      makeMove("#player1_strip", "player1_win");
    }
    if(event.which == 13)
    {
      makeMove("#player2_strip", "player2_win");
    }
  });

  function updatePlayer(elementId){
    var current_cell = $(elementId).find('.active');
   console.log(current_cell);
    $(current_cell).next().addClass('active');
    $(current_cell).removeClass('active');
  };

  function makeMove(elementId, winCell){
    if($("" + elementId + " " + "td:nth-last-child(2)").hasClass('active'))
    {
      updatePlayer(elementId);
      document.getElementById(winCell).innerHTML = "You win!";
      $("#start_button").unbind('keyup');
    }
    else
    {
    updatePlayer(elementId);
    }
  };

  $('#reset_button').on("click", function(){
    location.reload();
    $('#reset_button').unbind('keyup');
  });
};