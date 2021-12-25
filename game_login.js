function addUser() {
    player1_name  = document.getElementById("player_1").value;
    player2_name  = document.getElementById("player_2").value;
    
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    
    window.location = "index (2).html";
    }

function send() {
number1 = document.getElementById("number_1").value;
number2 = document.getElementById("number_2").value;
actual_answer  = parseInt(number1) * parseInt(number2);

var row

question_number= "<h4>" + number1 + "X" + number2 +"<h4>";
input_box = "<br><br> <input type='text' id='input_check_box'> ";
check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML; row ; 
document.getElementById("number_1").value = "" ; 
document.getElementById("number_2").value = "" ; 
question_turn = "player1";
answer_turn = "player2";
}
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player_1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = update_player2_score;  
        }
    }

    if(question_turn == "player_1")
    {
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn -" + player2_name
    }
    else
    {
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }


if(answer_turn == "player_1")
{
    answer_turn = "player_2";
    document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;
}
else
{
    answer_turn = "player_1";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
}

document.getElementById("output").innerHTML = "";
}