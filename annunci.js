const navbar = document.querySelector("#navbar");
const cardsWrapper = document.querySelector("#cardsWrapper");
const categoryWrapper = document.querySelector("#categoryWrapper");
const priceInput = document.querySelector("#priceInput");
const priceValue = document.querySelector("#priceValue");
const wordInput = document.querySelector("#wordInput");
const resetBtn = document.querySelector("#resetBtn");

let data = [];
let radioButtons = [];

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

fetch("./annunci.json")
  .then((response) => response.json())
  .then((announcements) => {
    data = announcements;
    setPriceRange(data);
    createCategoryFilters(data);
    showCards(data);
    bindEvents();
  })
  .catch(() => {
    cardsWrapper.innerHTML = `<div class="col-12"><div class="empty-state">Errore nel caricamento degli annunci</div></div>`;
  });

function setPriceRange(array) {
  const maxPrice = Math.ceil(Math.max(...array.map((el) => Number(el.price))));
  priceInput.max = String(maxPrice);
  priceInput.value = String(maxPrice);
  priceValue.textContent = String(maxPrice);
}

function getSelectedCategory() {
  const checkedButton = Array.from(radioButtons).find((button) => button.checked);
  return checkedButton ? checkedButton.id : "all";
}

function updatePriceRangeByCategory() {
  const selectedCategory = getSelectedCategory();
  const filteredByCategory = selectedCategory === "all"
    ? data
    : data.filter((el) => el.category === selectedCategory);

  if (filteredByCategory.length === 0) {
    return;
  }

  const maxPrice = Math.ceil(Math.max(...filteredByCategory.map((el) => Number(el.price))));
  const currentValue = Number(priceInput.value);

  priceInput.max = String(maxPrice);
  priceInput.value = String(Math.min(currentValue, maxPrice));
  priceValue.textContent = priceInput.value;
}

function createCategoryFilters(array) {
  const categories = ["all", ...new Set(array.map((el) => el.category))];

  categoryWrapper.innerHTML = "";

  categories.forEach((category, index) => {
    const id = category;
    const label = category === "all" ? "Tutte le categorie" : category;

    const wrapper = document.createElement("div");
    wrapper.classList.add("form-check", "mb-2");

    wrapper.innerHTML = `
      <input class="form-check-input" type="radio" name="category" id="${id}" ${index === 0 ? "checked" : ""}>
      <label class="form-check-label" for="${id}">${label}</label>
    `;

    categoryWrapper.appendChild(wrapper);
  });

  radioButtons = document.querySelectorAll("input[name='category']");
}

function showCards(array) {
  cardsWrapper.innerHTML = "";

  if (array.length === 0) {
    cardsWrapper.innerHTML = `<div class="col-12"><div class="empty-state">Nessun annuncio trovato</div></div>`;
    return;
  }

  array.forEach((annuncio) => {
    const col = document.createElement("div");
    col.classList.add("col-12", "col-md-6", "col-xl-4");

    const shortName = truncateWord(annuncio.name);

    col.innerHTML = `
      <article class="card announcement-card">
        <div class="card-body d-flex flex-column">
          <h3 class="card-title h5" title="${annuncio.name}">${shortName}</h3>
          <p class="mb-2"><span class="badge badge-category">${annuncio.category}</span></p>
          <p class="mb-3"><span class="badge badge-type">${annuncio.type}</span></p>
          <p class="mt-auto mb-0 price-tag">€ ${Number(annuncio.price).toFixed(2)}</p>
        </div>
      </article>
    `;

    cardsWrapper.appendChild(col);
  });
}

function truncateWord(text) {
  if (text.length > 15) {
    return `${text.split(" ")[0]}...`;
  }

  return text;
}

function filterByCategory(array) {
  const category = getSelectedCategory();

  const filtered = array.filter((annuncio) => {
    if (category === "all") {
      return true;
    }

    return annuncio.category === category;
  });

  return filtered;
}

function filterByPrice(array) {
  const filtered = array.filter((el) => Number(el.price) <= Number(priceInput.value));
  return filtered;
}

function filterByWord(array) {
  const filtered = array.filter((el) =>
    el.name.toLowerCase().includes(wordInput.value.toLowerCase().trim())
  );
  return filtered;
}

function globalFilter() {
  const filteredByCategory = filterByCategory(data);
  const filteredByPrice = filterByPrice(filteredByCategory);
  const filteredByWord = filterByWord(filteredByPrice);
  showCards(filteredByWord);
}

function bindEvents() {
  radioButtons.forEach((button) => {
    button.addEventListener("click", () => {
      updatePriceRangeByCategory();
      globalFilter();
    });
  });

  priceInput.addEventListener("input", () => {
    priceValue.textContent = priceInput.value;
    globalFilter();
  });

  wordInput.addEventListener("input", () => {
    globalFilter();
  });

  resetBtn.addEventListener("click", () => {
    const allButton = document.querySelector("#all");
    if (allButton) {
      allButton.checked = true;
    }

    wordInput.value = "";
    setPriceRange(data);
    globalFilter();
  });
}
