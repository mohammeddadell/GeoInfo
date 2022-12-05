const { regionInfo } = require("../models/region");
const regionPopulation = (data) => {
  let regInfo = new regionInfo(data[0].region, 0, "");
  let maxPopulation = 0;

  const countries = data.map((country) => {
    regInfo.totalPopulation += country.population;
    if (country.population > maxPopulation) {
      maxPopulation = country.population;
      regInfo.mostPopulated = country.name["official"];
    }
  });
  return regInfo;
};
module.exports = {
  regionPopulation,
};
