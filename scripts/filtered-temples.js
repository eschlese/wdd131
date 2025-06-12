const nav = document.querySelector(".navigation");
const menuButton = document.querySelector("#menu");
const grid = document.querySelector(".grid");
const homeButton = document.querySelector("#home");
const oldButton = document.querySelector("#old");
const newButton = document.querySelector("#new");
const largeButton = document.querySelector("#large");
const smallButton = document.querySelector("#small");

menuButton.addEventListener("click", function () {
  nav.classList.toggle("open");
  menuButton.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Edmonton Alberta",
    location: "Edmonton, Canada",
    dedicated: "1999, December, 11",
    area: 10700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/edmonton-alberta/400x250/edmonton-alberta-temple-lds-83329-wallpaper.jpg"
  },
  {
    templeName: "Reno Nevada",
    location: "Reno, Nevada, United States",
    dedicated: "2000, April, 23",
    area: 10700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/reno-nevada/400x250/reno-temple-lds-1072790-wallpaper.jpg"
  },
  {
    templeName: "Calgary Alberta Temple",
    location: "Calgary, Canada",
    dedicated: "2012, October, 28",
    area: 33000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-alberta-temple-before-open-house-1033408-wallpaper.jpg"
  }
];

function createTempleCard(temple) {
  let card = document.createElement("section");
  let name = document.createElement("h3");
  let location = document.createElement("p");
  let dedication = document.createElement("p");
  let area = document.createElement("p");
  let img = document.createElement("img");

  name.textContent = temple.templeName;
  location.textContent = `Location: ${temple.location}`;
  dedication.textContent = `Dedicated: ${temple.dedicated}`;
  area.textContent = `Area (sq ft): ${temple.area}`;
  img.setAttribute("src", temple.imageUrl);
  img.setAttribute("alt", `${temple.name} temple`);
  img.setAttribute("loading", "lazy")

  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedication);
  card.appendChild(area);
  card.appendChild(img);

  return card;
}

function populateGrid(filteredTemples) {
  grid.innerHTML = ""
  filteredTemples.forEach(temple => {
    grid.appendChild(createTempleCard(temple));
  });
}

homeButton.addEventListener("click", () => {
  populateGrid(temples);
});

oldButton.addEventListener("click", () => {
  populateGrid(temples.filter(temple => temple.dedicated.slice(0, 4) < 1900));
});

newButton.addEventListener("click", () => {
  populateGrid(temples.filter(temple => temple.dedicated.slice(0, 4) > 2000));
});

largeButton.addEventListener("click", () => {
  populateGrid(temples.filter(temple => temple.area > 90000));
});

smallButton.addEventListener("click", () => {
  populateGrid(temples.filter(temple => temple.area < 10000));
});

populateGrid(temples);