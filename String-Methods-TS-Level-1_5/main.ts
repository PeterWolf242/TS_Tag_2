const whereIsSusi = "Susi is back from codingschool";

//! Document öffnen
document.open();

const myVar = whereIsSusi.substring(0, 5);

// * "Susi" wird ausgegeben
document.write(`<p>${myVar}</p>`);

const myVar2 = whereIsSusi.substring(5, 7);

// * "is" wird ausgegeben
document.write(`<p>${myVar2}</p>`);

const myVar3 = whereIsSusi.substring(24);

// * "school" wird ausgegeben
document.write(`<p>${myVar3}</p>`);

const myVar4 = whereIsSusi.substring(24);

// * "Susi is school" wird ausgegeben
const myVar5 = whereIsSusi.substring(0, 7) + " " + whereIsSusi.substring(24);

// * "school" wird ausgegeben
document.write(`<p>${myVar5}</p>`);
console.log(myVar5);

//! Document schließen
document.close();