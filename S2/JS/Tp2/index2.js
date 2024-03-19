
let premierTitre = document.querySelector('h1');
premierTitre.textContent = "C’est le titre de ma première section";

// Sélectionner et mémoriser l'article dans une variable nommée "monArt"
let monArt = document.querySelector('article');

// Afficher la variable monArt dans la page
document.body.appendChild(monArt);

// Compléter le code JS avec l'extrait donné
var monPara = document.createElement("p");
monPara.innerHTML = "<strong>Coucou c’est moi le dernier paragraphe créé en JS.</strong><br>Je suis heureux d’être là !";
monArt.appendChild(monPara);
