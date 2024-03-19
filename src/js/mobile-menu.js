const refs = {
  button: document.querySelector("#burgerButton"),
  body: document.querySelector("body"),
  menu: document.querySelector(".nav-header__menu"),
};

function toggleMenu() {
  const isActive = refs.button.classList.contains("opened");
  if (isActive) {
    refs.button.classList.remove("opened");
    refs.menu.classList.remove("opened");
  } else {
    refs.button.classList.add("opened");
    refs.menu.classList.add("opened");
  }
}

function init() {
  refs.button.addEventListener("click", toggleMenu);
  refs.menu.addEventListener("click", toggleMenu);
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
