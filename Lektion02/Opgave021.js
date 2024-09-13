//opgave2.1
let array = [2, 3, 4, 5, 1, 6, 4, 2, 91];

let maxArray = function (array) {
    let highestNum = array[0];
    array.forEach(element => {
        if (highestNum < element) {
            highestNum = element;

        }
    });
    return highestNum;
}


let test = function (array) {
    let highestNum = array[0];
    for (let i of array) {
        if (highestNum < i) {
            highestNum = i;
        }
    }
    return highestNum;
}
console.log(test(array))


let containsElement = function (array, target) {
    array.forEach(element => {
        if (element === target) {
            return true;
        }
    });
    return false;
}

let sumArray = function (array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}
