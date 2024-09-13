
let compare = function (s1, s2) {
    if (s1 > s2) {
        return 1;
    }
    else if (s1 < s2) {
        return -1;
    }
    else {
        return 0;
    }
}

let compareLen = function (s1, s2) {
    if (s1.length > s2.length) {
        return 1;
    }
    else if (s1.length < s2.length) {
        return -1;
    }
    else {
        return 0;
    }
}

let x = "Hej2";
let y = "Tis88";

console.log(compareLen(x, y));

//let compareIgnoreCase = funtion(s1,s2){}
