let inputTal = document.getElementById('tal');
let inputTid = document.getElementById('tid');

let newElementTal = document.createElement('label');
newElementTal.textContent = "Navn: ";
inputTal.parentNode.insertBefore(newElementTal, inputTal);

let newElementTid = document.createElement('label');
newElementTid.textContent = "Alder: ";
inputTid.parentNode.insertBefore(newElementTid, inputTid);


inputTid.onclick = () => inputTid.value = Date.now();
inputTal.onclick = () => inputTal.value = Math.floor(Math.random() * 10);

newElementTid.onclick = () => inputTid.value = Date.now();
newElementTal.onclick = () => inputTal.value = Math.floor(Math.random() * 10);






