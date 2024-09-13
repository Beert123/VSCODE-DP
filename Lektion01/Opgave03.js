// bubbleSort.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j+1];
            list[j+1] = temp;
        }
    }
}
console.log(list.toString()); // => 0,1,2,4,7,8,9,13,16

let l = 0;
let r = list.length -1;
let target = 4;
while(l <= r){
    let mid = Math.floor((l + r)/2);
    if(list[mid] === target){
        console.log(mid)
        break;
    }
    else if(list[mid] > target){
        r = mid - 1;
    }
    else if(list[mid] < target){
        l = mid + 1;
    }
    else{
        console.log("Element not in list")
        break;
    }
}



