var div1 = document.getElementById("div1");

var div2 = document.getElementById("div2");

div1.addEventListener("click", function() {
    var couleur = div1.style.backgroundColor;
    if(couleur !== "red") {
        div1.style.backgroundColor = "red";
    } else {
    div1.style.backgroundColor = "blue";
}

});