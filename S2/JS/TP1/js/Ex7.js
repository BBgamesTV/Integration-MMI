function convertirTemps(temps) {
    let parties = temps.split(/[hms]/);
    let heures = parseInt(parties[0]);
    let minutes = parseInt(parties[1]);
    let secondes = parseInt(parties[2]);
    return { heures, minutes, secondes };
}
  
let temps = "3h30m40s";
let resultat = convertirTemps(temps);
h = resultat.heures; // affiche 3
m = resultat.minutes; // affiche 30
s = resultat.secondes; // affiche 40

function dureeTosecond(h, m, s) {
    var totalSeconds = (h * 3600) + (m * 60) + s;
    return totalSeconds;
}

let resultat2 = dureeTosecond(h,m,s);
console.log(resultat2);
document.write(resultat2);