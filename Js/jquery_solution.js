var level=1;
var idx = 0;
var title=$("#title");
var green=$("#green");
var red=$("#red");
var yellow=$("#yellow");
var blue=$("#blue");
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
    console.log("working");
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