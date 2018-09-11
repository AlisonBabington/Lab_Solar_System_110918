const PubSub = require('../helpers/pub_sub.js');

const SelectView = function() {

};
SelectView.prototype.bindEvents = function () {
  const planetsMenu = document.querySelector('.planets-menu');
  planetsMenu.addEventListener('click', (event) => {
    const selectedPlanet = event.target.id;
    PubSub.publish('SelectView:click', selectedPlanet);
  });
};

module.exports = SelectView;
