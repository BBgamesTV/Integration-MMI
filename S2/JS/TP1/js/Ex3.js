// var Prénom = "Bastien"
// var Nom = "Brousse"
// var Age = "20"
// var message = Prénom + ' ' + Nom + ' '+Age+'ans'
// var message = '${Prénom} ${Nom} ${Age}ans'
// console.log(message) 
// window.alert(message) 
// document.write(message)

let nom = prompt("Quel est votre nom ?","Doe");
let prenom = prompt("Quel est votre prénom ?","John");
let age = prompt("Quel âge avez-vous ?","45");
let age10 = Number(age) + 10;
let message;
let sexe = prompt('êtes vous un (H)omme ou une (F)emme ou (N)on? ','H');
let aimeVoyager = prompt('Aimez-vous voyager ? Oui / Non',"Oui");

if (sexe === "H") {
    message = `Bonjour Monsieur ${prenom} ${nom}. vous avez ${age} ans en 2024 et aurez ${age10}  dans 10 Ans.`
}
if (sexe === "F") {
    message = `Bonjour Madame ${prenom} ${nom}. vous avez ${age} ans en 2024 et aurez ${age10}  dans 10 Ans.`
} else {
    message = `Bonjour ${prenom} ${nom}. vous avez ${age} ans en 2024 et aurez ${age10}  dans 10 Ans.`
}

if (aimeVoyager === "Oui"){
    message = message +  ' Vous pouvez participer à notre jeux concours pour gagner un voyage en Europe'
}

console.log(message)
document.write(message)