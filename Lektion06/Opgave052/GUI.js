import {tilfoejPerson,personer} from "logik.js"

let inputTal = document.getElementById('tal');
let inputTid = document.getElementById('tid');

let newElementTal = document.createElement('label');
newElementTal.textContent = "Navn: ";
inputTal.parentNode.insertBefore(newElementTal, inputTal);

let newElementTid = document.createElement('label');
newElementTid.textContent = "Alder: ";
inputTid.parentNode.insertBefore(newElementTid, inputTid);


let tilfoej = document.querySelector('button');
let liste = document.getElementById('liste');
let table = document.querySelector('table');

tilfoej.onclick = tilfoejPerson(navn, alder);
tilfoej.onclick = updateTable;
addEventListener

function updateTable(){
    personer.forEach(element => {
        table.innerHTML += "<tr> <td>" + person.Navn +"</td> <td>" + person.Alder + "</td> </tr>";
    });
}