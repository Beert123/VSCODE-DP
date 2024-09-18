let diceValues = [1,1,1,1,1]
let holdValues = [false, false, false, false, false]
let rollCount = 3;

function rollDice() {
    for(i = 0; i < diceValues.length; i++) {
        if(holdValues[i] == false){
        let roll = Math.floor(Math.random()*6) +1
        diceValues[i] = roll
        }
    }
    rollCount--;
    updateRollCountDisplay();
    updateScore();
}

function showDice() {
    for (i = 0; i < diceValues.length; i++) {
        diceElement = document.getElementById('t' + (i +1));
        diceElement.textContent = diceValues[i];
      }  
}

function rollAndShow() {
    if(rollCount === 0) {
        setTimeout(resetGame, 100)
    }
    rollDice()
    showDice()
}

function updateRollCountDisplay() {
    let kastLabel = document.getElementById('antalKast');
    kastLabel.textContent = rollCount;
}

function resetGame() {
    diceValues = [0, 0, 0, 0, 0];
    holdValues = [false, false, false, false, false];
    rollCount = 3;
    updateRollCountDisplay();
    showDice();
    updateScore();
    rollCount = 3;
        for (let i = 0; i < diceValues.length; i++) {
    let diceElement = document.getElementById('t' + (i + 1));
    diceElement.style.backgroundColor = "#ffffe0";   
    }
}

function holdDice(index) {
    holdValues[index] = !holdValues[index];
    let diceElement = document.getElementById('t' + (index + 1));
    diceElement.style.backgroundColor = holdValues[index] ? "blue" : "white";
}

function updateScore() {
    let counts = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < diceValues.length; i++) {
        counts[diceValues[i] - 1]++;
    }
    document.getElementById('ones').value = counts[0] * 1;
    document.getElementById('twos').value = counts[1] * 2;
    document.getElementById('threes').value = counts[2] * 3;
    document.getElementById('fours').value = counts[3] * 4;
    document.getElementById('fives').value = counts[4] * 5;
    document.getElementById('sixes').value = counts[5] * 6;

    let sum = counts[0] * 1 + counts[1] * 2 + counts[2] * 3 + counts[3] * 4 + counts[4] * 5 + counts[5] * 6;
    document.getElementById('sum').value = sum;

}
document.getElementById('Roll').addEventListener('click', rollAndShow);

for (let i = 0; i < diceValues.length; i++) {
    document.getElementById('t' + (i + 1)).addEventListener('click', function() {
        holdDice(i);
    });
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
    if(pairCount==2){
        return score
    }
    return 0;
}

function threeOfAKind(dice){
    for (let i = 5; i >= 0; i--) {
        if(dice[i]>=3){
            return (i+1)*3;}
}
return 0;
}

import { fourOfAKind } from "./ResultatLogik"

import { smallStraightScore } from "./ResultatLogik"

import { LargeStraightScore } from "./ResultatLogik"

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
function chanceScore() {
    let chanceScore = 0;

    for (let i = 0; i < dice.length; i++) {
        chanceScore += (i + 1) * dice[i];
    }

    return chanceScore;
}
function yatzyScore() {
    for (let i = 0; i < dice.length; i++) {
        if (dice[i] == 5) {
            return 50;
        }
    }
    return 0;
}

function showAlertEndGame() {
    alert('Do you want to start a new game?')
}