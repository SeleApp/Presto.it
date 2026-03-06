const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  if (scrolled > 0) {
    navbar.classList.remove("bg-black");
    navbar.classList.add("bg-yellow");
    navbar.style.height = "70px";
  } else {
    navbar.classList.add("bg-black");
    navbar.classList.remove("bg-yellow");
    navbar.style.height = "140px";
  }
});
