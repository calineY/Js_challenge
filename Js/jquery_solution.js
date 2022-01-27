var level=1;
var idx = 0;
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
var sounds = [0, greenAudio, redAudio, yellowAudio, blueAudio];
var order=[];
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



function play(){
    title.textContent=`Level ${level}`;
    rand_color=Math.floor(Math.random()*4)+1;
    order.push(rand_color);
    if (rand_color==1){
        green.css("opacity","0.1");
        setTimeout(function() {
            green.css("opacity","1");
        }, 100);
    }
    else if (rand_color==2){
        red.css("opacity","0.1");
        setTimeout(function() {
            red.css("opacity","1");
        }, 100);
    }
    else if (rand_color==3){
        yellow.css("opacity","0.1");
        setTimeout(function() {
            yellow.css("opacity","1");
        }, 100);
    }
    else if (rand_color==4){
        blue.css("opacity","0.1");
        setTimeout(function() {
            blue.css("opacity","1");
        }, 100);
    }
}