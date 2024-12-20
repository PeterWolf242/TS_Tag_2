const whereIsSam = "Sam is going to school";

//! Document öffnen
document.open();

//? "Sam is going to school and to the movie theater" wird ausgegeben

// * "Sam" in Großbuchstaben umwandeln
const myVar = whereIsSam.substring(0, 3);

const myVarUppercase = myVar.toUpperCase();

// * mittleren String "is going to" holen
const myVar2 = whereIsSam.substring(4, 15);

// * letzten String "SCHOOL" holen
const myvar3 = whereIsSam.slice(16);

const myVar4 = (`${myVarUppercase} ${myVar2} ${myvar3}`)
document.write(`<p>${myVar4}</p>`);

// ? sam IS GOING TO school
// * String "Sam" holen und in Großbuchstaben konvertieren
const myVar5 = whereIsSam.substring(0, 3);
const myVar5Lowercase = myVar5.toLowerCase();

// * String "is going to" holen und in Kleinbuchstaben konvertieren
const myVar6 = whereIsSam.substring(4, 15);
const myVar6Uppercase = myVar6.toUpperCase();

const myVar7 = whereIsSam.slice(16);
const myVar8 = (`${myVar5Lowercase} ${myVar6Uppercase} ${myVar7}`);
document.write(`<p>${myVar8}</p>`);

// ? Sam Is Going To School
// const myVar9 = whereIsSam.substring(0, 3);
// console.log(myVar9);
const myVar9 = whereIsSam.replace("Sam is going to school", "Sam Is Going To School")
document.write(`<p>${myVar9}</p>`);

//! Document schließen
document.close();