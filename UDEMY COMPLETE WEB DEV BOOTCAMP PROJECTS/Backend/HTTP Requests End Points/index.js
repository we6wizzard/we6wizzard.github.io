import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Homepage</h1>");

});

app.get('/contact', (req, res) => {
    res.send("<p>Phone: 0123456789</p>");

});

app.get('/about', (req, res) => {
    res.send("<p>My name is Charley Rees. I am 41 years old and love coding. I am learning about Node and Express to create servers</p>");

});

app.listen(port,() => {
    console.log(`Server Running at http://localhost:${port}`);

});