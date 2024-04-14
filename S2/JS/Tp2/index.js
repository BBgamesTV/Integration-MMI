// 1. Afficher dans la console l’élément dont l’id est sect1 (2 solutions attendues).

// Solution 1 : Utilisation de document.getElementById()
const sectionById = document.getElementById('sect1');
console.log('Solution 1 :', sectionById);

// Solution 2 : Utilisation de document.querySelector() avec un sélecteur d'attribut
const sectionByQuery = document.querySelector('#sect1');
console.log('Solution 2 :', sectionByQuery);

// 2. Afficher tous les paragraphes d’introduction.

const intros = document.querySelectorAll('.pIntro');
console.log('Paragrphes d\'introduction :', intros);

// 3. N’affichez que le premier paragraphe contenu dans l’article

const firstParaInArticle = document.querySelector('#sect1 article p');
console.log('Premier paragraphe dans l\'article :', firstParaInArticle);
