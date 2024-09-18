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
    export { ones, twos, threes, fours, fives, sixes, onePair, twoPairs, threeSame, fourSame, fullHouse, smallStraight,largeStraight, chance, yatzy };