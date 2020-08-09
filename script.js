var btn = document.querySelector("button");
var backgrnd = document.querySelector("body");
var arr = ["blue", "red", "yellow", "Green"];
backgrnd.style.backgroundColor = "black";
btn.addEventListener("click", changeColor);
function changeColor() {
    var index = parseInt(Math.random() * arr.length);
    backgrnd.style.backgroundColor = arr[index];
}