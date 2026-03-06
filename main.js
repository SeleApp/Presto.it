const navbar = document.querySelector("#navbar");
const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const thirdNumber = document.querySelector("#thirdNumber");

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

function createCounter(element, target, intervalTime) {
  let counter = 0;

  const interval = setInterval(() => {
    if (counter < target) {
      counter += 1;
      element.textContent = String(counter);
    } else {
      clearInterval(interval);
    }
  }, intervalTime);
}

if (firstNumber && secondNumber && thirdNumber) {
  createCounter(firstNumber, 120, 12);
  createCounter(secondNumber, 98, 15);
  createCounter(thirdNumber, 75, 18);
}
