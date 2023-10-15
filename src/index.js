import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", (req, res, next) => {
  res.send(`<h1>Users</h1>`);
});

app.use("/", (req, res, next) => {
  res.send(`<h1>Home</h1>`);
});

app.listen(3000);
