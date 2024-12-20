const samsStatus = "Sam is good at codingschool"

//! Document öffnen
document.open();

// * "Sam is bad at school" wird ausgegeben
const myVar = samsStatus.replace("good at coding", "bad at ");
document.write(`<p>${myVar}</p>`);

// * "Sam is good at school" wird ausgegeben
const myVar2 = samsStatus.replace("coding", "");
document.write(`<p>${myVar2}</p>`);

// * "Sam is good at tennis" wird ausgegeben
const myVar3 = samsStatus.replace("codingschool", "tennis");
document.write(`<p>${myVar3}</p>`);

//! Document schließen
document.close();