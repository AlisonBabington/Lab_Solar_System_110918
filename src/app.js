const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js');
const PlanetView = require('./views/planets_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();
  const planetInfoSection = document.querySelector('.planet-details');
  const planetView = new PlanetView(planetInfoSection);
  planetView.bindEvents();
  const selectView = new SelectView();
  selectView.bindEvents();
});
