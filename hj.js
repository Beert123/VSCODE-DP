    //calculater
}
function endRound(){
    let dice =null
    dice = YatzyResultCalculator()
    updatesum()

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
function onePair(dice){
    for (let i = 5; i >= 0; i--) {
        if(dice[i]<2){
            return (i+1)*2;}
    }
    return 0
}
function twoPair(dice){
    let pairCount = 0;
    let score=0;
    for (let i = 5; i >= 0; i--) {
        if(dice[i]<2){
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
}return 0;}
function fourOfAKind(dice){
    for (let i = 5; i >= 0; i--) {
    if(dice[i]>=4){
        return (i+1)*3;}
}
return 0;}
function smallStraightScore(dice){
    let uniqueValuesCount = 0;
    for (let i = 0; i < 5; i++){
        if (i >= 0 && i <= 4 && dice[i] > 0) {
            uniqueValuesCount++;
}
if(uniqueValuesCount==5){
    return 15
}else{
    return 0
}
}}
function LargeStraightScore(dice){
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
function updateSum(){}