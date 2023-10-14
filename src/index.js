import express from "express";

const app = express();

app.use((req, res, next) => res.send("<h1>hello</h1>"));

app.listen(3000);
