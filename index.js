let compGuess;
let userGuess = [];
let maxGuess;


function gen_rand(){
    compGuess = Math.floor(Math.random() * 100);
    var audio = new Audio("purrple-cat-wild-strawberry.mp3");
    audio.play();
    audio.loop = true;
}


function easyMode(){
    const display_1 = document.getElementById('game-container-1');

    const display_2 = document.getElementById('game-container-2');
    display_1.style.display = "none";
    display_2.style.display = "block";
    maxGuess = 10;
}


function hardMode(){
    const display_1 = document.getElementById('game-container-1');

    const display_2 = document.getElementById('game-container-2');
    display_1.style.display = "none";
    display_2.style.display = "block";
    maxGuess = 5;
}



function game_logic(){
    
    const userNumber = document.getElementById('userGuess').value;
    userGuess = [...userGuess, userNumber];
    document.getElementById('res2').innerHTML = userGuess;
    document.getElementById('userGuess').value = "";
    document.getElementById('res1').innerHTML = userGuess.length;

    console.log(compGuess);

    if(userGuess.length < maxGuess){
    if(userNumber > compGuess){
        document.getElementById('display-text').innerHTML = "Your guess is high ! 😬";
    }

    if(userNumber < compGuess){
        document.getElementById('display-text').innerHTML = "Your guess is low ! 🙁";
    }

    if(userNumber == compGuess){
        document.getElementById('display-text').innerHTML = "Your guess is correct! 😉";
        document.getElementById('result').innerHTML = "You won ! ";
        var audio = new Audio("insight-578.mp3");
        audio.play();
        document.getElementById('try-again').style.display = "flex";
    }

    }
    else{
        document.getElementById('display-text').style.color = "red";
        document.getElementById('display-text').innerHTML = "You lose ! The correct answer was " + compGuess;
        document.getElementById('userGuess').style.display = "none";
        document.getElementById('try-again').style.display = "flex";
    }
  

}
