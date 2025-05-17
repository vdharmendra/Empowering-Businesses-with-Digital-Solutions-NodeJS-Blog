// jshintversion:6
// EXPRESS 
const express = require('express');
// BODY-PERSER
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extend:true}));
app.use(express.static("public"));
app.set("view engine", 'ejs');



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



// HANDLING REQUEST & RESPONSE [ GET Request ]
// sendFile function used [ not send function ]
app.get("/", function(req, res){
    res.render("index", {heroBanner: homeContent});
    // res.send("HOME");
});

//  HANDLING REQUEST & RESPONSE [ POST Request ]

// app.post("/", function(req,res){
//     
// });




// UNDERSTANDING & WORKING WITH ROUTES
// BLOGS PAGE 
// THIS IS CONTACT US PAGE
app.get("/blogs", function(req,res){
    res.render("index", {heroBanner: homeContent});
});
// ABOUT US PAGE 
app.get("/aboutus", function(req,res){
    res.render("aboutus", {heroBanneraboutus: aboutusContent});
});
// THIS IS CONTACT US PAGE
app.get("/contactus", function(req,res){
    res.render("contactus", {heroBannercontactus: contactusContent});
});

// EXPRESS APP LISTENING ON PORT 3000
app.listen(3000, function(){
    console.log("Server up and running on port 3000");
});