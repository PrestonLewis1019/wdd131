let button = document.getElementById("toggleBtn");
let body = document.body;
let title = document.getElementById("title");
let logo = document.getElementById("logo");

let darkMode = false;

button.addEventListener("click", toggleTheme);

function toggleTheme() {
  if (darkMode === false) {
    // DARK MODE
    body.style.backgroundColor = "#121212";
    body.style.color = "white";

    button.style.backgroundColor = "white";
    button.style.color = "black";

    title.style.color = "white";

    logo.style.filter = "invert(1)";

    darkMode = true;
  } else {
    // LIGHT MODE
    body.style.backgroundColor = "white";
    body.style.color = "black";

    button.style.backgroundColor = "black";
    button.style.color = "white";

    title.style.color = "black";

    logo.style.filter = "invert(0)";

    darkMode = false;
  }
}