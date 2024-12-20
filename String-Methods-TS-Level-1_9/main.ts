const infoAboutSam = "Sam is going to codingschool";
const susi = "Susi";
const and = "and";

//! Document öffnen
document.open();

// * "Sam is going to school and to the movie theater" wird ausgegeben
const myVar = infoAboutSam.replace("codingschool", "school ");
const newMyVar = myVar.concat(and + " to the movie theater");
document.write(`<p>${newMyVar}</p>`);

// * "Sam is going to the movie theater" wird ausgegeben
const myVar2 = infoAboutSam.replace("codingschool", "the movie theater");
document.write(`<p>${myVar2}</p>`);

// * "Susi and Sam are going to school" wird ausgegeben
let myVar4 = infoAboutSam.replace("is", "are ");
let myVar5 = susi.concat(` ${and} ${myVar4}`);
let myVar3 = myVar5.replace("codingschool", "school ");
document.write(`<p>${myVar3}</p>`);

// * "Susi and Sam are going to gym and to the movie theater" wird ausgegeben
let myVar6 = myVar5.replace("codingschool", "gym and to the movie theater");
document.write(`<p>${myVar6}</p>`);

// * "Susi is going to school and to the movie theater" wird ausgegeben
let myVar7 = myVar6.replace("and Sam are", "is");
let myVar8 = myVar7.replace("gym", "school");
document.write(`<p>${myVar8}</p>`);
//! Document schließen
document.close();