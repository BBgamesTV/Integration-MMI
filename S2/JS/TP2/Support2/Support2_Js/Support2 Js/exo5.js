var div1 = document.getElementById("div1");

var div2 = document.getElementById("div2");

div1.addEventListener("click", function() {
    var temp = div1.textContent;
    div1.textContent = div2.textContent;
    div2.textContent = temp;
});