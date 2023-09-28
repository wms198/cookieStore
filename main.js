function toggleMenu() {
  let menu = document.getElementById("menu");
  let burger = document.getElementById("burger");

  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    burger.classList.remove("open");

    console.log("closing the menu");
  } else {
    menu.classList.add("open");
    burger.classList.add("open");

    console.log("opening the menu");
  }
}

function overlayOff() {
  let overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  let popup = document.getElementById("popup");
  popup.classList.remove("open");
}

function overlayOn() {
  let overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  const myTimeout = setTimeout(showpopup, 100);
}

function showpopup() {
  let popup = document.getElementById("popup");
  popup.classList.add("open");
}
