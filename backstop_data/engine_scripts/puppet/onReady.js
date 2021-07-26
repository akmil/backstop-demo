module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  // console.log('page > ' + JSON.stringify(page));
  console.log('scenario > ' + JSON.stringify(scenario));
  await require('./clickAndHoverHelper')(page, scenario);

  // add more ready handlers here...
};
