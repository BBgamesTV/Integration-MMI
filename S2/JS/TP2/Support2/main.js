for (let i = 0; i < 5; i++) {
  var div = document.createElement("div");
  var text = document.createTextNode("Element" + i);
  div.appendChild(text);
  document.getElementsByTagName("body")[0].appendChild(div);
  div.onclick = function () {
    console.log("Click sur Element" + i);
  };
}
