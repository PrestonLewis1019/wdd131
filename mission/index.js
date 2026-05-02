
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
  let current = selectElem.value;

  if (current == "dark") {

    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "white";

    logo.style.filter = "invert(1)";
   

    document.querySelector("h1, h2").style.color = "white";

  } else {

    document.body.style.backgroundColor = "#f9f9f9";
    document.body.style.color = "black";

    logo.style.filter = "invert(0)";
    

    document.querySelector("h1, h2").style.color = "black";
  }
}