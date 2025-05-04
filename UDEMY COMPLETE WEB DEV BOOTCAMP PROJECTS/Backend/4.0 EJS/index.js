import express from "express";
const app=express(); //Setting node's framework as Express
const port=3000;

app.set('view engine', 'ejs'); //Setting EJS as the template engine

//Advice for each day (Sunday = 0)

const adviceByDay = [
    "Take it easy - Sunday is for rest.",
    "Monday: Start the week strong! Set your goals.",
    "Tuesday: Keep pushing! You're doing great.",
    "Wednesday: Midweek hump - stay focused!",
    "Thursday: Almost there - finish strong!",
    "It's Fri-YAY! Reflect and prepare to relax.",
    "Saturday: Recharge and get ready for the week ahead"
];

app.get('/', (req, res) => {
    const day = new Date().getDay();
    const advice = adviceByDay[day];
    res.render('index.ejs', {advice}); //pass data from our server over to
    //our template file, the ejs file. The ejs file has to live in a 
    //"views" folder and we use the ejs syntax to pick up those properties and insert them into our html.

});

app.listen(port, () => {
    console.log(`Server Is Running on http://localhost:${port}`);
});