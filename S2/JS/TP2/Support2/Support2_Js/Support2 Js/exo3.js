var img = document.querySelector("img");
var adr1 = "images/070465321693-web-tete.jpg";
var adr2 = "images/A-10_Thunderbolt_9875.jpg";

img.addEventListener("mouseover", changeImg1)
img.addEventListener("mouseover", changeImg2)

function changeImg1(){
    img.src = adr2;
}
img.setAttribute("src", adr2)

function changeImg2(){
    img.src = adr2;
}
img.setAttribute("src", adr1)

img.addEventListener("mouseout", function() {
            img.src = adr1;
            texte.style.fontStyle = "normal";
        })