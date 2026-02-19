const announcements = [
  {
    id: 1,
    name: "Huawei X5",
    category: "Elettronica",
    price: "120.12",
    type: "sell",
  },
  {
    id: 2,
    name: "Fiat 500",
    category: "Motori",
    price: "2000.32",
    type: "search",
  },
  {
    id: 3,
    name: "Mazza da Baseball",
    category: "Sport",
    price: "20.15",
    type: "sell",
  },
  {
    id: 4,
    name: "Bilocale",
    category: "Immobili",
    price: "30000.54",
    type: "search",
  },
  {
    id: 5,
    name: "Felpa usata",
    category: "Abbigliamento",
    price: "10.42",
    type: "sell",
  },
  {
    id: 6,
    name: "Divani due posti",
    category: "Arredamento",
    price: "400.64",
    type: "search",
  },
  {
    id: 7,
    name: "Pala",
    category: "Giardinaggio",
    price: "30.45",
    type: "sell",
  },
  {
    id: 8,
    name: "Master of Pupo",
    category: "Musica",
    price: "15.64",
    type: "sell",
  },
  {
    id: 9,
    name: "TV Samsung",
    category: "Elettronica",
    price: "230.42",
    type: "sell",
  },
  {
    id: 10,
    name: "Ford Puma",
    category: "Motori",
    price: "25000.02",
    type: "sell",
  },
  {
    id: 11,
    name: "Pallone da calcio",
    category: "Sport",
    price: "30.12",
    type: "search",
  },
  {
    id: 12,
    name: "Trilocale",
    category: "Immobili",
    price: "55000.54",
    type: "sell",
  },
  {
    id: 13,
    name: "Sciarpa scolorita",
    category: "Abbigliamento",
    price: "5.23",
    type: "sell",
  },
  {
    id: 14,
    name: "Lampada",
    category: "Arredamento",
    price: "70.65",
    type: "sell",
  },
  {
    id: 15,
    name: "Concime",
    category: "Giardinaggio",
    price: "2.45",
    type: "search",
  },
  {
    id: 16,
    name: "Basso nuovo",
    category: "Musica",
    price: "300.62",
    type: "sell",
  },
  {
    id: 17,
    name: "Cuffie Sony",
    category: "Elettronica",
    price: "120.65",
    type: "sell",
  },
  {
    id: 18,
    name: "Ducati Monster",
    category: "Motori",
    price: "12000.13",
    type: "sell",
  },
  {
    id: 19,
    name: "Pattini",
    category: "Sport",
    price: "90.64",
    type: "search",
  },
  {
    id: 21,
    name: "Guanti invernali",
    category: "Abbigliamento",
    price: "22.04",
    type: "sell",
  },
  {
    id: 22,
    name: "Scrivania in vetro",
    category: "Arredamento",
    price: "600.63",
    type: "search",
  },
  {
    id: 23,
    name: "Secchio",
    category: "Giardinaggio",
    price: "30.43",
    type: "search",
  },
  {
    id: 24,
    name: "Compilation Pupo",
    category: "Musica",
    price: "9.93",
    type: "search",
  },
  {
    id: 25,
    name: "Auricolari Sennheiser",
    category: "Elettronica",
    price: "120.93",
    type: "sell",
  },
  {
    id: 26,
    name: "Fiat 300",
    category: "Motori",
    price: "2560.42",
    type: "sell",
  },
  {
    id: 27,
    name: "Set mazze da golf",
    category: "Sport",
    price: "4320.43",
    type: "search",
  },
  {
    id: 28,
    name: "Posto augo",
    category: "Immobili",
    price: "2200.63",
    type: "search",
  },
  {
    id: 29,
    name: "Zaino Decathlon",
    category: "Abbigliamento",
    price: "55.55",
    type: "sell",
  },
  {
    id: 30,
    name: "Comodino",
    category: "Arredamento",
    price: "210.12",
    type: "sell",
  },
  {
    id: 31,
    name: "Rastrello",
    category: "Giardinaggio",
    price: "5.62",
    type: "sell",
  },
  {
    id: 32,
    name: "Compilation Nino D'Angelo",
    category: "Musica",
    price: "1.91",
    type: "sell",
  },
  {
    id: 33,
    name: "IPhone X",
    category: "Elettronica",
    price: "1300.41",
    type: "search",
  },
  {
    id: 34,
    name: "Nissan Juke",
    category: "Motori",
    price: "25420.40",
    type: "sell",
  },
  {
    id: 35,
    name: "Guanti da palestra",
    category: "Sport",
    price: "11.54",
    type: "search",
  },
  {
    id: 37,
    name: "Scarpe Nike",
    category: "Abbigliamento",
    price: "240.33",
    type: "sell",
  },
  {
    id: 38,
    name: "Poltrona",
    category: "Arredamento",
    price: "420.66",
    type: "search",
  },
  {
    id: 39,
    name: "Semi",
    category: "Giardinaggio",
    price: "4.43",
    type: "sell",
  },
  {
    id: 40,
    name: "Biglietto Gods Of Metal",
    category: "Musica",
    price: "150.65",
    type: "search",
  },
  {
    id: 41,
    name: "Macbook Pro",
    category: "Elettronica",
    price: "2340.37",
    type: "search",
  },
  {
    id: 42,
    name: "Dacia Duster",
    category: "Motori",
    price: "13350.73",
    type: "sell",
  },
  {
    id: 43,
    name: "Canoa",
    category: "Sport",
    price: "520.03",
    type: "search",
  },
  {
    id: 44,
    name: "Cantina",
    category: "Immobili",
    price: "20000.12",
    type: "sell",
  },
  {
    id: 45,
    name: "Jeans",
    category: "Abbigliamento",
    price: "55.54",
    type: "sell",
  },
  {
    id: 46,
    name: "Lampadario",
    category: "Arredamento",
    price: "280.54",
    type: "sell",
  },
  {
    id: 47,
    name: "Trattore",
    category: "Giardinaggio",
    price: "12000.09",
    type: "sell",
  },
  {
    id: 48,
    name: "Plettro",
    category: "Musica",
    price: "0.99",
    type: "sell",
  },
  {
    id: 49,
    name: "Modem",
    category: "Mimmo",
    price: "2.99",
    type: "sell",
  },
];

