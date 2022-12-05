function regionInfo(regionName, totalPopulation, mostPopulated) {
  this.regionName = regionName || null;
  this.totalPopulation = totalPopulation || null;
  this.mostPopulated = mostPopulated || null;
}

function error(message) {
  this.message = message || null;
}

module.exports = {
  regionInfo,
  error,
};
