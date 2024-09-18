import { ones, twos, threes, fours, fives, sixes, onePair, twoPairs, threeSame, fourSame, fullHouse, smallStraight,largeStraight, chance, yatzy } from './ResultatLogik.js';
let diceValues = [1,1,1,1,1]
let holdValues = [false, false, false, false, false]
let rollCount = 3;
let værdiTyper = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
//ruller terningerne og giver dem nye tilfældige værdier
function rollDice() {
    for (i = 0; i < diceValues.length; i++) {
        if (holdValues[i] === false) {
            let roll = Math.floor(Math.random() * 6) + 1;
            diceValues[i] = roll;
        }
    }
    rollCount--;
    updateRollCountDisplay();
    updateScore();
    checkRollButtonState(); // Opdater knapens tilstand
}

//opdaterer variablerne i html
function showDice() {
    for (i = 0; i < diceValues.length; i++) {
        diceElement = document.getElementById('t' + (i +1));
        diceElement.textContent = diceValues[i];
      }  
}
//metodekald for "Roll" knappen
function rollAndShow() {
        if (rollCount > 0) {
            rollDice();
            showDice();
        }
        checkRollButtonState(); // Opdater knapens tilstand
    }

function updateVærdiType(i) {
    værdiTyper[i] = true; // Marker denne type som valgt
}
    
//updaterer labelen i html
function updateRollCountDisplay() {
    let kastLabel = document.getElementById('antalKast');
    kastLabel.textContent = rollCount;
}
function checkRollButtonState() {
    let rollButton = document.getElementById('Roll');
    if (rollCount === 0) {
        rollButton.disabled = true;
    } else {
        rollButton.disabled = false;
    }
    }
//resetter game når den rollcount bliver 0
//TODO tror vi skal sørge for at den først kan resette efter der er blevet valgt en type værdi
function resetGame() {
    diceValues = [0, 0, 0, 0, 0];
    holdValues = [false, false, false, false, false];
    rollCount = 3;
    updateRollCountDisplay();
    showDice();
    updateScore();
    checkRollButtonState();

    for (let i = 0; i < diceValues.length; i++) {
        let diceElement = document.getElementById('t' + (i + 1));
        diceElement.style.backgroundColor = "#ffffe0";
    }

    vælgVærditype(); // Genaktiver event listeners for værdikategorierne
     // Tjek for at afslutte spillet
}
function checkGameEnd() {
    if (værdiTyper.every(v => v === true)) {
        alert('Tillykke du var bare pisse god! Tryk ok for at starte et nyt');
        location.reload();
    }
}
//gør det muligt at holde en terning
function holdDice(index) {
    let diceElement = document.getElementById('t' + (index + 1));
    let diceValue = parseInt(diceElement.textContent, 10);
    if (rollCount > 0 && diceValue !== 0) { // Kun tillad at holde terninger hvis rollCount > 0
        holdValues[index] = true;
        diceElement.style.backgroundColor = holdValues[index] ? "lightgray" : "white";
    }
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Roll').addEventListener('click', rollAndShow);

    // Add event listeners for dice clicks
    for (let i = 0; i < diceValues.length; i++) {
        document.getElementById('t' + (i + 1)).addEventListener('click', function() {
            holdDice(i);
        });
    }

    vælgVærditype(); // Add event listeners for score selection
});

function vælgVærditype(){
    let inputFields = document.querySelectorAll('table input[type="number"]');
    inputFields.forEach((input, i) => {
        if (!værdiTyper[i]) {
            input.style.cursor = "pointer";
            input.disabled = false; // Gør inputfelterne klikbare
            input.addEventListener('click', function() {
                if (!værdiTyper[i]) {
                    updateVærdiType(i);
                    input.style.backgroundColor = "lightgray";
                    input.setAttribute('disabled', '')
                    resetGame();
                }
            }, 
            { once: true });
        }
    });
}


function removeValueTypeListeners() {
    let inputFields = document.querySelectorAll('table input[type="number"]');
    inputFields.forEach((input) => {
        // Fjern event listeners
        let newInput = document.createElement('input');
        newInput.type = 'number';
        newInput.className = input.className;
        newInput.id = input.id;
        newInput.value = input.value;
        input.parentNode.replaceChild(newInput, input);
    });
}
function valueTypeClickHandler(index) {
    if (!værdiTyper[index]) { // Hvis ikke allerede valgt
        updateVærdiType(index);
        let input = document.querySelectorAll('table input[type="number"]')[index];
        input.style.backgroundColor = "lightgray"; // Gør det tydeligt, at den er låst
        resetGame(); // Genstart spillet efter en værditype er valgt
    }
}

//viser scoren for de forskellige mulige scorere
function updateScore() {
    let counts = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < diceValues.length; i++) {
        counts[diceValues[i] - 1]++;
    }
    if(!værdiTyper[0]) document.getElementById('ones').value = ones(counts);
    if(!værdiTyper[1]) document.getElementById('twos').value = twos(counts);
    if(!værdiTyper[2]) document.getElementById('threes').value = threes(counts);
    if(!værdiTyper[3]) document.getElementById('fours').value = fours(counts);
    if(!værdiTyper[4]) document.getElementById('fives').value = fives(counts)
    if(!værdiTyper[5]) document.getElementById('sixes').value = sixes(counts);
    if(!værdiTyper[6]) document.getElementById('onePair').value = onePair(counts);;
    if(!værdiTyper[7]) document.getElementById('twoPairs').value = twoPairs(counts);;
    if(!værdiTyper[8]) document.getElementById('threeSame').value = threeSame(counts);
    if(!værdiTyper[9]) document.getElementById('fourSame').value = fourSame(counts);
    if(!værdiTyper[10]) document.getElementById('fullHouse').value = fullHouse(counts);
    if(!værdiTyper[11]) document.getElementById('smallStraight').value = smallStraight(counts);
    if(!værdiTyper[12]) document.getElementById('largeStraight').value = largeStraight(counts);
    if(!værdiTyper[13]) document.getElementById('chance').value = chance(counts);
    if(!værdiTyper[14]) document.getElementById('yatzy').value = yatzy(counts);
    calculateSumTotalBonus();
    setTimeout(checkGameEnd, 0);
}
document.getElementById('Roll').addEventListener('click', rollAndShow);

for (let i = 0; i < diceValues.length; i++) {
    document.getElementById('t' + (i + 1)).addEventListener('click', function() {
        holdDice(i);
    });
}

    function calculateSumTotalBonus(){
        let inputFields = document.querySelectorAll('table input[type="number"]');
        let sum = 0;
        let total = 0;
        for (let i = 0; i <= 5; i++) {
            if(værdiTyper[i]){
                sum += parseInt(inputFields[i].value, 10) || 0;}
        }
    document.getElementById('sum').value = sum;
    document.getElementById('bonus').value = sum >= 63 ? 50 : 0;
    for (let i = 0; i <= 15; i++) {
        if(værdiTyper[i]){
            total += parseInt(inputFields[i].value, 10) || 0}
    }
    document.getElementById('total').value = total;
    }

    export { ones, twos, threes, fours, fives, sixes, onePair, twoPairs, threeSame, fourSame, fullHouse, smallStraight, largeStraight, yatzy };





