

const Bertil = { navn: "Bertil", email: "bertil@selmas.dk", tlf: "21957404" };
const Noah = { navn: "Noah", email: "noah@mail.com", tlf: "59203917" };
const Tkvar = { navn: "Tkvar", email: "tkvar@mail.com", tlf: "92999999" };

let peopleArray = [Bertil, Noah];
peopleArray[2] = Tkvar;
console.log(peopleArray.toString());
peopleArray[1] = { navn: "fuck", email: "fuck@selmas.dk", tlf: "92846152" };
console.log(peopleArray.toString());
delete peopleArray[0];
console.log(peopleArray.toString());

