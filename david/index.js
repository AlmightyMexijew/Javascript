//This is where our HTML code will go
//These are our variables
let homeText = "Are you looking to build a webpage? Manage your Social Media? Make some money?";
let homeTitle = "Welcome to Gershon Tepper Web Services. We are here to build, maintain, and consult for you.";
let aboutText = "We offer web design, web development, and web security consultation.";
let contactText = "You can contact us at the following";
let contactPhone = "555-555-5555";
let contactEmail = "GershonEmail@TepperWeb.com";

//our functions...for the nav bar
function home() {
    document.getElementById("welcome").innerText = homeTitle;
    document.getElementById("demo").innerText = homeText;
}
function about() {
    document.getElementById("welcome").innerText = "About";
    document.getElementById("demo").innerText = aboutText;
}
function contact() {
    document.getElementById("welcome").innerText = "Contact us now!";
    document.getElementById("demo").innerText = contactText + <br></br> + contactPhone + <br></br> + contactEmail;
}