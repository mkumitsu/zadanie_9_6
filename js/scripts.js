var list = document.getElementById('list')
var add = document.getElementById("addElem");
var li = document.getElementsByTagName("li");
add.addEventListener("click", function(event) {
    var element = document.createElement("li");
    element.innerHTML = "item " + li.length;
    console.log(element);
    list.appendChild(element);
});