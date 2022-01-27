var level=1;
var title=document.getElementById("title");
var green=document.getElementById("green");
var red=document.getElementById("red");
var yellow=document.getElementById("yellow");
var blue=document.getElementById("blue");
var order=[];
var clicked=0;

document.addEventListener("keypress", function(){
    title.textContent=`Level ${level}`;
    play();
});

green.addEventListener("click", function(){
    green.classList.add("pressed");
    setTimeout(function(){
        green.classList.remove("pressed");
    },100);
    clicked=1;
    checkInput();
    checkGuesses();
});
red.addEventListener("click", function(){
    red.classList.add("pressed");
    setTimeout(function(){
        red.classList.remove("pressed");
    },100);
    clicked=2;
    checkInput();
    checkGuesses();
});
yellow.addEventListener("click", function(){
    yellow.classList.add("pressed");
    setTimeout(function(){
        yellow.classList.remove("pressed");
    },100);
    clicked=3;
    checkInput();
    checkGuesses();
});
blue.addEventListener("click", function(){
    blue.classList.add("pressed");
    setTimeout(function(){
        blue.classList.remove("pressed");
    },100);
    clicked=4;
    checkInput();
    checkGuesses();
});
var guesses=level;
function checkInput(){ 
    console.log(clicked);
    console.log(order[level-1]);
    if (clicked!=order[level-1]){
    title.textContent="Game over";
    }else{
        level++;
        guesses++;
        title.textContent=`Level ${level}`;
    }
}
function checkGuesses(){
    if (guesses==level){
        play();
    }
}
var rand_color=0;
function play(){
    for(var i=0;i<level;i++){
        rand_color=Math.floor(Math.random()*4)+1;
        order.push(rand_color);
    }
        if (rand_color==1){
            green.style.opacity=0.1;
            setTimeout(function() {
                green.style.opacity=1;
            }, 100);
        }
        else if (rand_color==2){
            red.style.opacity=0.1;
            setTimeout(function() {
                red.style.opacity=1;
            }, 100);
        }
        else if (rand_color==3){
            yellow.style.opacity=0.1;
            setTimeout(function() {
                yellow.style.opacity=1;
            }, 100);
        }
        else if (rand_color==4){
            blue.style.opacity=0.1;
            setTimeout(function() {
                blue.style.opacity=1;
            }, 100);
        }
}
