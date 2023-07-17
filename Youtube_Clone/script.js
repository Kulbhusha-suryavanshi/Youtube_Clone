var menuicon = document .querySelector(".menu-icon");
var sidebar = document .querySelector(".sidebar");
var contaier = document .querySelector(".container");
menuicon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    contaier.classList.toggle("large-container");
}