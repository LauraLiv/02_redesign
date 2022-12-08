const btn = document.querySelector(".container");
const menu = document.querySelector(".main-menu");

function toggleMenu() {
  menu.classList.toggle("shown");
  const menuShown = menu.classList.contains("shown");

  if (menuShown) {
    console.log(menuShown);
    //btn.textContent = "Luk";
  } else {
    console.log(menuShown);
    //btn.textContent = "Menu";
  }
}

btn.addEventListener("click", toggleMenu);

function myFunction(x) {
  x.classList.toggle("change");
}
