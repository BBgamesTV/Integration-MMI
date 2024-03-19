
console.log(document.getElementById('sect1'));

let intros = document.getElementsByClassName('introduction');
for (let i = 0; i < intros.length; i++) {
  console.log(intros[i]);
}

let premierParagraphe = document.querySelector('article p');
console.log(premierParagraphe);


console.log(document.querySelector('#sect1'));

let intros2 = document.querySelectorAll('.introduction');
intros2.forEach(paragraphe => {
  console.log(paragraphe);
});


let premierParagraphe2 = document.querySelector('article p');
console.log(premierParagraphe2);
