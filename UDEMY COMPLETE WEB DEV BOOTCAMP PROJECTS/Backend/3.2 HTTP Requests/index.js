import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello Charley! Awesome Work!");

});

app.listen(port,() => {
    console.log(`Server Running at http://localhost:${port}`);

});