const PubSub = require('../helpers/pub_sub.js');

const PlanetView = function(element) {
  this.element = element;
};
PlanetView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:selected-planet-ready', (event) => {
    const planet = event.detail;
    this.render(planet);
  })
};
PlanetView.prototype.render = function (planet) {

  const planetTitle = document.createElement('h1');
  planetTitle.textContent = planet.name;
  this.element.innerHTML = '';
  this.element.appendChild(planetTitle);
  // const planetParagraph = document.createElement('p');
  // planetParagraph.textContent = `Orbit: ${planet.orbit},
  // Days per Earth Day: ${planet.day}, Surface Area: ${planet.surfaceArea},
  // Volume: ${planet.volume}, Gravity: ${planet.gravity},
  // Moons: ${planet.moons}`;
  const planetList = document.createElement('ul');
  this.element.appendChild(planetList);
  for (property in planet) {
    if (property === 'name' || property === 'image') {
    } else {
      const planetListItem = document.createElement('li');
      // console.log(property.capitalize());
      planetListItem.textContent = property + ": " + planet[property];
      planetList.appendChild(planetListItem);
    }
  }
  // this.element.appendChild(planetParagraph);
  document.body.style.backgroundImage = `url(${planet.image})`;
  // const planetImage = new Image();
  // planetImage.src = planet.image;
  // this.element.appendChild(planetImage);
};


module.exports = PlanetView;
