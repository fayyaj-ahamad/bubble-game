let gameStart = document.querySelector("button");
var hitrnNumber = 0;
var timer = 60;
let scroe = 0;

// make bubble code 
function makeBubble () {
    var clutter = "";
    for(let i=1; i<=168; i++){
        let randomNumber = Math.floor(Math.random()*10);
        clutter += `<div id ="typing-bubble">${randomNumber}</div>`;
    }
    document.querySelector("#typing-panel").innerHTML = clutter;

}

// timer code 

const runTimer = () =>{
        let clearTimer = setInterval(()=>{
        if(timer >0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(clearTimer);
            document.querySelector("#timer").textContent = "";
            document.querySelector("#hit").textContent = "";
            document.querySelector("#score").textContent = "";
            document.querySelector("#typing-panel").innerHTML = `<h1> Game Over & <span>Your Score is ${scroe} </span> </h1>`;
            document.querySelector("button").style.display = "block";
            
        }

    },1000);

}


let getNewHit = () =>{
    hitrnNumber =  Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitrnNumber;
}


let increaseScore = () =>{
    scroe += 2;
    document.querySelector("#score").textContent = scroe;
}

document.querySelector("#typing-panel").addEventListener("click",function(e){
    let clickedNumber = Number(e.target.textContent);
    if(clickedNumber === hitrnNumber){
        getNewHit();
        makeBubble();
        increaseScore();
    }

})

gameStart.addEventListener("click",function(){
    window.location.reload();
    runTimer();
})

makeBubble();
getNewHit();
runTimer();
