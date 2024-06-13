import express from "express";

const app = new express();

app.get("/", (req, res) => res.send("<h1>home</h1>"));

const Port = 7456;

app.listen(7456, ()=> console.log(`listening on port number ${Port}`));

