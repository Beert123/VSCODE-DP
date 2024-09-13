

const str = "hej med hej dig hej"
const strCopy = str.split(' ');

console.log(strCopy)

let map = {};
for (let ord of strCopy) {
    if (ord in map) {
        map[ord]++;
    } else {
        map[ord] = 1;
    }
}
console.log(map)



