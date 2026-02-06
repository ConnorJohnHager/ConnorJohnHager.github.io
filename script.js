/*
Author: Connor Hager
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

// Sync nav-icon height with header image
function syncNavHeight() {
    const header = document.querySelector('header img');
    const navIcon = document.querySelector('.nav-icon');
    
    if (header && navIcon) {
        const headerHeight = header.offsetHeight;
        navIcon.style.height = headerHeight + 'px';
        navIcon.style.width = headerHeight + 'px'; // Make it square
    }
}

// Run on load and resize
window.addEventListener('load', syncNavHeight);
window.addEventListener('resize', syncNavHeight);