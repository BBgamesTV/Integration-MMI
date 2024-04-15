/*console.log("sect1");

    var sect1 = document.getElementById("#sect1")

    var el = document.querySelector(".pIntro");

    var el = document.querySelector("article>p")

    sect1.textContent = "<p> Ceci est <em> un nouveau contenu HTML </em> pour notre main</p>";

    sect1.textContent="test"*/
    
console.log("sect1")
var titrePrincipal = document.querySelector("#sect1 h1");
titrePrincipal.textContent ="« C'est le titre de ma première section"
var monArt = document.querySelector("sect1")
document.write(monArt);
var monPara = document.createElement("p");
monArt.appendChild(monPara)
monPara.innerHTML = <b>Coucou c'est moi le dernier paragraphe créé en JS. Je suis heureux d'être là !</b>