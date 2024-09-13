const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let body = "<h1 style = 'color:red'>MOUNTAINS</h1> <table id = grid-container> <tr id = item-header> <th> name </th> <th> height </th> <th> place </th> </tr>"
for(let p of MOUNTAINS){
    body += "<tr> <td id = grid-item>" + p.name +"</td> <td id = grid-item>" + p.height + "</td> <td id = grid-item>" + p.place + "</td> </tr>";
}
body += "</table>"
document.body.innerHTML = body;
