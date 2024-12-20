const susisStatus = "Susi is going to codingschool";

// * "Susi" wird ausgegeben
console.log(susisStatus.slice(0, 4));

// * "is" wird ausgegeben
console.log(susisStatus.slice(5, 7));

// * "is going to school" wird ausgegeben
console.log(susisStatus.replace("codingschool", "school"));
// * alles vor "is going to codingschool" wird ausgegeben
console.log(susisStatus.slice(5));

// * "school" wird ausgegeben
console.log(susisStatus.slice(-6));

// * "codingschool" wird durch "school" ersetzt
let susisStatus2 = susisStatus.replace("going to codingschool", "going to school");
console.log(susisStatus2);

// * "Susi is school" wird ausgegeben
const susisStatusneu = susisStatus2.slice(0, 7) + " " + susisStatus2.slice(-6);
console.log(susisStatusneu);

const ausgabeHtml = document.querySelector("p");

if (ausgabeHtml != null) {
    ausgabeHtml.innerHTML = susisStatusneu;
    ausgabeHtml.style.margin = "2rem";
    ausgabeHtml.style.color = "#d1114d";
    ausgabeHtml.style.fontSize = "4vw";
}