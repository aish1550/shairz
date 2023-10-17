const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./constants/routes.js");
const { adminRoutes } = require("./routes/admin");

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

app.get(routes.HOME, (_, res) => {
  res.send(`<h1>Hello</h1>`);
});
app.use((_, res) => {
  res.status(404).send(`<h1>Page not found</h1>`);
});

app.listen(port);
console.log("==============================================");
console.log(`local server running: http://localhost:${port}`);
console.log("==============================================");
