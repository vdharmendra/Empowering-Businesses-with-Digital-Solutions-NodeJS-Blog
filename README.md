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
│   └── layout.ejs (optional) # Shared layout if used
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


### 🛠️ How It Works
Express Routing (app.js)
```bash
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
```
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