import express from "express";

const app = new express();

app.get("/", (req, res) => res.send("<h1>home</h1>"));


const heello = (req,res) => {
    res.send("this is alos a homm page")
}
app.get("/hello", heello
)
let dft = "hello";
const Port = 7456;

app.listen(7456, ()=> console.log(`listening on port number ${Port}`));

