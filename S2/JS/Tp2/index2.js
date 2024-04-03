
document.querySelector('h1').textContent = "C’est le titre de ma première section";
var monArt = document.querySelector('article');
document.body.appendChild(monArt);
document.body.appendChild(monArt);

var monPara = document.createElement("p");
monPara.textContent = "Coucou c’est moi le dernier paragraphe créé en JS. \nJe suis heureux d’être là!";
monPara.style.fontWeight = "bold";
monArt.appendChild(monPara);