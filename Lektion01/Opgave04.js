
let totalFlet = function(arr1, arr2){
let index1 = 0;
let index2 = 0;
let sortetArray =[];

while(index1 < arr1.length && index2 < arr2.length){
    if(arr1[index1] <= arr2[index2]){
        sortetArray.push(aar1[index1])
        index1++;
    }
    else{
        sortetArray.push(aar2[index2])
        index2++;
    }
}
while(index1 < arr1.length){
    sortetArray.push(arr1[index1])
    index1++;
}
while(index2 < arr2.length){
    sortetArray.push(arr2[index2])
    index2++;
}
return sortetArray;
}

let aar1 = [1,2,3,8,9]
let aar2 = [4,5,6,7]

console.log(totalFlet(aar1,aar2))
