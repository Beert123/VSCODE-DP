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