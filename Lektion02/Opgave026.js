
let subject = "()(()))";

let testBalance = function (string) {
    let tempArray = [];
    let finishArray = [];
    for (let i = 0; i < string.length; i++) {
        tempArray[i] = string[i];
    }
    tempArray.forEach(element => {
        if (element == "(") {
            finishArray.push(element);
        }
        else if (element == "{") {
            finishArray.push(element);
        }
        else if (element == ")") {
            finishArray.pop(element);
        }
        else if (element == "}") {
            finishArray.pop(element);
        }
    });
    return finishArray.length == 0;
}


console.log(testBalance(subject));


