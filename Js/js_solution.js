var level=1;
var idx = 0;
var title=document.getElementById("title");
var green=document.getElementById("green");
var red=document.getElementById("red");
var yellow=document.getElementById("yellow");
var blue=document.getElementById("blue");

//Audio
var redAudio = new Audio('C:\\Users\\user\\Documents\\SEFactory\\FSW_Files\\Js_challenge\\Js\\sounds\\red.mp3');
var greenAudio = new Audio('C:\\Users\\user\\Documents\\SEFactory\\FSW_Files\\Js_challenge\\Js\\sounds\\green.mp3');
var yellowAudio = new Audio('C:\\Users\\user\\Documents\\SEFactory\\FSW_Files\\Js_challenge\\Js\\sounds\\yellow.mp3');
var blueAudio = new Audio('C:\\Users\\user\\Documents\\SEFactory\\FSW_Files\\Js_challenge\\Js\\sounds\\blue.mp3');
var wrongAudio = new Audio('C:\\Users\\user\\Documents\\SEFactory\\FSW_Files\\Js_challenge\\Js\\sounds\\wrong.mp3')
var sounds = [0, greenAudio, redAudio, yellowAudio, blueAudio];
var order=[];
var clicked=0;

document.addEventListener("keypress", function(){
    title.textContent=`Level ${level}`;
    //Enable mouse event listeners
    green.addEventListener("click",greenClick);
    red.addEventListener("click",redClick);
    blue.addEventListener("click",blueClick);
    yellow.addEventListener("click",yellowClick);
    play();
});

function greenClick(){
    green.classList.add("pressed");
    setTimeout(function(){
        green.classList.remove("pressed");
    },100);
    clicked=1;
    checkInput();
}
function redClick(){
    red.classList.add("pressed");
    setTimeout(function(){
        red.classList.remove("pressed");
    },100);
    clicked=2;
    checkInput();
}
function yellowClick(){
    yellow.classList.add("pressed");
    setTimeout(function(){
        yellow.classList.remove("pressed");
    },100);
    clicked=3;
    checkInput();
}
function blueClick(){
    blue.classList.add("pressed");
    setTimeout(function(){
        blue.classList.remove("pressed");
    },100);
    clicked=4;
    checkInput();
}

function checkInput(){ 
    if (clicked!=order[idx]){
        wrongAudio.play();
        title.textContent="Game over, press any key to restart.";
        //Disable mouse event listeners
        green.removeEventListener("click",greenClick);
        red.removeEventListener("click",redClick);
        blue.removeEventListener("click",blueClick);
        yellow.removeEventListener("click",yellowClick);
        resetGame();
    }
    else{
        sounds[clicked].play();
        idx++;
        if(idx == level){
            level++;
            idx = 0;
            setTimeout(function(){play()}, 1000);
        }
    }
}

function resetGame(){
    level = 1;
    idx = 0;
    order = [];
}

var rand_color=0;
function play(){
    title.textContent=`Level ${level}`;
    rand_color=Math.floor(Math.random()*4)+1;
    order.push(rand_color);

    if (rand_color==1){
        green.style.opacity=0.1;
        greenAudio.play()
        setTimeout(function() {
            green.style.opacity=1;
        }, 200);
    }
    else if (rand_color==2){
        red.style.opacity=0.1;
        redAudio.play()
        setTimeout(function() {
            red.style.opacity=1;
        }, 200);
    }
    else if (rand_color==3){
        yellow.style.opacity=0.1;
        yellowAudio.play()
        setTimeout(function() {
            yellow.style.opacity=1;
        }, 200);
    }
    else if (rand_color==4){
        blue.style.opacity=0.1;
        blueAudio.play()
        setTimeout(function() {
            blue.style.opacity=1;
        }, 200);
    }
}
