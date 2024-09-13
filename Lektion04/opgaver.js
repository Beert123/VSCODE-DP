// Opgave 4.1
let pRoed = document.querySelectorAll('p')
for (let p of pRoed) {
    p.style.color = "red";
}
//Opgave4.2
let pBrun = document.querySelectorAll('h1');
for (let b of pBrun){
    b.nextElementSibling.nextElementSibling.style.color = "blue";
}
//Opgave4.3
let liGraa = document.querySelectorAll('li');
let count = 0;
for(let li of liGraa){
    if(count % 2 ==0){
        li.style.backgroundColor ='gray';
    }
    count++;
}
//Opgave4.4
let hUnder = document.querySelectorAll('h1');
for(let p of hUnder){
    p.nextElementSibling.innerHTML = '<h2>' + p.nextElementSibling.innerHTML + '</h2>'
}
//Opgave4.5
let link = 'link: ';
let newid = 0;
let overskrift = document.querySelectorAll('h1');
for(let p of overskrift){
    newid++;
    p.id = 'id' + newid;
}
for(let p of overskrift){
    link += '<a href ="#' + p.id + ' ">  ' + p.id + ' </a>'
}
document.body.innerHTML = link + document.body.innerHTML;
//Opgave4.6