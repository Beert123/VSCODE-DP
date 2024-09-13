let list = [1, 2, 4, 6, 3, 7];

list.max = function () {
    let maxElement = 0;
    this.forEach(element => {
        if (element > maxElement) {
            maxElement = element;
        }
    });
    return maxElement;
}
console.log(list.max());

list.contains = function (element) {
    return this.includes(element);
}

console.log(list.contains(0));

list.sum = function () {
    let sum = 0;
    this.forEach(element => {
        sum += element
    });
    return sum;
}
console.log(list.sum());