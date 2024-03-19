function nombreOccurrences(mot, lettre) {
    var count = 0;
    for (var i = 0; i < mot.length; i++) {
        if (mot[i] === lettre) {
            count++;
        }
    }
    return count;
}

var motTest = "hello world !";
var lettreTest = "o";
var occurrences = nombreOccurrences(motTest, lettreTest);
document.write(`<br>Le nombre d'occurrences de la lettre '<span>${lettreTest}</span>' dans le mot '<span>${motTest}</span>' est : <span>${occurrences}</span>`);