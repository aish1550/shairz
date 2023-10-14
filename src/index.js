import express from "express";

const app = express();

// app.use((req, res, next) => {
//   console.warn("first middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.warn("second middleware");
//   res.send("<h1>hello</h1>");
// });

app.use("/users", (req, res, next) => {
  res.send(`<h1>Users</h1>`);
});

app.use("/", (req, res, next) => {
  res.send(`<h1>Home</h1>`);
});

app.listen(3000);
