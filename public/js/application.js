function Player(playername, playertrack, playerwin) {
    this.player = playername;
    this.track = playertrack;
    this.win = playerwin

}

function Game(player1, player2) {
    this.start_time = $.now();
    this.end_time = undefined;
    this.player1 = player1
    this.player2 = player2

};


Game.prototype.start = function() {
    $('#start_button').click(function() {
        Game.onKeyUp;
    });
}

Game.prototype.reset = function() {
    $('#reset_button').on("click", function() {
        location.reload();
        $('#reset_button').unbind('keyup');
    });

}

Game.prototype.onKeyUp = function() {
    if (event.which == 87) {
        if ($(this.player1.track.find('td:nth-child(1)')).hasClass('active')) {
            this.player1.makeMove();
            this.player1.finished();
            this.ended();
        } else {
            this.player1.makeMove();
        }
    }
    if (event.which == 13) {
        if ($(this.player2.track.find('td:nth-child(1)')).hasClass('active')) {
            this.player2.makeMove();
            this.player2.finished();
            this.ended();

        } else {
            this.player2.makeMove();
        }
    }
}



Player.prototype.makeMove = function() {
    console.log(this.track.selector)
    if ($(this.track.find('td:nth-child(1)')).hasClass('active')) {
        this.updatePlayer();
    } else {
        this.updatePlayer();
    }
}

Player.prototype.finished = function() {
    document.getElementById(this.win).innerHTML = "You win!";
    $("#start_button").unbind('keyup');
}
Game.prototype.ended = function() {
    var end_time = $.now();
    var total_time = end_time - this.start_time;
    var game_id = $("#hidden_game_id").val();
    $.post("/stats", {
        id: game_id,
        time: total_time
    });
}


Player.prototype.updatePlayer = function() {
    var current_cell = $(this.track).find('.active');
    console.log(this.track)
    console.log(current_cell)
    $(current_cell).next().addClass('active');
    $(current_cell).removeClass('active');
};






$(document).ready(function() {
    var player_name_1 = $(document).find('#name1').html().replace(':', '');
    var player_name_2 = $(document).find('#name2').html().replace(':', '');

    var player1 = new Player(player_name_1, $('#player1_strip'), "player1_win");
    var player2 = new Player(player_name_2, $('#player2_strip'), "player2_win");

    var game = new Game(player1, player2);

    $(document).on('keyup', function(event) {
        game.onKeyUp(event.which);

    });

});
// OLD CODE







// function playGame() {
//   var start_time = $.now();
//   console.log(start_time);
//   $('#start_button').keyup(function(event){
//     if(event.which == 87)
//     {
//       makeMove("#player1_strip", "player1_win");
//     }
//     if(event.which == 13)
//     {
//       makeMove("#player2_strip", "player2_win");
//     }
//   });

//   function updatePlayer(elementId){
//     var current_cell = $(elementId).find('.active');
//     $(current_cell).next().addClass('active');
//     $(current_cell).removeClass('active');
//   };

//   function makeMove(elementId, winCell){
//     if($("" + elementId + " " + "td:nth-last-child(2)").hasClass('active'))
//     {
//       updatePlayer(elementId);
//       document.getElementById(winCell).innerHTML = "You win!";
//       var end_time = $.now();
//       var total_time = end_time - start_time;
//       var game_id = $("#hidden_game_id").val();
//       $.post("/stats", {id: game_id, time: total_time});
//       $("#start_button").unbind('keyup');
//     }
//     else
//     {
//     updatePlayer(elementId);
//     }
//   };




// };


// function playGame() {
//   var start_time = $.now();
//      console.log(start_time);



//   $('#start_button').keyup(function(event){
//     if(event.which == 87)
//     {
//       makeMove("#player1_strip", "player1_win");
//     }
//     if(event.which == 13)
//     {
//       makeMove("#player2_strip", "player2_win");
//     }
//   });

//   function updatePlayer(elementId){
//     var current_cell = $(elementId).find('.active');
//     $(current_cell).next().addClass('active');
//     $(current_cell).removeClass('active');
//   };

//   function makeMove(elementId, winCell){
//     if($("" + elementId + " " + "td:nth-last-child(2)").hasClass('active'))
//     {
//       updatePlayer(elementId);
//       document.getElementById(winCell).innerHTML = "You win!";
//       var end_time = $.now();
//       var total_time = end_time - start_time;
//       var game_id = $("#hidden_game_id").val();
//       $.post("/stats", {id: game_id, time: total_time});
//       $("#start_button").unbind('keyup');
//     }
//     else
//     {
//     updatePlayer(elementId);
//     }
//   };




// }