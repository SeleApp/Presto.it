const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

function createFallbackImage(label) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='420' height='420'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='#4f46e5'/><stop offset='100%' stop-color='#7c3aed'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#ffffff' font-family='Arial' font-size='34'>${label}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

document.querySelectorAll(".team-card img").forEach((image) => {
  image.addEventListener("error", () => {
    const label = image.getAttribute("alt") || "Presto";
    image.src = createFallbackImage(label);
  });
});

document.querySelectorAll(".brand-logo").forEach((image) => {
  image.addEventListener("error", () => {
    image.src = createFallbackImage("Presto.it");
  });
});

const announcementsData = Array.isArray(window.PRESTO_ANNOUNCEMENTS)
  ? window.PRESTO_ANNOUNCEMENTS
  : [];

const kpiTotalElement = document.getElementById("kpiTotal");
const kpiCategoriesElement = document.getElementById("kpiCategories");

if (kpiTotalElement) {
  kpiTotalElement.dataset.count = String(announcementsData.length);
}

if (kpiCategoriesElement) {
  const categoriesCount = new Set(announcementsData.map((item) => item.category)).size;
  kpiCategoriesElement.dataset.count = String(categoriesCount);
}

const rotatingWordElement = document.getElementById("rotatingWord");
const rotatingWords = ["smart", "veloce", "moderna", "intuitiva"];

if (rotatingWordElement) {
  let currentWordIndex = 0;

  setInterval(() => {
    currentWordIndex = (currentWordIndex + 1) % rotatingWords.length;
    rotatingWordElement.textContent = rotatingWords[currentWordIndex];
  }, 2200);
}

function animateCounter(element) {
  const target = Number(element.dataset.count || "0");
  const duration = 1100;
  const start = performance.now();

  function updateCounter(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(target * progress);
    element.textContent = target >= 1000 ? value.toLocaleString("it-IT") : String(value);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target >= 1000 ? target.toLocaleString("it-IT") : String(target);
    }
  }

  requestAnimationFrame(updateCounter);
}

const counters = document.querySelectorAll(".kpi-value");

if (counters.length) {
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

const modernTeamCards = document.querySelectorAll(".page-team .team-card-modern");

modernTeamCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    const rotateY = ((x / bounds.width) - 0.5) * 8;
    const rotateX = (0.5 - (y / bounds.height)) * 8;

    card.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
  });
});
