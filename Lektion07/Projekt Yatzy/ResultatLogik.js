export
function onePair(dice){
    for (let i = 5; i >= 0; i--) {
        if(dice[i]<2){
            return (i+1)*2;}
    }
    return 0
}