var imagesList = document.querySelectorAll("#diaporama img");

function gererClicPrecedent() {
  var imageActive = document.querySelector(".active");
  if (imageActive) {
    imageActive.classList.remove("active");
    imageActive.previousElementSibling.classList.add("active");
  }
}

function gererClicSuivant() {
  var imageActive = document.querySelector(".active");
  if (imageActive) {
    imageActive.classList.remove("active");
    imageActive.nextElementSibling.classList.add("active");
  }
}

document.getElementById("precedent").addEventListener("click", gererClicPrecedent);
document.getElementById("suivant").addEventListener("click", gererClicSuivant);

imagesList[0].classList.add("active");