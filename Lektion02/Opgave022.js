
let bubblesort = function (list) {
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (list[j] > list[j + 1]) {
                swap(list, j);
            }
        }
    }
}
let swap = function (list, j) {
    let temp = list[j];
    list[j] = list[j + 1];
    list[j + 1] = temp;
}

let myList = [5, 3, 1, 2, 6, 4, 56];
bubblesort(myList);
console.log(myList);


