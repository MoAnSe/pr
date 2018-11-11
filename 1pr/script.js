var modal = document.getElementById('modal');
var btn = document.getElementById("btn");
var close = document.getElementById("close");

btn.onclick = function(){
    modal.style.display = "block";
}
close.onclick = function(){
    modal.style.display = "none";
}
