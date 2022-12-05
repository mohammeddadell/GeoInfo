const axios = require("axios");
const { regionPopulation } = require("../helpers/parseData");
const { error } = require("../models/region");

const infoView = (req, res) => {
  res.render("infoEjs", {});
};

const getInfo = (req, res) => {
  const { region } = req.body;
  if (region) {
    axios
      .get(process.env.API_URL + region)
      .then(function (resData) {
        const regInfo = regionPopulation(resData.data);
        res.render("resultsEjs", {
          reg: regInfo,
          error: null,
          path: "/resultsEjs",
        });
      })
      .catch(function (errorDetails) {
        const err = new error(errorDetails.response.data.message);
        res.render("resultsEjs", {
          reg: null,
          error: err,
          path: "/resultsEjs",
        });
      });
  }
};
module.exports = {
  infoView,
  getInfo,
};
