var level=1;
var idx = 0;
var body=$("body");
var title=$("#title");
var green=$("#green");
var red=$("#red");
var yellow=$("#yellow");
var blue=$("#blue");
var order=[];
var clicked=0;

//Audio
var redAudio = new Audio("sounds/red.mp3");
var greenAudio = new Audio('sounds/green.mp3');
var yellowAudio = new Audio('sounds/yellow.mp3');
var blueAudio = new Audio('sounds/blue.mp3');
var wrongAudio = new Audio('sounds/wrong.mp3');
var sounds = [0, greenAudio, redAudio, yellowAudio, blueAudio]; //array of audios used when user loses
var order=[]; //to save order of colors to be clicked
var clicked=0;

$(document).keypress(function() {
    title.text(`Level ${level}`);
    //Enable mouse event listeners
    green.on("click",greenClick);
    red.on("click",redClick);
    blue.on("click",blueClick);
    yellow.on("click",yellowClick);
    play();
});

function greenClick(){
    green.addClass("pressed");
    setTimeout(function(){
        green.removeClass("pressed");
    },100);
    clicked=1;
    checkInput();
}
function redClick(){
    red.addClass("pressed");
    setTimeout(function(){
        red.removeClass("pressed");
    },100);
    clicked=2;
    checkInput();
}
function yellowClick(){
    yellow.addClass("pressed");
    setTimeout(function(){
        yellow.removeClass("pressed");
    },100);
    clicked=3;
    checkInput();
}
function blueClick(){
    blue.addClass("pressed");
    setTimeout(function(){
        blue.removeClass("pressed");
    },100);
    clicked=4;
    checkInput();
}

function checkInput(){ 
    if (clicked!=order[idx]){
        wrongAudio.play();
        body.addClass("red");
        setTimeout(function(){body.removeClass("red")},300);
        title.text("Game over, press any key to restart.");
        //Disable mouse event listeners
        green.unbind("click",greenClick);
        red.unbind("click",redClick);
        blue.unbind("click",blueClick);
        yellow.unbind("click",yellowClick);
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
    title.text(`Level ${level}`);
    rand_color=Math.floor(Math.random()*4)+1;
    order.push(rand_color);

    if (rand_color==1){
        green.css("opacity","0.1"); //fade out then in
        greenAudio.play()
        setTimeout(function() {
            green.css("opacity","1");
        }, 200);
    }
    else if (rand_color==2){
        red.css("opacity","0.1");
        redAudio.play()
        setTimeout(function() {
            red.css("opacity","1");
        }, 200);
    }
    else if (rand_color==3){
        yellow.css("opacity","0.1");
        yellowAudio.play()
        setTimeout(function() {
            yellow.css("opacity","1");
        }, 100);
    }
    else if (rand_color==4){
        blue.css("opacity","0.1");
        blueAudio.play()
        setTimeout(function() {
            blue.css("opacity","1");
        }, 100);
    }
}