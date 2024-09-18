export
function onePair(dice){
    for (let i = 5; i >= 0; i--) {
        if(dice[i]>=2){
            return (i+1)*2;}
    }
    return 0
}

export
function fourOfAKind(dice){
    for (let i = 5; i >= 0; i--) {
    if(dice[i]>=4){
        return (i+1)*4;}
}
return 0
}

export
function smallStraightScore(dice){
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

export
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

export
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

export
function chanceScore(dice) {
    let chanceScore = 0;

    for (let i = 0; i < dice.length; i++) {
        chanceScore += (i + 1) * dice[i];
    }
    return chanceScore;
}

export
function yatzyScore(dice) {
    for (let i = 0; i < dice.length; i++) {
        if (dice[i] == 5) {
            return 50;
        }
    }
    return 0;
}