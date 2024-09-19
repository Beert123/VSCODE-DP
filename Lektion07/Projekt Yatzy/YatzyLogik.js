//import { ones, twos, threes, fours, fives, sixes, onePair, twoPairs, threeSame, fourSame, fullHouse, smallStraight,largeStraight, chance, yatzy } from './ResultatLogik.js';
let diceValues = [1,1,1,1,1]
let holdValues = [false, false, false, false, false]
let rollCount = 3;
let værdiTyper = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]


function rollDice() {
    for (let i = 0; i < diceValues.length; i++) {
        if (holdValues[i] === false) {
            let roll = Math.floor(Math.random() * 6) + 1;
            diceValues[i] = roll;
        }
    }
    rollCount--;
    updateRollCountDisplay();
    updateScore();
    checkRollButtonState();
}


function showDice() {
    for (let i = 0; i < diceValues.length; i++) {
        diceElement = document.getElementById('t' + (i +1));
        diceElement.textContent = diceValues[i];
      }  
}

function rollAndShow() {
        if (rollCount > 0) {
            rollDice();
            showDice();
        }
        checkRollButtonState();
    }

function updateVærdiType(i) {
    værdiTyper[i] = true; 
}
    

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

    vælgVærditype(); 
}
function checkGameEnd() {
    if (værdiTyper.every(v => v === true)) {
        alert('Tillykke du var bare pisse god! Tryk ok for at starte et nyt');
        location.reload();
    }
}

function holdDice(index) {
    let diceElement = document.getElementById('t' + (index + 1));
    let diceValue = parseInt(diceElement.textContent, 10);
    if (rollCount > 0 && diceValue !== 0) { 
        holdValues[index] = true;
        diceElement.style.backgroundColor = holdValues[index] ? "lightgray" : "white";
    }
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Roll').addEventListener('click', rollAndShow);

  
    for (let i = 0; i < diceValues.length; i++) {
        document.getElementById('t' + (i + 1)).addEventListener('click', function() {
            holdDice(i);
        });
    }

    vælgVærditype(); 
});

function vælgVærditype(){
    let inputFields = document.querySelectorAll('table input[type="number"]');
    inputFields.forEach((input, i) => {
        if (!værdiTyper[i]) {
            input.style.cursor = "pointer";
            input.disabled = false; 
            input.addEventListener('click', function() {
                if (!værdiTyper[i]) {
                    updateVærdiType(i);
                    input.style.backgroundColor = "lightgray";
                    input.disabled = true
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

        let newInput = document.createElement('input');
        newInput.type = 'number';
        newInput.className = input.className;
        newInput.id = input.id;
        newInput.value = input.value;
        input.parentNode.replaceChild(newInput, input);
    });
}
function valueTypeClickHandler(index) {
    if (!værdiTyper[index]) {
        updateVærdiType(index);
        let input = document.querySelectorAll('table input[type="number"]')[index];
        input.style.backgroundColor = "lightgray";
        resetGame();
    }
}


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
function ones(counts){
    let score = counts[0] * 1;
    return score;
}
    
function twos(counts){
    let score = counts[1] * 2;
    return score;
}
function threes(counts){
    let score = counts[2] * 3;
    return score;
}
function fours(counts){
    let score = counts[3] * 4;
    return score;
}
function fives(counts){
    let score = counts[4] * 5;
    return score;
}
function sixes(counts){
    let score = counts[5] * 6;
    return score;
}



 function onePair(dice){
    for (let i = 5; i >= 0; i--) {
        if(dice[i]>=2){
            return (i+1)*2;}
    }
        return 0
}
    
 function twoPairs(dice) {
        let pairCount = 0;
        let score = 0;
        for (let i = 5; i >= 0; i--) {
            if (dice[i] >= 2) {
                pairCount++;
                score += (i + 1) * 2;
            }
        }
        if (pairCount == 2) {
            return score;
        }
        return 0;
    }
    
     function threeSame(dice) {
        for (let i = 5; i >= 0; i--) {
            if (dice[i] >= 3) {
                return (i + 1) * 3;
            }
        }
        return 0;
    }
     function fourSame(dice){
        for (let i = 5; i >= 0; i--) {
        if(dice[i]>=4){
            return (i+1)*4;}
    }
    return 0
    }

     function fullHouse(dice){
        for (let i = 0; i < dice.length; i++) {
            if (dice[i] == 3) {
                for (let j = 0; j < dice.length; j++) {
                    if (j != i && dice[j] == 2) {
                        return (i + 1) * 3 + (j + 1) * 2;
                    }
                }
            }
        }
        return 0;
    }

    function smallStraight(dice){
        let uniqueValuesCount = 0;
        for (let i = 0; i < 5; i++){
            if (i >= 0 && i <= 4 && dice[i] > 0) {
                uniqueValuesCount++;
            }
        }
    if(uniqueValuesCount==5){
        return 15
    }else{
        return 0
    }
    }
    
    function largeStraight(dice){
        let uniqueValuesCount = 0;
        for (let i = 1; i <= 5; i++) {
            if (dice[i] > 0) {
                uniqueValuesCount++;
            }
        }
    if (uniqueValuesCount == 5) {
            return 20;
        } else {
            return 0;
        }
    }

    function chance(dice) {
        let chanceScore = 0;
    
        for (let i = 0; i < dice.length; i++) {
            chanceScore += (i + 1) * dice[i];
        }
        return chanceScore;
    }

    function yatzy(dice) {
        for (let i = 0; i < dice.length; i++) {
            if (dice[i] == 5) {
                return 50;
            }
        }
        return 0;
    }

    //calculater
function endRound(){
    if(rollDice=0){
    let dice = null
    dice = YatzyResultCalculator()
    updateEndRound()}
}

function YatzyResultCalculator() {
    let dice = [0,0,0,0,0,0]
    for (let i = 0; i < 5; i++) {
        dice[diceValues - 1]++;
    }
    return dice;
}

function upperSectionScore(eyes, dice){
    return dice[eyes-1] * eyes
}

import { onePair } from "./ResultatLogik"

function twoPair(dice){
    let pairCount = 0;
    let score=0;
    for (let i = 5; i >= 0; i--) {
        if(dice[i]>=2){
            pairCount++;
            score += (i+1)*2;}
    }
    document.getElementById('total').value = total;
    }

    export { ones, twos, threes, fours, fives, sixes, onePair, twoPairs, threeSame, fourSame, fullHouse, smallStraight, largeStraight, yatzy };





