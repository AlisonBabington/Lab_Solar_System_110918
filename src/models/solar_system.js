const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};
SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:click', (event) => {
    const planet_name = event.detail;
    this.publishPlanetData(planet_name);
  })
};
SolarSystem.prototype.publishPlanetData = function (planet_name) {
  const planet = this.planets.filter(planet => planet.name === planet_name)[0];
  PubSub.publish('SolarSystem:selected-planet-ready', planet);
};

module.exports = SolarSystem;
