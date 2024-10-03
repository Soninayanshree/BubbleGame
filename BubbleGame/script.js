var hit = 0;
var timer = 60;
var score = 0;
var totalscore;
var highScore = localStorage.getItem("highScore") || 0;

function increaseScore(){
    score += 10;
    totalscore = document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hit = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hit;
}
function runtime(){
    var timeint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timeval").textContent= timer 
        }
        else{
            clearInterval(timeint)
            //for highscore 
            if (score > highScore) {
                highScore = score;
                localStorage.setItem("highScore", highScore);  // Save new high score
            }

            document.querySelector("#panel").innerHTML=`
            <h1 class="go">Game Over</h1>
            <h2 id="highscoreval">High Score :${highScore}</h2>
            <h3>Total Score :${totalscore}</h3>
            <h4 id="restart">Click here to restart</h4>
            `
        }
        document.querySelector("#restart").addEventListener("click",function(){
            window.location.reload();
        })
    },1000)
}
function makeBubble(){
    var clutter =""    
    for(var i = 1; i <= 102 ; i++ ){
        var rn = Math.floor(Math.random()*10);  
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#panel").innerHTML = clutter;
}

document.querySelector("#panel").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hit){
        increaseScore();
        makeBubble()
        getNewHit()
    }
})
runtime()
makeBubble();
// increaseScore();
getNewHit();