if (Array.isArray(window.PRESTO_ANNOUNCEMENTS) && window.PRESTO_ANNOUNCEMENTS.length > 0) {
  announcements.length = 0;
  announcements.push(...window.PRESTO_ANNOUNCEMENTS);
}

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const typeFilter = document.getElementById("typeFilter");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");
const sortBySelect = document.getElementById("sortBy");
const cardsContainer = document.getElementById("cardsContainer");
const emptyState = document.getElementById("emptyState");
const resetFiltersButton = document.getElementById("resetFilters");
const resultsSummary = document.getElementById("resultsSummary");

const statTotal = document.getElementById("statTotal");
const statSell = document.getElementById("statSell");
const statSearch = document.getElementById("statSearch");

const eurFormatter = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
});

function createFallbackImage(label) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='420' height='220'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='#4f46e5'/><stop offset='100%' stop-color='#7c3aed'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#ffffff' font-family='Arial' font-size='24'>${label}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

document.querySelectorAll(".brand-logo").forEach((image) => {
  image.addEventListener("error", () => {
    image.src = createFallbackImage("Presto.it");
  });
});

const categoryImageMap = {
  Elettronica: "media/elettronica.svg",
  Motori: "media/motori.svg",
  Sport: "media/sport.svg",
  Immobili: "media/immobili.svg",
  Abbigliamento: "media/abbigliamento.svg",
  Arredamento: "media/arredamento.svg",
  Giardinaggio: "media/giardinaggio.svg",
  Musica: "media/musica.svg",
  Mimmo: "media/mimmo.svg",
};

function getFallbackImageData(label) {
  return createFallbackImage(label);
}

