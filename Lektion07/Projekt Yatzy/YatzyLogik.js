let diceValues = [1,1,1,1,1]
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
function updateRollCount(){
    diceRolls--;
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
        diceElement.style.backgroundColor = "red"
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

let kastTilbage = 3
function antalKast(){
    if(kastTilbage != 0){
    button.addEventListener('click', function(){
        kast()
        })
    }
}
function kast(){
    if(kastTilbage == 1){
        button.disabled = true
    }
    if (kastTilbage >= 0){
    kastTilbage--;
    document.getElementById('antalKast').innerText = kastTilbage
    }
}
antalKast();
    

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

import { fullHouse } from "./ResultatLogik";

import { chanceScore } from "./ResultatLogik";

import { yatzyScore } from "./ResultatLogik";



function showAlertEndGame() {
    alert('Do you want to start a new game?')
}

