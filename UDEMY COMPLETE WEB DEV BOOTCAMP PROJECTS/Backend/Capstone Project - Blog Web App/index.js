//This index.js file is your server
import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 3000;

//Middleware
//Set EJS as a view engine
app.set("view engine", "ejs");

//Serve static files fromt the "public" directory/adding the 
// static middleware in your server
app.use(express.static("public"));

app.use(express.urlencoded({ extended:true}));


//In-memory post storage
let blogPosts = [];

//home page showing blog posts
app.get("/", (req, res) => {
    res.render("index.ejs", { posts: blogPosts });
});

//show form to create new post
app.get("/compose", (req, res) => {
    res.render("compose.ejs");

});

// Handle form submission
app.post("/compose", (req, res) => {
    let post = {
        id: uuidv4(), //generate unique ID
        title: req.body.title,
        content: req.body.content
    };
    blogPosts.unshift(post); //Add to beginning
    res.redirect("/");
});

//Define the route for home page
app.get("/about", (req, res) => {
   res.render("about.ejs");

});

//Define the route for the contact page
app.get("/contact", (req, res) => {
    res.render("contact.ejs");

});

//Delete post
app.post("/delete/:id", (req,res) => {
    const postId = req.params.id;
    blogPosts = blogPosts.filter(post => post.id !== postId);
    res.redirect("/");
});







//Start Server 
app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});