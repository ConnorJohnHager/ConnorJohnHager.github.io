/*
	Student Name: Connor Hager
	File Name: script.js
*/ 

// Hamburger menu function
function hamburger() {
    let navlinks = document.getElementById("nav-links");
    let menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#00A5CF"; 
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#00A5CF"; 
    }
}