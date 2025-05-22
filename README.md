# 📝 NodeJS Blogs Website
Tagline: "A dynamic blog site built with Node.js, Express, EJS, and modular templates."

## 📘 Description
This project is a modular, dynamic blog website developed using Node.js, Express.js, and EJS. It features a structured layout with separate header, main content, and footer sections, styled using static CSS files served via Express. All content, including pages like Home, About, and Contact Us, is dynamically rendered using EJS templates, with content generated via ChatGPT.

Ideal for learning full-stack templating, modular layouts, and serving static content using Express.

#### ✅ Features
- Node.js and Express.js backend
- EJS templating for dynamic content rendering
- Modular file structure (header, main, footer)
- Static CSS styling served via Express
- Dynamic navigation via header links
-Page content for Home, About, and Contact Us sourced from ChatGPT
- Clean separation of logic in app.js
- Static assets (CSS) loaded using Express middleware


#### 📂 Project Structure
``` bash 
NodeBlogsWebsite/
├── public/
│   └── styles.css            # Custom styles
├── views/
│   ├── partials/
│   │   ├── header.ejs        # Site navigation
│   │   └── footer.ejs        # Footer section
│   ├── home.ejs              # Home page content
│   ├── about.ejs             # About page content
│   ├── contact.ejs           # Contact Us page content
│   ├── blogs.ejs             # Blogs page content
│   └── compose.ejs           # Shared Compose if used
├── app.js                    # Main server logic
├── package.json
└── README.md

```

## 🚀 Pages Included
### 🏠 Home
"Explore expert insights, strategies, and tools that help modern businesses thrive in the digital age. From web development to automation, we cover it all."

### ℹ️ About Us
"At [Blog Name], we're passionate about helping businesses evolve in the digital landscape. Founded by developers and digital consultants, we simplify complex tech topics and deliver actionable insights."

### 📞 Contact Us
"Have a question or project idea? Let’s build something together. Reach out via our contact form or email us directly at support@example.com."


### Static Middleware for CSS
```bash
app.use(express.static("public"));

```
### Template Usage
```bash
Each .ejs file includes header and footer like this:

<%- include("partials/header") %>

<!-- Page-specific content -->

<%- include("partials/footer") %>

```

### 🛠️ How It Works
Express Routing (app.js)
```bash
// jshintversion:6
// EXPRESS 
const express = require('express');
// BODY-PERSER
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extend:true}));
app.use(express.static("public"));
app.set("view engine", 'ejs');


var posts = [];


// HANDLING REQUEST & RESPONSE [ GET Request ]
// sendFile function used [ not send function ]
app.get("/", function(req, res){
    res.render("index", {heroBannerText : heroBannerContent ,heroBanner: homeContent, posts: posts});
});

//  HANDLING REQUEST & RESPONSE [ POST Request ]

app.post("/compose", function(req,res){
    console.log(req.body.postTitle);
    const post = {
        title: req.body.postTitle,
        desce: req.body.postDesc
    };
    posts.push(post);
    res.redirect("/");
});




// UNDERSTANDING & WORKING WITH ROUTES
// BLOGS PAGE 
// THIS IS CONTACT US PAGE
app.get("/blogs", function(req,res){
    res.render("blogs", {posts: posts});
});
// ABOUT US PAGE 
app.get("/aboutus", function(req,res){
    res.render("aboutus", {heroBanneraboutus: aboutusContent});
});
// THIS IS CONTACT US PAGE
app.get("/contactus", function(req,res){
    res.render("contactus", {heroBannercontactus: contactusContent});
});
// COMPOSE ROUTE
app.get("/compose", function(req,res){
    res.render("compose", {heroBanner: homeContent});
});
// EXPRESS APP LISTENING ON PORT 3000
app.listen(3000, function(){
    console.log("Server up and running on port 3000");
});

```

#### 📌 Future Enhancements
- Add a blog post system (using a database or Markdown files)
- Admin dashboard for writing posts
- Pagination and tags
- Contact form with email handling (Nodemailer)
- Responsive layout with Bootstrap or Tailwind

## 🧑‍💻 Author
- Built by [Virendra D. Verma] — content support via ChatGPT.
- front-end like header, main and footer section are taken from CODEPEN
- Feel free to fork, contribute, or share feedback!