let diceValues = [1, 1, 1, 1, 1]
let holdValues = [false, false, false, false, false]

function rollDice() {
    alert("Hurra")
    for(i = 0; i < diceValues.length; i++) {
        let roll = Math.floor(Math.random()*6) +1
        diceValues[i] = roll
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

function holdDice() {
    holdValues = true
}