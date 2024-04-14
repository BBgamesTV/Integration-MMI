// Exercice 2

// 2. Modifiez le titre de premier niveau.
const titreH1 = document.querySelector('h1');
titreH1.textContent = "C’est le titre de ma première section";

const monArt = document.querySelector('#sect1 article');

const newP = document.createElement('p');
newP.textContent = monArt.outerHTML;
document.body.appendChild(newP);

const monPara = document.createElement("p");
monArt.appendChild(monPara);

monPara.innerHTML = '<strong>Coucou c’est moi le dernier paragraphe créé en JS.</strong><br>Je suis heureux d’être là !';

