const navbar = document.querySelector("#navbar");
const teamCircle = document.querySelector("#teamCircle");
const circleOpener = document.querySelector("#circleOpener");
const openerIcon = document.querySelector("#openerIcon");
const teamCardFront = document.querySelector("#teamCardFront");
const teamCardName = document.querySelector("#teamCardName");
const teamCardRole = document.querySelector("#teamCardRole");
const teamCardBio = document.querySelector("#teamCardBio");

const teachers = [
  {
    name: "Matteo",
    role: "Frontend Developer",
    bio: "Costruisce interfacce pulite e veloci, con focus su esperienza utente e qualita visiva.",
    image: "./media/matteo.svg"
  },
  {
    name: "Marco",
    role: "Project Lead",
    bio: "Coordina roadmap e priorita del prodotto, mantenendo il team allineato sugli obiettivi.",
    image: "./media/marco.svg"
  },
  {
    name: "Nicola",
    role: "UX Specialist",
    bio: "Ottimizza flussi e usabilita per rendere ogni ricerca annunci rapida e intuitiva.",
    image: "./media/nicola.svg"
  },
  {
    name: "Davide",
    role: "Backend Developer",
    bio: "Gestisce la logica applicativa e la struttura dati che alimentano filtri e risultati.",
    image: "./media/davide.svg"
  }
];

let isOpen = false;
let memberNodes = [];

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

createMemberNodes();
positionMemberNodes();

circleOpener.addEventListener("click", () => {
  isOpen = !isOpen;
  openerIcon.classList.toggle("is-open", isOpen);
  positionMemberNodes();
});

function createMemberNodes() {
  teachers.forEach((teacher, index) => {
    const node = document.createElement("button");
    node.type = "button";
    node.classList.add("team-member-node");
    node.style.backgroundImage = `url(${teacher.image})`;
    node.setAttribute("aria-label", `Apri profilo ${teacher.name}`);

    node.addEventListener("click", () => {
      setActiveMember(index);
      updateCard(teacher);

      if (!isOpen) {
        isOpen = true;
        openerIcon.classList.add("is-open");
        positionMemberNodes();
      }
    });

    teamCircle.appendChild(node);
    memberNodes.push(node);
  });
}

function positionMemberNodes() {
  const radius = window.innerWidth < 576 ? 108 : 132;

  memberNodes.forEach((node, index) => {
    if (!isOpen) {
      node.style.transform = "translate(-50%, -50%) rotate(0deg) translate(0px) rotate(0deg)";
      return;
    }

    const angle = (360 * index) / memberNodes.length - 90;
    node.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`;
  });
}

function updateCard(teacher) {
  teamCardFront.style.backgroundImage = `url(${teacher.image})`;
  teamCardName.textContent = teacher.name;
  teamCardRole.textContent = teacher.role;
  teamCardBio.textContent = teacher.bio;
}

function setActiveMember(activeIndex) {
  memberNodes.forEach((node, index) => {
    node.classList.toggle("is-active", index === activeIndex);
  });
}
