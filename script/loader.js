var myVar;
const dashboard = document.getElementById("main")
const loader = document.getElementById("loader")


function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  loader.style.display = "none";
  dashboard.style.display = "flex";
}