const kurzesBeispiel = "Guten Morgen Guten Morgen !";
const langesBeispiel = "Die String-Methoden helfen dir, mit Strings zu arbeitn";

console.log(kurzesBeispiel);

// ? Length

const kurzesBeispielLaenge = kurzesBeispiel.length;

console.log(kurzesBeispielLaenge);

//? IndexOf()
// * Wir suchen im langen Beispiel nach der Stelle and der das Wort "Methode" 

const index = langesBeispiel.indexOf('Methoden');

console.log(index);

// ? .slice
// extrahiert einen teilstring und gibt ihn zurück
// kann mit Startindex oder mit start - und endIndex aufgerufen werden.
const morgen = kurzesBeispiel.slice(6);
console.log(morgen);
const mo = kurzesBeispiel.slice(6, 8);
console.log(mo);

//? .replace
// Replace ersetztt im String das erste Vorkommen des ersten Parameters durch den zweiten Parameter
const gutenAbend = kurzesBeispiel.replace("Morgen", "Abend");
console.log(gutenAbend); // --> "Guten Morgen" --> "Guten Abend"

const gutenAbend2 = kurzesBeispiel.replaceAll("Morgen", "Abend");
console.log(gutenAbend2);

//? .toUpperCase
const gutenMorgenAberSehrLaut = kurzesBeispiel.toUpperCase();
console.log(gutenMorgenAberSehrLaut);

//? .toLowerCase
const gutenMorgenAberSehrKlein = kurzesBeispiel.toLowerCase();
console.log(gutenMorgenAberSehrKlein);

//? concat setzt string zu einem größeren string zusammen
const zusammengesetzterString = kurzesBeispiel.concat(" Das Wetter ist schön.", " Wie geht es Dir ?");
console.log(zusammengesetzterString);

//? Nummer-Methoden
let zahl = 3.135353534543534;
let zahl2 = zahl.toFixed(2);
console.log(zahl2);

// ? DOM - Methoden
const ueberschrift = document.querySelector("h1");
// * an dieser Stelle kann ueberschrift HTMLHeadingElement oder null sein

if (ueberschrift !== null) {

    //* Dieser Block wird nur ausgeführt wenn eine Ueberschrift gefunden wurde
    //* (also wenn die konstante "ueberschrift" nicht null ist)
    //* Typescript weiß deshalb, dass ueberschrift definitiv vom Typ HTMLHeadingElement ist
    //* da diese Stelle im Code sonst nicht erreicht werden konnte

    ueberschrift.innerHTML = "Tag2_Strings 🐺";
    ueberschrift.style.color = "#f7dc2e";
    ueberschrift.style.fontSize = "2rem";
    ueberschrift.style.textTransform = "uppercase";

    ueberschrift.classList.add("testklasse");
} else {
    window.alert("Hey es gibt keine Überschrift")
}
console.log(ueberschrift);

//? .includes
// mit .includes koennen wir pruefen ob ein bestimmter String einen anderen String enthält
console.log("Guten Morgen".includes("Guten")) // true
console.log("Guten Morgen".includes("Abend")) // false
console.log("Guten Morgen".includes("guten")) // false, weil klein statt groß geschrieben