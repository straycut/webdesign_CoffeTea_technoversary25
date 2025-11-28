// Toggle class aktive

const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik

document.getElementById("ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik dimanapun untuk close

const hamburger = document.getElementById("ham-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
