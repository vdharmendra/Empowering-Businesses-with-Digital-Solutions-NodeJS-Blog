// jshintversion:6
// EXPRESS 
const express = require('express');
// BODY-PERSER
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extend:true}));
app.use(express.static("public"));
app.set("view engine", 'ejs');


const heroBannerContent ={
    h1: 'Digital Mycelium',
    p: 'What Fungi Teach Us About Web Design and SEO'
};

const homeContent ={
    h1: 'Empowering Businesses with Digital Solutions',
    p: 'Explore expert insights, strategies, and tools that help modern businesses thrive in the digital age. From web development to automation, we cover it all.'
};

const aboutusContent = {
    h1: 'Driving Digital Growth Through Smart Solutions',
    p: 'At [Your Blog Name], we re passionate about helping businesses evolve in the fast-changing digital landscape. Our blog is a space where entrepreneurs, developers, and decision-makers can explore practical advice, emerging technologies, and future-ready strategies. Founded by a team of developers and digital consultants, we aim to simplify complex tech topics and deliver actionable insights — from building robust web apps to automating business processes. Whether you re a startup founder, digital marketer, or tech enthusiast, you ll find content that informs, inspires, and drives impact. '
}

const contactusContent = {
    h1: 'Let’s Build Something Digital, Together',
    p: 'Have a question, project idea, or just want to say hello? We’d love to hear from you. Whether you re looking for expert advice, a custom digital solution, or support with your existing systems'
}

var posts = [{
        title:'Digital Mycelium: The Invisible Code Behind Great Websites',
        desc: 'Just like mycelium powers ecosystems underground, clean, efficient code powers seamless digital experiences. Discover how good development practices form the backbone of every successful site.'
    },
    {
        title:'Fungal Design: How Nature Inspires User-Friendly Websites',
        desc: 'Nature\'s design is intuitive, functional, and beautiful—so should your website be. Learn how web design can borrow from the organic principles of the fungal world to enhance usability and aesthetics.'
    },
    {
        title:'SEO Underground: The Hidden Web That Drives Traffic',
        desc: 'Fungi transfer nutrients invisibly, much like SEO transfers authority and traffic across the web. Explore how behind-the-scenes optimization connects your content with the users searching for it.'
    },
    {
        title:'The Mycelial Web: Building Interconnected Digital Ecosystems',
        desc: 'Fungi create networks that support entire forests. Likewise, smart linking strategies, APIs, and integrated tools create strong digital ecosystems. Learn how to build connections that grow your online presence'
    }
];


// HANDLING REQUEST & RESPONSE [ GET Request ]
// sendFile function used [ not send function ]
app.get("/", function(req, res){
    res.render("index", {heroBannerText : heroBannerContent ,heroBanner: homeContent, posts: posts});
    // res.send("HOME");
});

//  HANDLING REQUEST & RESPONSE [ POST Request ]

app.post("/compose", function(req,res){
    console.log(req.body.postTitle);
    const post = {
        title: req.body.postTitle,
        desc: req.body.postDesc
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