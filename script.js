var timer= 10;
var score=0;
var hitRn= Math.floor(Math.random()*10);

function increaseScore(){
    document.querySelector('#scoreVal').textContent = score;
    score+=10;
}

function getNewHit(){
    hitRn= Math.floor(Math.random()*10)
    document.querySelector('#hitVal').textContent = hitRn;
}

function runTimer(){

    var timeInt = setInterval(function(){
        
        if(timer>=0){
            document.querySelector('#timerVal').innerHTML = timer;
            timer--;
        }else{
            clearInterval(timeInt);
            document.querySelector('#pbtm').innerHTML = `<div id="final"><h1 id="over">Game Over</h1>  <h2 id="over">Your Score is ${score-10}</h2></div>`;
            // alert("Game Over");
        }

    },1000);
    
}

function makeBubble(){
    var cltr='';

    for(var i=1;i<=200;i++){
        var rn= Math.floor(Math.random()*10);
        cltr += ` <div class="bubble"> ${rn}</div>`;
    }
    
    document.querySelector('#pbtm').innerHTML = cltr;
}


document.querySelector('#pbtm').addEventListener('click',function(details){
    var ClickedNo = Number(details.target.textContent);
    // console.log(ClickedNo);
    if(hitRn==ClickedNo){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    
})



getNewHit();
runTimer();
increaseScore();
makeBubble();