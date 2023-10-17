const express = require("express");
const routes = require("../constants/routes");
const router = express.Router();

router.get(routes.PROFILE, (req, res) => {
  res.send("<p>profile</p>");
});

module.exports = { adminRoutes: router };
