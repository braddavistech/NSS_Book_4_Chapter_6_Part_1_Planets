const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
let planetEl = document.getElementById("planets");
const correctName = [];
const planetWithE = [];
let tempHolder = document.createDocumentFragment();
let stringElemSent = "";
const words = ["The", "early", "bird", "might", "get", "the", "worm,", "but", "the", "second", "mouse", "gets", "the", "cheese."]

function printPlanets (planet) {
  let tempPlanet = document.createElement("p");
  tempPlanet.setAttribute("class", "divPlanetName");
  tempPlanet.textContent = planet;
  tempHolder.appendChild(tempPlanet);
};

const correctCapitol = planets.map(function (planet) {
  let tempPlanet = planet.charAt(0).toUpperCase() + planet.substr(1);
  correctName.push(tempPlanet);
});

const planetE = correctName.filter(function (planet) {
  let ePosition = planet.search(/e/i);
  if (ePosition != -1) {
    planetWithE.push(planet);
  }
});

const printTitle = (sectionID, title) => {
  let tempPlanet = document.createElement("h1");
  tempPlanet.setAttribute("id", sectionID);
  tempPlanet.textContent = title;
  tempHolder.appendChild(tempPlanet);
};

function printPlanetsE (planet) {
  let tempPlanet = document.createElement("p");
  tempPlanet.setAttribute("class", "planetWithE");
  tempPlanet.textContent = planet;
  tempHolder.appendChild(tempPlanet);
};

const sentenceCreate = (total, word) => {
  return total + ` ` + word;
}

planets.correctCapitol;
correctName.planetE;
printTitle("pTitle", "Total planets in list.")
correctName.forEach(printPlanets);
printTitle("eTitle", "Planets with an `e` in the name.");
planetWithE.forEach(printPlanetsE);
printTitle("stringElem", words.reduce(sentenceCreate));

planetEl.appendChild(tempHolder);