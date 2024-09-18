let diceValues = [1, 1, 1, 1, 1]
let holdValues = [false, false, false, false, false]

function rollDice() {
    for(i = 0; i < diceValues.length; i++) {
        if(holdValues[i] == false){
        let roll = Math.floor(Math.random()*6) +1
        diceValues[i] = roll
        }
    } 
}

function showDice() {
    for (i = 0; i < diceValues.length; i++) {
        diceElement = document.getElementById('t' + (i +1));
        diceElement.textContent = diceValues[i];
      }  
}

function rollAndShow() {
    rollDice()
    showDice()
}

let kastLabel = document.getElementById('antalKast')
let button = document.querySelector('button')


function holdDice(index) {
    holdValues[index] = !holdValues[index]
    let diceElement = document.getElementById('t' + (index + 1));
    if(holdValues[index]){
        diceElement.style.backgroundColor = "blue"
    } else {
        diceElement.style.backgroundColor = "white"
    }
}
function hold(){
    for(let i = 0; i < holdValues.length; i++){
        let curr = document.getElementById('t' + (i+1))
        curr.addEventListener('click',function(){
            holdDice(i)
        })
    }
}
hold();

antalKast = 0
function antalKast(){
    if(!antalKast == 3){
        antalKast++;

    }else if(antalKast == 3){

        antalKast = 0
    }
}