const codeCarteCorrect = "1202"; // Remplacez ceci par le vrai code de carte bleue
var erreurs = 0;

function demanderMotDePasse() {
    var motDePasse = prompt("Veuillez saisir votre code de carte bleue (4 chiffres) :","1202");
    if (motDePasse === codeCarteCorrect) {
        alert("Code correct. Vous pouvez procéder au retrait.");
        document.write('<p style=color:green>Argent Disponible : 1 000 000 €</p><br/>');
    }   else {
            erreurs++;
            if (erreurs < 3) {
                alert("Code incorrect. Veuillez réessayer.");
                demanderMotDePasse(); // Demander à nouveau le mot de passe
            } else {
                alert("Tentatives épuisées. Votre carte est bloquée.");
                document.write('<p style=color:red>Compte Bloqué -> +33 06 01 02 03 04</p><br/>');

        }
    }
}

demanderMotDePasse()