function getImageForCategory(category) {
  return categoryImageMap[category] || "media/logo.svg";
}

function setupCategoryFilter() {
  const categories = [...new Set(announcements.map((item) => item.category))].sort((a, b) =>
    a.localeCompare(b, "it")
  );

  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.append(option);
  }
}

function normalizeText(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function parseOptionalNumber(value) {
  if (value === "") {
    return Number.NaN;
  }

  return Number(value);
}

function getFilteredAnnouncements() {
  const text = normalizeText(searchInput.value.trim());
  const category = categoryFilter.value;
  const type = typeFilter.value;
  const minPrice = parseOptionalNumber(minPriceInput.value);
  const maxPrice = parseOptionalNumber(maxPriceInput.value);
  const sortBy = sortBySelect.value;

  const filtered = announcements.filter((item) => {
    const itemName = normalizeText(item.name);
    const itemCategory = item.category;
    const itemType = item.type;
    const itemPrice = Number(item.price);

    const textMatch = text === "" || itemName.includes(text);
    const categoryMatch = category === "all" || itemCategory === category;
    const typeMatch = type === "all" || itemType === type;
    const minPriceMatch = Number.isNaN(minPrice) || itemPrice >= minPrice;
    const maxPriceMatch = Number.isNaN(maxPrice) || itemPrice <= maxPrice;

    return textMatch && categoryMatch && typeMatch && minPriceMatch && maxPriceMatch;
  });

  switch (sortBy) {
    case "price-asc":
      filtered.sort((a, b) => Number(a.price) - Number(b.price));
      break;
    case "price-desc":
      filtered.sort((a, b) => Number(b.price) - Number(a.price));
      break;
    default:
      filtered.sort((a, b) => a.name.localeCompare(b.name, "it"));
  }

  return filtered;
}

function createCard(item, index) {
  const card = document.createElement("article");
  card.className = "card";
  card.style.animationDelay = `${Math.min(index * 30, 300)}ms`;

  const typeLabel = item.type === "sell" ? "Vendo" : "Cerco";
  const typeClass = item.type === "sell" ? "tag-sell" : "tag-search";

  const cardImage = getImageForCategory(item.category);
  const fallbackImage = getFallbackImageData(item.category);

  card.innerHTML = `
    <img
      class="card-image"
      src="${cardImage}"
      alt="${item.category}"
      onerror="this.onerror=null;this.src='${fallbackImage}'"
    />
    <div class="card-top">
      <h3>${item.name}</h3>
      <span class="tag ${typeClass}">${typeLabel}</span>
    </div>
    <div class="card-meta">
      <span>${item.category}</span>
      <strong class="price">${eurFormatter.format(Number(item.price))}</strong>
    </div>
  `;

  return card;
}

function updateStats(list) {
  const sellCount = list.filter((item) => item.type === "sell").length;
  const searchCount = list.filter((item) => item.type === "search").length;

  statTotal.textContent = String(list.length);
  statSell.textContent = String(sellCount);
  statSearch.textContent = String(searchCount);

  resultsSummary.textContent = `${list.length} annunci mostrati`;
}

function renderAnnouncements() {
  const filtered = getFilteredAnnouncements();
  cardsContainer.innerHTML = "";

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
    filtered.forEach((item, index) => cardsContainer.append(createCard(item, index)));
  }

  updateStats(filtered);
}

function resetFilters() {
  searchInput.value = "";
  categoryFilter.value = "all";
  typeFilter.value = "all";
  minPriceInput.value = "";
  maxPriceInput.value = "";
  sortBySelect.value = "name-asc";
  renderAnnouncements();
}

[
  searchInput,
  categoryFilter,
  typeFilter,
  minPriceInput,
  maxPriceInput,
  sortBySelect,
].forEach((element) => {
  element.addEventListener("input", renderAnnouncements);
  element.addEventListener("change", renderAnnouncements);
});

resetFiltersButton.addEventListener("click", resetFilters);

setupCategoryFilter();
renderAnnouncements();
