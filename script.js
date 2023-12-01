/*
	Student Name: Connor Hager
	File Name: script.js
*/ 

// Hamburger menu function
function hamburger() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#21B6A8"; 
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#116530"; 
    }
}