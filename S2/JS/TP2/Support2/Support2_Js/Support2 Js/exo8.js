let imagesList = document.querySelectorAll("#slide img");

function gererClicPrecedent() {
  var imageActive = document.querySelector(".active");
  if (imageActive) {
    imageActive.classList.remove("active");
    imageActive.previousElementSibling.classList.add("active");
  }
}

function gererClicSuivant() {
  let imageActive = document.querySelector(".active");
  if (imageActive) {
    imageActive.classList.remove("active");
    imageActive.nextElementSibling.classList.add("active");
  }
}

document.getElementById("avant").addEventListener("click", gererClicPrecedent);
document.getElementById("apres").addEventListener("click", gererClicSuivant);

imagesList[0].classList.add("active");